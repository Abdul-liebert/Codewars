function cutIt(arr) {
    const shortTestLength = math.min(...arr.map(str => str.length))
    return arr.map(str => str.slice(0, shortTestLength))

}