class No {
    constructor(valor){
      this.valor = valor;
      this.proximo = null;
    }
  }
  
  class Fila {
    constructor() {
      this.cabeca = null; //INICIALIZA A CABEÇA COMO NULA
      this.cauda = null; //INICIALIZA A CALDA COMO NULA
      this.tamanho = 0;
    }
  
    // Enqueue: Adiciona um elemento ao final da fila
    Enqueue(valor) {
        const novoNo = new No(valor); //CRIA UM OBJETO DA CLASSE "NO" QUE RECEBE UM VALOR PASSADO PELO CONTRUTOR E O PROXIMO COMO NULO.
        if (this.cabeca === null) { //CASO A CABEÇA SEJA NULA, A CABEÇA E A CALDA RECEBEM O VALOR PASSADO, POIS A FILA ESTA VAZIA.
          this.cabeca = novoNo;
          this.cauda = novoNo;
        } else {
          this.cauda.proximo = novoNo; //SE A FILA NÃO ESTIVER VAZIA, ADICIONA O NOVO NO AO FINAL DA FILA. O PROXIMO DO NÓ QUE ATUALMENTE É A CAUDA É CONFIGURADO PARA APONTAR PARA O NOVO NÓ, E O NOVO NÓ SE TORNA A NOVA CAUDA.
          this.cauda = novoNo;
        }
        this.tamanho++; //ADICIONA 1 NO TAMANHO DA FILA
    }
  
    // Dequeue: Remove o elemento do início da fila
    Dequeue() {
        if (this.cabeca === null) { //SE A CABEÇA FOR NULA, A FILA ESTA VAZIA
        return null;
        }
        const valorDesenfileirado = this.cabeca.valor; //O "valorDesenfileirado" RECEBE O VALOR DA CABEÇA
        this.cabeca = this.cabeca.proximo; //A CABEÇA RECEBE O PROXIMO VALOR DA FILA
        this.tamanho--; //DIMINUI O TAMANHO DA FILA
        return valorDesenfileirado; //RETORNA O VALOR REMOVIDO.
    }
  
     // Peek ou Front: Retorna o elemento na frente da fila sem removê-lo
    Front() {
        return this.cabeca !== null ? this.cabeca.valor : null; //VERIFICA SE O VALOR DA CABEÇA É NULO, CASO SIM A LISTA ESTA VAZIA. CASO CONTRÁRIO RETORNA O VLOR DA CABEÇA
    }
  
     // Verificar se a fila está vazia
    isEmpty() {
        return this.tamanho === 0; //CASO O TAMANHO SEJA EXATAMENTE IGUAL A 0 RETORNA VERDADEIRO, CASO CONTRÁRIO RETORNA FALSO.
    }

    // Consultar o tamanho da fila
    size() {
        return this.tamanho; //MOSTRA O TAMANHO DA FILA.
    }
    // Imprimir a fila
    imprimir() {
        let atual = this.cabeca;
        while (atual !== null) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }
}

// Exemplo de uso da fila
const fila = new Fila();
fila.Enqueue(1);
fila.Enqueue(2);
fila.Enqueue(3);

console.log("Fila:");
fila.imprimir();

console.log("Consultando frente:", fila.Front());

console.log("Desenfileirando:", fila.Dequeue());

console.log("Fila após desenfileirar:");
fila.imprimir();
