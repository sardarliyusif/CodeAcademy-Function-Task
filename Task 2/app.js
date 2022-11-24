const num = 9;
function findNumbers (number){
    // EDEDIN 50-den kicik olub olmamasini yoxlamaq
    if(number >= 50){
        console.log("Eded 50-den kicik deyil");
    }else{ 
        let count = 0; // 3-e bolunen ededlerin sayi
        // For ile number-e qeder dovr edirik
        for (let i = 1; i < number; i++) { 
            if(i%3===0){
                count++; // i 3-e bolunurse sayi 1 artiririq
            }
        }
        console.log(count);
    }
}
findNumbers(num)