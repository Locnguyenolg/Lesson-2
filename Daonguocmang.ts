// function daonguocMang(Array :number[]){
//  let kq =" ";
//  for(let i = Array.length-1; i>=0; i-- ){
//     kq+= Array[i];
//  }
//   return kq;
// }
// const chuoimang = [1,3,9,10]; 
// console.log("Mang dao nguoc",daonguocMang(chuoimang));

// function daonguocMang(arr: number[]): number[] {
//   let kq: number[] = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     kq.push(arr[i]);
//   }
//   return kq;
// }
// const chuoimang = [1, 3, 9, 10];
// console.log("Mang dao nguoc", daonguocMang(chuoimang));
// cách không dùng push 
function daonguocMang(arr: number[]): number[] {
  let kq: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    kq[i] = arr[arr.length - 1 - i];
  }
  return kq;
}
const chuoimang = [1, 3, 9, 10];
console.log("Mang dao nguoc", daonguocMang(chuoimang));
