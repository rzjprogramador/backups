type DataNascimento = {
  dia: number
  mes: number
  ano: number
}

interface Endereco {
  cep: string;
  longadouro: string;
  numero: string;
  complemento: string;
  cidade: Cidade;
}

interface Cidade {
  nome_cidade: string;
  uf: string;
}

export type {
  DataNascimento,
  Endereco,
}