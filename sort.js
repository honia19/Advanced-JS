// Quick Sort

const swap = (items, firstIndex, secondIndex) => {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

const partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
  }

  return i;
}

const quickSort = (items, left, right) => {
  let index = 0;

  if (items.length > 1) {
      index = partition(items, left, right);

      if (left < index - 1) {
          quickSort(items, left, index - 1);
      }
      if (index < right) {
          quickSort(items, index, right);
      }
  }

  return items;
};

const items = [4, 2, 6, 5, 3, 9];

console.log(quickSort(items, 0, items.length - 1));
