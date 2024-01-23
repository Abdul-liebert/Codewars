function alienLanguage(str) {
    const words = str.split(' ');

    const translatedWords = words.map(word => {
        const length = word.length;

        if (length === 0) {
            return '';
        }

        const convertedWord = word.slice(0, length - 1).toUpperCase() + word[length - 1].toLowerCase();

        return convertedWord;
    });

    const result = translatedWords.join(' ');

    return result;
}