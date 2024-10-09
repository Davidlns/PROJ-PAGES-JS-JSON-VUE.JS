// troca os valores de 2 posições do vetor
const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

// embaralha os elementos do vetor
const shuffle = (array, swaps) => {
    for (let i = 0; i < swaps; i++) {
      const pos1 = Math.floor(Math.random() * array.length);
      const pos2 = Math.floor(Math.random() * array.length);
      [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
    }
};

// ordena o vetor com bubble sort
const bubble_sort = array => {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return array;
};

// ordena o vetor com selection sort
const selection_sort = array => {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
    return array;
};

// ordena o vetor com quick sort e partition
const quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start >= end) return;
  
    const pivotIndex = particionamento(array, start, end);
    quick_sort(array, start, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, end);
  };
  
  const particionamento = (array, start, end) => {
    const pivotValue = array[end];
    let pivotIndex = start;
  
    for (let i = start; i < end; i++) {
      if (array[i] < pivotValue) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        pivotIndex++;
      }
    }
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;
};