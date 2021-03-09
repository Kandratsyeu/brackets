module.exports = function check(str, bracketsConfig) {
    let stackOfBrackets = [str[0]];
    for (let i = 1; i < str.length; i++) {
        let current = str[i];
        function getPair(element, index, array) {
            return element[1] == str[i];
        }
        let pair = bracketsConfig.find(getPair);
        if (!pair) {
            stackOfBrackets.push(current);
        } else if (
            pair &&
            stackOfBrackets[stackOfBrackets.length - 1] == pair[0]
        ) {
            stackOfBrackets.pop();
        } else {
            stackOfBrackets.push(current);
        }
    }
    return stackOfBrackets.length == 0;
};
