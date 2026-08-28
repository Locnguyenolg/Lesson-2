function TimMax(Arra:number []){
    let max = Arra[0];
    let min = Arra[0];
    for (let i = 0;i<Arra.length;i++){
        if (max < Arra[i]){
            max = Arra[i];
        }
    }
    return max ;
}
function TimMin(Arra:number []){
    let min = Arra[0];
    for (let i = 0;i<Arra.length;i++){
        if(min > Arra[i]){
            min = Arra[i];
        }
    }
    return min ;
}

const Mang = [1,2,3,4,5,1,100,80];
console.log ("Max ",TimMax(Mang));
console.log ("Min",TimMin(Mang));
