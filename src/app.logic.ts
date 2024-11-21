import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limit, s: showTable } = yarg;

const outputPath: string = "outputs";
fs.mkdirSync(outputPath, { recursive: true }); //Recursivo es decir se creo folder1/folder2/etc se van creando uno dentro del otro
//fs.writeFileSync(`${outputPath}/tabla-5.txt`, tabla, "utf8");
