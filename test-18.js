function customSplitAndJoin(str, separator) {
    const words = str.split(' ');

    const modifiedWords = words.map(word => word.split('').join(separator));

    const result = modifiedWords.join(' ');

    return result;
}