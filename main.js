        let word_check = prompt("Enter a word to check whether the eord is palindrome  or not").toLowerCase();
        let remoe_space = "";
        for (let i= 0; i < word_check.length;i++){
        if( word_check[i] !== " "){
            remoe_space += word_check[i];
        }
    }
      let reverse = remoe_space.split("").reverse().join("");
        // alert(reverse);
         if (remoe_space === reverse){
                    alert("The word is palindrome ")
                }else{
                        alert("The word is not palindrome ")
                    };

            


let city =prompt("Enter a city to get its second name").toLowerCase();
for( let i = 0 ; i <city.length;i++){
    if (city.slice(i,i+7) ==="karachi"){
        city = city.slice(0,i)+"The city of lights "+ city.slice(i+7);
        break;
    }else if (city.slice(i,i + 6) === "lahore"){
        city= city.slice (0,i) + "The city of gardens"+ city.slice(i+6);
        break;
    }else if(city.slice(i,i+7)==="multan"){
        city = city.slice (0,i) +"The city of saints" +city.slice (i+6);
        break;
    }else if (city.slice(i,i+8) === "peshawar"){
        city = city.slice (0,i)+"The city of flowers"+ city.slice(i+8);
        break;
    }else {
        city = city.slice(0,i)+"In-valid please try to enter 4 big cities";
        break;
    }

}
alert(city);
