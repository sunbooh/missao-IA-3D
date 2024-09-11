const nomes = ["juca","jose carlos", "deolane", "catra","pipokinha","alfredo"];

export function aleatorio (lista)
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
  }

  export const nome = aleatorio(nomes)
  