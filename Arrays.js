

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    const max = Math.max(...nums);
   nums = nums.filter(num => num !== max);

    return Math.max(...nums);
    // Complete the function
}

