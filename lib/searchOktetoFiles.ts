import { readdir, stat } from "fs/promises";
import { join } from "path";

export default async function searchOktetoFiles(
  directory: string,
  depth: number,
): Promise<string[]> {
  let files: string[] = [];
  let currentDepth = 0;
  async function searchDir(currentDir: string, currentDepth: number) {
    if (currentDepth > depth) return;
    let items: string[];
    items = await readdir(currentDir);
    for (const item of items) {
      const fullPath = join(currentDir, item);
      if ((await stat(fullPath)).isDirectory()) {
        await searchDir(fullPath, currentDepth + 1);
      } else if (item.endsWith("okteto.yml") || item.endsWith("okteto.yaml")) {
        files.push(fullPath);
      }
    }
  }
  await searchDir(directory, currentDepth);
  return files;
}
