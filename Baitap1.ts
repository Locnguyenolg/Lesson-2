let lop: string = "12";
let tuoi: number = 18;
let ID: string =12b;
console.log(`k14 class ${lop}${lop}`);
console.log("k14 class " + lop + tuoi);
console.log("k14 class", lop, tuoi);

const user = { name: "Alice", age: 25, email: "@gmail.com" };

user.age = 26; // ✅ CÓ THỂ thay đổi thuộc tính bênea trong
user.name = "Loc";
user.email = "locnguen@gmail.com";
console.log(user);
//user.email = "alice@example.com"; //

///duyet mang danh sach sinh vien///

const listStudent = ["Loc", "Thang", "Dat"];
for (let i = 0; i < listStudent.length; i++) {
    //console.log(`sinh viên tên là ${listStudent[i]}`);
    console.log(listStudent[i]);
}
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
// 
const hocSinh = ["nguyen", "Tai", "quan", 18, { hs: { age: 20 } }]; // cung  1  mang co the chua kieu du lieu khac  nhau
console.log("hoc sinh dau tien:", hocSinh[0]);
console.log("hoc sinh thu 2", hocSinh[1]);
console.log(hocSinh[3]);
console.log(hocSinh[4]);



