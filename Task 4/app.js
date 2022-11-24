const num = 105;
function findNumbers (number){
    // EDEDIN 100-den boyuk olub olmamasini yoxlamaq
    if(number <= 100){
        console.log("Eded 100-den boyuk deyil");
    }else{ 
        let count = 0; // 8-e bolunen ededlerin sayi
        // For ile number-e qeder dovr edirik
        for (let i = 1; i < number; i++) { 
            if(i%8===0){
                count++; // i 8-e bolunurse sayi 1 artiririq
            }
        }
        console.log(count);
    }
}
findNumbers(num)