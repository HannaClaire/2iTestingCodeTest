//write a function that identifies how many pairs of numbers in an array add up to x's value


const nums = [1,2,3,4,5,6,7];
const x = 7;


function findSumOfPairs(nums, x){
    let pairsTotal = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j = 1; j < nums.length; j++){
            if (nums[i] + nums[j] === x)
                pairsTotal ++   
                }
            }

    return pairsTotal;

        }
    

console.log("Num of pairs:", findSumOfPairs(nums, x));




//this function takes in the two parameters myArray and x, and uses a nested loop, with the outer loop using 'i' to iterate over each number and increment by 1 so long as its less than the length of nums, which as its set to 0 will always increment.
//the inner loop assigns 'j' to 'i's value but with an added 1, and so long as its less than nums length will also increment. It then sets a condition that if either i or J added together equal to x, then the pairsTotal will increment, showing how many pairs there are, and then returning them

//  I found this really quite hard so had to get some help online with this code!

