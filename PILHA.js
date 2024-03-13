class No {
    constructor(valor){
      this.valor = valor;
      this.proximo = null;
    }
  }
  
  class Pilha {
    constructor() {
      this.topo = null; //INICIALIZA O TOPO DA PILHA COMO NULO. O TOPO NÃO É A CABEÇA, E SIM O FINAL DA LISTA OU O TOPO DA PILHA.
      this.tamanho = 0;
    }
  
    // push: Insere um elemento no topo da pilha
    push(elemento) {
      const novoNo = new No(elemento); //É CRIADO UM OBJ DA CLASSE NO E PASSADO UM ELEMENTO COMO PARÂMETRO
      if (this.topo === null) {
        this.topo = novoNo; // SE O TOPO DA PILHA FOR NULO A MESMA RECEBE O VALOR PASSADO
      } else {
        novoNo.proximo = this.topo; //CASO CONTRÁRIO O NOVO NO É INSERIDO NO TOPO DA PILHA. O PROXIMO DO NOVO NÓ É CONFIGURADO PARA APONTAR PARA O ATUAL TOPO DA PILHA, E O TOPO DA PILHA É ATUALIZADO PARA SER O NOVO NÓ.
        this.topo = novoNo;
      }
      this.tamanho++;
    }
  
    // pop: Remove e retorna o elemento do topo da pilha
    pop() {
      if (this.topo === null) {
        return null; // PILHA VAZIA
      }
      const valorRemovido = this.topo.valor; //O "valorRemovido" RECEBE O VALOR NO TOPO DA LISTA
      this.topo = this.topo.proximo; // O TOPO É ATUALIZADO PARA O PROXIMO DA PILHA
      this.tamanho--; //DIMINIU UM NO TAMANHO DA PILHA 
      return valorRemovido; // RETORNA O "valorRemovido".
    }
  
    // peek: Retorna o elemento no topo da pilha sem removê-lo
    peek() {
      return this.topo !== null ? this.topo.valor : null; // VERIFICA SE A PILHA ESTA VAZIA E CASO SIM, RETORNA NULO. CASO CONTRÁRIO RETORNA O VALOR DO TOPO DA PILHA.
    }
  
    // isEmpty: Retorna true se a pilha estiver vazia, caso contrário false
    isEmpty() {
      return this.tamanho === 0;
    }
  
    // size: Retorna o número de elementos na pilha
    size() {
      return this.tamanho;
    }

    // imprimir: Imprime os elementos da pilha
    imprimir() {
    if (this.topo === null) {
        console.log("Pilha vazia.");
    } else {
        let atual = this.topo;
        while (atual !== null) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }
  }
}
  
  // Exemplo de uso da pilha
  const pilha = new Pilha();
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  
  console.log("Pilha:");
  console.log("Topo:", pilha.peek());
  console.log("Tamanho:", pilha.size());
  
  console.log("Desempilhando:", pilha.pop());
  
  console.log("Pilha após desempilhar:");
  console.log("Topo:", pilha.peek());
  console.log("Tamanho:", pilha.size());
  console.log("Pilha:");
  pilha.imprimir();
  
