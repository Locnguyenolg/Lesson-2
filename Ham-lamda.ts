// lamda, là hảm rút gọn.
const add = (a:number, b:number):number =>{  // nên dùng add tránh vô tình gán lại
    return a + b;
}
console.log(add(5,10));
/// Ham  an danhhx

let sum = function(c:number,d:number):number{  // hàm ẩn danh thường dùng  1 lần
    return c + d;
};
console.log("sum = ", sum(10,11));
const k:number []=[1,2,3]; 
console.log("in ra",k);
