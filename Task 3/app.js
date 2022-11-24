const num = 51;
function findNumbers (number){
    // EDEDIN 50-100 araliginda olub olmamasini yoxlamaq
    if(number <= 50 || number >= 100){
        console.log("Eded Araliqda deyil");
    }else{ 
        let count = 0; // 5-e bolunen ededlerin sayi
        // For ile number-e qeder dovr edirik
        for (let i = 1; i < number; i++) { 
            if(i%5===0){
                count++; // i 5-e bolunurse sayi 1 artiririq
            }
        }
        console.log(count);
    }
}
findNumbers(num)