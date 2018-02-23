class Sorter {
  constructor() {
    this.array = [];
    this.condition = false;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
   return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) { 
    let afterAllArray = this.array;
    let preArray = []; 
    let indicesAfterSort = indices.sort(); 
    for(let i = 0; i <= indices.length - 1; i++){
      preArray.push(this.array[indices[i]]); 
    }
    for(let i = 0; i <= indices.length - 1; i++){
      afterAllArray[indices[i]] = (preArray.sort(this.compareFunction))[i]; 
    }
    return afterAllArray; 
  }

  compareFunction(first, second)
{
  if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1; 
} 
 reverseCompareFunction(left, right){ right - left;
  sorter.setComparator(reverseCompareFunction);
 }
  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;