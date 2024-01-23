function grabDoll(dolls) {
    let bag = [];

    for (let i = 0; i < dolls.length; i++) {
        let currentDoll = dolls[i];

        if (currentDoll === "Hello Kitty" || currentDoll === "Barbie") {
            bag.push(currentDoll);
        } else {
            continue;
        }
        if (bag.length === 3) {
            break;
        }
    }

    return bag;
}