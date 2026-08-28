// Các loại vòng for thường gặp 
// For of lặp duyêthj theo giá trị 
// For in lấy các index or key
// const fruits: string[] = ["Xoài", "Táo", "Cam"];

// for (const [index, fruit] of fruits.entries()) { // vừa lấy giá trị vừa lấy index 
//   console.log(`${index}: ${fruit}`);
// }
export{}
const fruits: string[] = ["Xoài", "Táo", "Cam"];

for (const fruit of fruits) {
  console.log(fruit); // Output: Xoài, Táo, Cam
}
// For In 
const user = { name: "An", age: 25, role: "Developer" };
for (const key in user) {
  // Dùng type assertion để TypeScript không báo lỗi khi truy cập bằng string key
  console.log(key);
 // console.log(`${key}: ${user[key as keyof typeof user]}`);
}
