// Função swap, com o objetivo de trocar os valores de duas posições de um vetor, 
// tendo como parâmetros de entrada o vetor e as posições
var swap = (vetor, posicao1, posicao2) => {
    let aux = vetor[posicao1];
    vetor[posicao1] = vetor[posicao2];
    vetor[posicao2] = aux;

    return vetor;
}


// Função shuffle, com o objetivo de embaralhar os elementos de um vetor, tendo
// como parâmetros de entrada o vetor e a quantidade de trocas
var shuffle = (vetor, qtdTrocas) => {
    for(let x = 0; qtdTrocas > x; qtdTrocas--) {
        vetor.sort(() => Math.random() - 0.5);
    }
    return vetor;
}


//Função bubble_sort, para ordenar um vetor de inteiros com o algoritmo Bubble
//Sort, tendo como parâmetro de entrada o vetor de inteiros
const bubble_sort = (lista) => {
    for (let x = 0; x < lista.length; x++) {
        for (let y = 0; y < lista.length - x - 1; y++) {
            if (lista[y] > lista[y + 1]) {
                swap(lista, y, y+1);
            }
        }
    }
    console.log("To dentro" + lista);
    return lista;
}


// Função selection_sort, para ordenar um vetor de inteiros utilizando o algoritmo
// Selection Sort, tendo como parâmetro de entrada o vetor de valores inteiros
var selection_sort = (vetor) => {
    for(let x = 0; x < vetor.length; x++) {
        let menor = x;
        for (let y = x+1; y < vetor.length; y++) {
            if (vetor[y] < vetor[menor]) { menor = y; }
        }
        if (menor != x) {
            swap(vetor, x, menor);
        }
    }
    return vetor;
}

// Função quick_sort, para ordenar um vetor de inteiros com o algoritmo Quick Sort,
// recursivo, tendo como parâmetros o vetor, posição inicial e posição final
var quick_sort = (vetor, initPos, finalPos) => {
    if (initPos < finalPos) {
        let pivotPos = particionamento(vetor, initPos, finalPos);
        quick_sort(vetor, initPos, pivotPos - 1);
        quick_sort(vetor, pivotPos + 1, finalPos);
    }
    return vetor;
}

// Função particionamento, de apoio a quick_sort, tendo como parâmetros o vetor,
// posição inicial e posição final.
var particionamento = (vetor, initPos, finalPos) => {
    let pivot = vetor[initPos];
    let i = initPos;

    for (let x = initPos + 1; x <= finalPos; x++) {
        if (vetor[x] <= pivot) {
            i++;
            swap(vetor, i, x);
        }
    }
    swap(vetor, initPos, i);
    return i;
}