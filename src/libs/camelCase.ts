export const camelCase = (string: string) => {
    const words = string.split(/[_-]/);
    return words
        .map((word, i) => {
            if (i === 0) {
                return word.toLowerCase();
            } else if (word.toUpperCase() === word) {
                return word.toLowerCase();
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        })
        .join("");
};
