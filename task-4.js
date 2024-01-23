var arr = [1, 2, 3]

function getLength(arr) {
    return arr.length;
}

function getFirst(arr) {
    return arr[0];
}

function getLast(arr) {
    return arr[arr.length - 1];
}

function pushElement(arr) {
    arr.push(4);
    return arr;
}

function popElement(arr) {
    arr.pop()
    return arr;
}