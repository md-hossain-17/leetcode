/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *      Open brackets must be closed by the same type of brackets.
 *      Open brackets must be closed in the correct order.
 */

/**
 * @param string s
 * @return boolean
 */
const isValid = (s) => {
    const stack = [];
    for (const c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
            continue;
        }

        const lastOpen = stack.pop();
        if (
            lastOpen === undefined ||
            (c === ')' && lastOpen !== '(') ||
            (c === '}' && lastOpen !== '{') ||
            (c === ']' && lastOpen !== '[')
        ) {
            return false;
        }
    }
    return stack.length === 0;
};
