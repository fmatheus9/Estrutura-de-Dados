class No { //CLASSE QUE RECEBE UM VALOR E CRIA O NO SENDO NULO
  constructor(valor) {
    this.valor = valor;
    this.proximo = null; //PONTEIRO
  }
}

class ListaEncadeada { //CRIA A LISTA VAZIA, COM A CABEÇA = NULL E TAMANHO 0
  constructor() {
    this.cabeca = null;
    this.tamanho = 0;
  }

  // Adicionar um elemento no final da lista
  adicionar(valor) {
    const novoNo = new No(valor); ); //CIRA UM OBJ DA CLASSE NÓ, QUE RECEBE UM VALOR E O PROXIMO NÓ COMO NULO.
    if (this.cabeca === null) {
      this.cabeca = novoNo; //SE A CABEÇA FOR NULLA, A CABEÇA RECEBE UM NOVO NO
    } else {
      let atual = this.cabeca; //CRIA UMA VARIAVEL ‘’ATUAL’’, QUE RECEBE A CABEÇA COMO VALOR 
      while (atual.proximo !== null) { 
        atual = atual.proximo; //ENQUANTO O PROXIMO NÓ NÃO FOR NULO O ‘’ATUAL’’ RECEBE O PROXIMO VALOR. 
      }
      atual.proximo = novoNo; //QUANDO FOR NULO SAI DO WHILE E O ATUAL.PROXIMO GANHA UM NOVO NO 
    }
    this.tamanho++; //O TAMANHO DA LISTA RECEBE +1
  }

  // Remover um elemento da lista pelo seu valor
  remover(valor) {
    if (this.cabeca === null) { //SE A CABEÇA FOR NULA, NÃO TEM O QUE REMOVER 
      return;
    }
    if (this.cabeca.valor === valor) { //SE A CABEÇA NÃO FOR NULA E FOR IGUAL AO VALOR QUE VAI SER REMOVIDO, A CABEÇA RECEBE O PRÓXIMO VALOR E O TAMANHO DA LISTA DIMINUI 1.
      this.cabeca = this.cabeca.proximo;
      this.tamanho--;
      return; //SAI DA FUNCAO
    }
    let anterior = this.cabeca; //A VARIAVEL “ANTERIOR” RECEBE O VALOR DA CABEÇA.
    let atual = this.cabeca.proximo; //A VARIAVEL “ATUAL” RECEBE O PROXIMO
    while (atual !== null && atual.valor !== valor) { //ENQUANTO O ATUAL FOR DIFERENTE DE NULO E O VALOR DO ATUAL FOR DIFERENTE DO VALOR :
      anterior = atual;  //O ANTERIOR RECEBE O ATUAL E O AUTAL RECEBE O PROX DA LISTA 
      atual = atual.proximo;
    } 
    if (atual !== null) { //SE O AUTAL FOR DIF DE NULO: O ANTERIOR.PROX RECEBE O AUTAL.PROX
      anterior.proximo = atual.proximo;
      this.tamanho--;
    }
  }

  // Buscar um elemento na lista pelo seu valor
  buscar(valor) { //RECEBE O VALOR A SER BUSCADO COMO PARÂMETRO
    if (this.cabeca === null) { //SE A CABEÇA FOR NULA, NÃO TEM VALORES NA LISTA ENT N TEM OQ FAZER
      return null;
    }
    let atual = this.cabeca;//A VARIAVEL ‘’ATUAL’’ RECEBE O VALOR DA CABEÇA
    while (atual !== null && atual.valor !== valor) { //ENQUANTO O ATUAL FOR DIFERENTE DE NULO E O ATUAL FOR DIFERENTE DO VALOR BUSCADO, O “ATUAL” RECEBE O PROXIMO DA LISTA. QUANDO FOR IGAUL O VALOR.
      atual = atual.proximo;
    }
    return atual === null ? null : atual.valor; //SE FOR IGUAL A NULLO, RETORNA NULLO SENAO RETORNA O ATUAL.VALOR
  }

  // Imprimir a lista
  imprimir() {
    let atual = this.cabeca;
    while (atual !== null) {
      console.log(atual.valor);
      atual = atual.proximo;
    }
  }
}

// Exemplo de uso
const lista = new ListaEncadeada();
lista.adicionar(10);
lista.adicionar(20);
lista.adicionar(30);
lista.imprimir(); // Imprime 10, 20, 30

lista.remover(20);
lista.imprimir(); // Imprime 10, 30

console.log(lista.buscar(30)); // Imprime 30
console.log(lista.buscar(40)); // Imprime null
