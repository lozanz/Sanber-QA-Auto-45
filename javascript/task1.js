const prompt = require('prompt-sync')({sigint: true});
     
const nilai = prompt('Masukan nilai: ');

var akar;

akar =Math.sqrt(nilai);

if(nilai<0){
    console.log("Tidak bisa input bilangan negatif")
}else if(nilai % 2==0){
    console.log ("Akar dari " + nilai + " adalah " + akar)
}else {
    console.log("Tidak bisa input bilangan ganjil")
}
