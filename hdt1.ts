class Xe {
    maLuc:number;
    mauSac:string;
    constructor (maLuc:number,mauSac:string){
        this.maLuc = maLuc;
        this.mauSac = mauSac;
    }   
}
const Xe1 = new Xe(1000,"Do");
console.log(Xe1);
const Xe2 = new Xe(2000,"Xanh"); 
console.log(Xe2);