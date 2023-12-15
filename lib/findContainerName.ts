import { parse } from "yaml";
import fs from "fs/promises";

export async function findContainerName(path: string) {
  const doc = parse(await fs.readFile(path, { encoding: "utf-8" }));
  if (doc && doc["dev"]) {
    return Object.keys(doc?.["dev"])[0];
  }
}
