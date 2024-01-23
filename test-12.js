function giveMeFive(obj) {
    var five = []
    for (var key in obj) {
        if (key.length === 5) five.push(key)
        if (obj[key].length === 5) five.push(obj[key])

    }
    return five
}
console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }))
console.log(giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }))