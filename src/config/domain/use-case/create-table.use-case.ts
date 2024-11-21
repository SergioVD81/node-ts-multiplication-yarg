export interface CreateTableUseCase {
  execute: (otion: Options) => string;
}

export interface Options {
  base: number;
  limit?: number;
}
export class CreateTable implements CreateTableUseCase {
  constructor() {
    /*
        Inyeccion de dependencia
         */
  }

  execute({ base, limit = 10 }: Options) {
    let tabla: string = `
        ================================
        Tabla de multiplicar del ${base}
        ================================\n`;
    for (let i = 0; i < limit; i++) {
      let result = base * i;
      tabla += `${base} * ${i} = ${result}\n`;
    }
    return tabla;
  }
}
