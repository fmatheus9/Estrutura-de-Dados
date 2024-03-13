function selectionSort(arr) {
    const len = arr.length; //a variavel 'len' recebe o tamanho do array
    for (let i = 0; i < len - 1; i++) { // i = 0 
        let minIndex = i; // o minIndex = i = 0 O algoritmo começa selecionando o primeiro elemento do array como o menor (assumindo que é o menor até o momento).
        for (let j = i + 1; j < len; j++) { // j recebe o i + 1, para o minIndex não ser igual ao j
            if (arr[j] < arr[minIndex]) { // se o array'j' for menor que o array'minIndex', seu valor é atualizado
                //Em seguida, o algoritmo percorre o restante do array para encontrar o menor elemento comparando-o com o elemento selecionado anteriormente. 
                //Se um elemento menor for encontrado, atualizamos o índice do menor elemento.
                minIndex = j; 
            }
        }
        if (minIndex !== i) { 
            //Após percorrer todo o array, se o índice do menor elemento encontrado for diferente do índice inicial (ou seja, se um elemento menor foi encontrado),
            // trocamos os elementos de posição. O menor elemento é movido para a posição inicial.
            // Trocar os elementos de posição
            let temp = arr[i]; //cria uma variavel auxiliar que guarda o valor do arrya[i]
            arr[i] = arr[minIndex]; // o indeice 'i' do vetor recebe o valor de 'minIndex', no caso o array[j]
            arr[minIndex] = temp; // o array[j] recebe o valor da variavel auxiliar.
        }
        //Repetimos esse processo para todos os elementos do array, começando pelo segundo elemento, depois o terceiro e assim por diante. 
        //A cada iteração, encontramos o menor elemento restante e o movemos para a posição correta.
        //A complexidade de tempo do algoritmo de ordenação por seleção (selection sort) é O(n^2), onde 'n' é o número de elementos no array a ser ordenado. Isso ocorre porque, em cada iteração, o algoritmo realiza uma comparação 
        //entre o elemento atual e todos os elementos restantes no array, resultando em um total de aproximadamente n^2 comparações.
    }
    return arr;
}

// Exemplo de uso:
const array = [64, 25, 12, 22, 11];
console.log("Array original:", array);
console.log("Array ordenado:", selectionSort(array));
