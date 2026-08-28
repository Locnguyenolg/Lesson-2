var lop = "12";
var tuoi = 18;
console.log("k14 class ".concat(lop).concat(lop));
console.log("k14 class " + lop + tuoi);
console.log("k14 class", lop, tuoi);
var user = { name: "Alice", age: 25, email: "@gmail.com" };
user.age = 26; // ✅ CÓ THỂ thay đổi thuộc tính bênea trong
user.name = "Loc";
user.email = "locnguen@gmail.com";
console.log(user);
//user.email = "alice@example.com"; //
///duyet mang danh sach sinh vien///
var listStudent = ["Loc", "Thang", "Dat"];
for (var i = 0; i < listStudent.length; i++) {
    //console.log(`sinh viên tên là ${listStudent[i]}`);
    console.log(listStudent[i]);
}
var arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
// 
var hocSinh = ["nguyen", "Tai", "quan", 18, { hs: { age: 20 } }];
console.log("hoc sinh dau tien:", hocSinh[0]);
console.log("hoc sinh thu 2", hocSinh[1]);
console.log(hocSinh[3]);
console.log(hocSinh[4]);
