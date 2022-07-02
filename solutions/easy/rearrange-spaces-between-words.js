/**
 * You are given a string text of words that are placed among some number of spaces.
 * Each word consists of one or more lowercase English letters and are separated by at least one space.
 * It's guaranteed that text contains at least one word.
 *
 * Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized.
 * If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.
 *
 * Return the string after rearranging the spaces.
 */

/**
 * @param string text
 * @return string
 */
const reorderSpaces = (text) => {
    const words = text.split(' ').filter((word) => word !== '');

    let numLetters = 0;
    words.forEach((word) => (numLetters += word.length));
    const numSpaces = text.length - numLetters;

    if (words.length === 1) {
        return words[0] + getSpaceText(numSpaces);
    }

    const numEvenSpaces = Math.floor(numSpaces / (words.length - 1));
    const numRemainingSpaces = numSpaces % (words.length - 1);
    return (
        words.join(getSpaceText(numEvenSpaces)) +
        getSpaceText(numRemainingSpaces)
    );
};

/**
 * @param number num
 * @return string
 */
const getSpaceText = (num) => {
    let spaceText = '';
    for (let i = 0; i < num; i++) {
        spaceText += ' ';
    }
    return spaceText;
};
