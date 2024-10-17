const changeArray = (arr, n) => {
    if(arr.length / 2 !== n) {
        return 'Panjang data harus 2n'
    }
    const result = [];
    for(let i = 0; i<n; i++) {
        result.push(arr[i])
        result.push(arr[i+n])
    }
    return result
};

const data = [1, 2, 3, 4, 5, 6];
const n = 3;
console.log(changeArray(data, n));
