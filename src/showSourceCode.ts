import { readFileSync } from "fs";
import { resolve } from "path";

export const showSoureCode = () => {
  const filePath = resolve("./assert/hw.cpp");
  return readFileSync(filePath, "utf-8");
};
