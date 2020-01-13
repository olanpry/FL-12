function convert() {
    let result = [],
        i = 0;
    for (; i < arguments.length; i++) {
        typeof arguments[i] === 'string' ? result.push(+arguments[i]) : result.push(arguments[i].toString())
    }

    return result;
}
function executeforEach(arr, func) {
    for (let i=0;i<arr.length;i++){
        func(arr[i]);
    }
}
function mapArray(arr, outerFunc) {
    let result = [],
        i = 0,
        l = arr.length;
    for (; i < l; i++) {
        result.push(+arr[i])
    }
    executeforEach(result, outerFunc);
}
function filterArray(arr, func) {
    let result = [];
    for (let el in arr) {
        if (func(arr[el])) {
            result.push(arr[el])
        }
    }
    return result
}
function flipOver(str) {
    let i = str.length - 1,
        result = str[i];
    for (; i > 0; i--) {
        result = result + str[i - 1];
    }
    return result
}
function makeListFromRange(arr) {
    let result = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        result.push(i)
    }
    return result
}
function getArrayOfKeys(arr, keyname) {
    let result = [];
    for (let i in arr) {
        if ({}.hasOwnProperty.call(arr[i], keyname)) {
            result.push(arr[i][keyname])
        }
    }
    return result
}
function substitute(arr) {
    let result = [];
    mapArray(arr, x => {
        result.push(x > 30 ? x : '*');
    });
    return result
}
function getPastDay(dayX, delta) {
    let resultDay = new Date(dayX);
    resultDay.setDate(dayX.getDate() - delta);
    return resultDay.toDateString()
}
function formatDate(date) {
    let month = date.getMonth() + 1,
        minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    return date.getFullYear() + '/' + month + '/' + date.getDate() + ' ' + date.getHours() + ':' + minutes;
}