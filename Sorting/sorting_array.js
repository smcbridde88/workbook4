function compareAscendingNumbers(a, b) {
    if (a < b) return -1;
    else if (a == b) return 0;
    else return 1;
}

let numbers = [3, 27,1,400,1,111,5];
numbers.sort(compareAscendingNumbers);
console.log(numbers);