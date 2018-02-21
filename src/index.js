class Sorter {
  constructor() {
    this.array = [];
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
      afterAllArray[indices[i]] = (preArray.sort())[i]; 
    }
    return afterAllArray; 
  }

  setComparator(compareFunction) {
    return this.array.sort(compareFunction);
  }
}

module.exports = Sorter;