/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const groups = new Map();
    for (const entry of this) {
        const key = fn(entry);
        if (!groups.has(key)) {
            groups.set(key, [entry]);
        } else {
            groups.get(key).push(entry);
        }
    }
    return Object.fromEntries(groups);
};
