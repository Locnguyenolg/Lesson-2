function TimMax(Arra) {
    var max = Arra[0];
    var min = Arra[0];
    for (var i = 0; i < Arra.length; i++) {
        if (max < Arra[i]) {
            max = Arra[i];
        }
    }
    return max;
}
function TimMin(Arra) {
    var min = Arra[0];
    for (var i = 0; i < Arra.length; i++) {
        if (min > Arra[i]) {
            min = Arra[i];
        }
    }
    return min;
}
//function Timmin()
var Mang = [1, 2, 3, 4, 5, 1, 100, 80];
console.log("Max ", TimMax(Mang));
console.log("Min", TimMin(Mang));
