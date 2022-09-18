/**
 * Day2#100DaysOfChallenge
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if(n === 1) return true;
    
    return (n%3 !== 0 || n === 0) ? false : isPowerOfThree(n/3);
};
