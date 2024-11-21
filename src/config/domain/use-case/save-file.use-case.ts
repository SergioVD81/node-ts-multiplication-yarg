import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: OptionsSAveFile) => boolean;
}

export interface OptionsSAveFile {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute = ({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: OptionsSAveFile) => {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(
        `${fileDestination}/${fileName}.txt`,
        fileContent,
        "utf8"
      );

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
