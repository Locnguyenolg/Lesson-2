"use strict";
// Các loại vòng for thường gặp 
// For of lặp duyêthj theo giá trị 
// For in lấy các index
// const fruits: string[] = ["Xoài", "Táo", "Cam"];
Object.defineProperty(exports, "__esModule", { value: true });
var fruits = ["Xoài", "Táo", "Cam"];
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit); // Output: Xoài, Táo, Cam
}
// For In 
var user = { name: "An", age: 25, role: "Developer" };
for (var key in user) {
    // Dùng type assertion để TypeScript không báo lỗi khi truy cập bằng string key
    console.log(key);
    // console.log(`${key}: ${user[key as keyof typeof user]}`);
}
