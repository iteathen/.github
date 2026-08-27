import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const required = [
  "AGENTS.md",
  "CODE_OF_CONDUCT.md",
  "CONTRIBUTING.md",
  "GOVERNANCE.md",
  "LICENSE",
  "README.md",
  "SECURITY.md",
  "SUPPORT.md",
  "profile/README.md",
  ".github/CODEOWNERS",
  ".github/PULL_REQUEST_TEMPLATE.md",
  ".github/ISSUE_TEMPLATE/config.yml",
  ".github/ISSUE_TEMPLATE/defect.yml",
  ".github/ISSUE_TEMPLATE/proposal.yml",
  ".github/workflows/community-quality.yml",
];

for (const file of required) {
  if (!existsSync(resolve(root, file))) errors.push(`missing required file: ${file}`);
}

function walk(directory) {
  const files = [];
  for (const entry of readdirSync(directory)) {
    if (entry === ".git" || entry === "node_modules") continue;
    const absolute = resolve(directory, entry);
    if (statSync(absolute).isDirectory()) files.push(...walk(absolute));
    else files.push(absolute);
  }
  return files;
}

const files = walk(root);
for (const absolute of files) {
  const relative = absolute.slice(root.length + 1).replaceAll("\\", "/");
  if (/^(?:secrets\/|\.env(?:\.|$))/i.test(relative)) {
    errors.push(`secret-bearing path must not be tracked: ${relative}`);
  }

  if (relative.endsWith(".md")) {
    const markdown = readFileSync(absolute, "utf8");
    for (const match of markdown.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1].trim().replace(/^<|>$/g, "");
      if (target === "" || target.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
      const local = decodeURIComponent(target.split("#", 1)[0]);
      if (!existsSync(resolve(dirname(absolute), local))) {
        errors.push(`${relative}: broken local link: ${target}`);
      }
    }
  }

  if (relative.startsWith(".github/workflows/") && /\.ya?ml$/i.test(relative)) {
    const workflow = readFileSync(absolute, "utf8");
    for (const match of workflow.matchAll(/^\s*uses:\s*([^\s#]+)/gm)) {
      if (!/@[0-9a-f]{40}$/.test(match[1])) {
        errors.push(`${relative}: action is not pinned to a full commit: ${match[1]}`);
      }
    }
  }
}

if (errors.length > 0) {
  for (const error of errors) process.stderr.write(`ERROR: ${error}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`Community standards verified across ${files.length} files.\n`);
}
