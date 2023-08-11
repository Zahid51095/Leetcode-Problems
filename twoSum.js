var twoSum = function(nums, target) {
    // The function takes an array 'nums' and an integer 'target' as inputs
    
    for (let i = 0; i < nums.length; i++) {
        // This loop iterates through each element in the 'nums' array.
        // 'i' represents the index of the first number we're considering.
        
        for (let j = i + 1; j < nums.length; j++) {
            // This nested loop iterates through elements in the array after the current 'i' index.
            // 'j' represents the index of the second number we're considering.
            
            if (nums[i] + nums[j] === target) {
                // If the sum of the two numbers at indices 'i' and 'j' equals the target,
                // we have found a solution.
                
                return [i, j]; // Return the indices of the two numbers
            }
        }
    }
}
