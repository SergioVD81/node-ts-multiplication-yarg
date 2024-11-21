import { CreateTable } from "../config/domain/use-case/create-table.use-case";
import { SaveFile } from "../config/domain/use-case/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName?: string;
  fileDestination?: string;
}

export class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileName,
    fileDestination,
  }: RunOptions) {
    console.log("Server running ...");
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination,
      fileName,
    });
    if (showTable) {
      console.log(table);
    }
    wasCreated ? console.log("File created") : "File not created";
  }
}
