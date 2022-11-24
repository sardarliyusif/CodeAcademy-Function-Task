const num = 25;
function findDivider (number){
    // EDEDIN 7-e tam bolunub bolenmemesini yoxlama
    if(number % 7 === 0){
        console.log("Eded 7-e bolunur");
    }else{ // EGER BOLUNMUSE GELIB ONU YUVARLAQLASDIRIB ONA EN YAXIN EDEDI TAPMAQ UCUN 7-e vururam
        console.log(Math.round(number/7)*7);
    }
}
findDivider(num)