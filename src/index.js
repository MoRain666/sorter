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

  sort(indices) { //[7,6,5,48,93,1,0,14],index=[6,3,5,1];
    let afterAllArray = this.array;
    let preArray = []; //[6,48,1,0],after = [0,1,6,48]
    let indicesAfterSort = indices.sort(); //[1,3,5,6]
    for(let i = 0; i <= indices.length - 1; i++){
      preArray.push(this.array[indices[i]]); 
    }
    for(let i = 0; i <= indices.length - 1; i++){
      afterAllArray[indices[i]] = (preArray.sort())[i]; 
    }
    return afterAllArray; // [7,0,5,1,93,6,48,14]
  }

  setComparator(compareFunction) {
    return this.array.sort(compareFunction);
  }
}

module.exports = Sorter;