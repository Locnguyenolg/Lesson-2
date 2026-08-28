var departurePlanet = "Trai Dat";
var Mission = "Kham pha vu tru";
var crew = ["Loc", "Nguyen", "Thu "];
function lauchShip(crew) {
    return "Chuẩn bị khởi động! Phi hành đoàn gồm: " + crew +
        " sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + Mission + "!";
    //console.log("Chuan bi khoi dong! Phi Hành đoàn gồm " + crew + "sẽ đồng hành trong chuyến phieu lưu " + Mission);
}
//lauchShip();
console.log(lauchShip(crew));
