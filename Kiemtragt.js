// function containsValue(arr: number[], target: number): boolean {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return true;
//   }
//   return false;
// }
// // Test thử:
// console.log(containsValue([1, 3, 5, 7], 7)); // true
// console.log(containsValue([1, 3, 5, 7], 2)); // false
// kiem tra phan tu co trong mang.
function ktphantu(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
var mang = [1, 2, 4];
console.log(ktphantu(mang, 4));
