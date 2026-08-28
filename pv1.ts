
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }
// const targetSum  = [1, 2, 3, 5];
// const target = 7; //
// const result = twoSum(targetSum , target);
// console.log(result);
// if (result.length > 0) {
//   console.log(result);
// } else {
//   console.log("Không tìm thấy 2 giá trị hợp lệ cho target");
// }

// // khai bao ham , input mang number , nhập số tagert -> output trả về 2 index của 2 giá trị cộng lại bằng target. 
function TowSum(num:number[],Target:number):number[]{
  for(let i = 0;i < num.length;i++){
    for (let j = i+1;j < num.length ;j++){
      if(num[i]+num[j]==Target){
        return [i,j];
      }
    }
  }
  return [];
}
const Sum = [1,2,3,4,5]; 
const Target = 10;
const Result = TowSum(Sum,Target);
if(Result.length > 0){
  console.log(Result);
}
else  {
  console.log("2 gia tri i va j khong hop le cho target")
}


//console.log(Result);