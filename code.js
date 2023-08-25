const nums = [1,2,3,4,5];
const x = 7;
const result = findSumOfPairs(myArray, x);

function findSumOfPairs(nums, x){
    let pairsTotal = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === x){

return pairsTotal;

            }

        }
    }

    console.log("Num of pairs", findSumOfPairs)




}