const changeArray = (arr, n) => {
    if(arr.length / 2 !== n) {
        return 'Panjang data harus 2n'
    }
    const firstArr = arr.slice(0, n);
    const secondArr = arr.slice(n, arr.length)
    const result = [];
    for(let i = 0; i<n; i++) {
        result.push(firstArr[i])
        result.push(secondArr[i])
    }
    return result
};

const data = [1, 2, 3, 4, 5, 6];
const n = 3;
console.log(changeArray(data, n));
