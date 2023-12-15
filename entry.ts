import { loadConfig } from "c12";
import searchOktetoFiles from "./lib/searchOktetoFiles";
import { configDefaults } from "./util/defaults";
import inquirer from "inquirer";
import { findContainerName } from "./lib/findContainerName";

main()
  .catch((e) => console.error(e))
  .then(() => (process.env.DEV === "true" ? {} : process.exit(0)));

async function main() {
  const { config } = await loadConfig({
    configFile: "dev.config.ts",
    defaults: configDefaults,
    defaultConfig: configDefaults,
  });
  if (!config)
    throw new Error(
      "Can't find config. Please create dev.config.ts in root folder",
    );
  const files = await searchOktetoFiles(
    config.directory,
    config.includedFoldersDepth,
  );

  const projects: { name: string | undefined; path: string }[] = [];
  for (const f of files) {
    projects.push({ name: await findContainerName(f), path: f });
  }
  const resp = inquirer.prompt([
    {
      name: "Test",
      type: "list",
      choices: projects.map((p) => (p.name ? p.name + ` (${p.path})` : p.path)),
    },
  ]);
}
