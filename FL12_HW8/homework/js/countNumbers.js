function makeNumber(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            result = result + str[i];
        }
    }
    return result
}
function countNumbers(str) {
    let result = makeNumber(str).split('').sort();
    let obj = {};
    let objectkey = result[0];
    obj[objectkey] = 1;
    for (let i = 1; i < result.length - 1; i++) {
        if (result[i] === result[i - 1]) {
            obj[objectkey]++
        } else {
            objectkey = result[i];
            obj[objectkey] = 1;
        }
    }
    return obj
}
countNumbers();