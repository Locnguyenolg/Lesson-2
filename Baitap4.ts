// let departurePlanet: string = "Trai Dat"
// let Mission: string = "Kham pha vu tru";
// let crew = ["Loc", "Nguyen", "Thu "];
// function lauchShip(crew:string []) :string {
//     return "Chuẩn bị khởi động! Phi hành đoàn gồm: " + crew +
//         " sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + Mission + "!";
//     //console.log("Chuan bi khoi dong! Phi Hành đoàn gồm " + crew + "sẽ đồng hành trong chuyến phieu lưu " + Mission);
// }
// //lauchShip();
// console.log(lauchShip(crew));

let departurePlanet: string = "Trái Đất";
let mission: string = "Khám phá Vũ trụ K14";
let crew = ["Loc", "Nguyen", "Thu"];

function launchShip(crew: string[]): string {
    return "Chuẩn bị khởi động! Phi hành đoàn gồm: " + crew.join(", ") +
           " sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + mission + "!";
}
console.log(launchShip(crew));

