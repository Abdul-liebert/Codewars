function topSecret(file) {
    const decryptedText = file.split('').map(char => {
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            const code = char.charCodeAt(0);
            const baseCode = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            const decryptedCode = ((code - baseCode - 3 + 26) % 26) + baseCode;
            return String.fromCharCode(decryptedCode);
        } else {
            return char;
        }
    }).join('')
}