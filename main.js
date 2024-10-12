// // //  Assignment 1
// // var cityToCheck = "KaRaCHI";
// // var cityToCheck1 = "Lahore";
// // var firstChar = cityToCheck.slice(0,3);
// // var a_capital = cityToCheck.charAt(4).toUpperCase();
// // var otherChars = cityToCheck.slice(4);
// // firstChar = firstChar.toUpperCase();
// // otherChars = otherChars.toLowerCase();
// // var cappedCity = firstChar+ a_capital + otherChars;
// // // alert(cappedCity);
// // let cityToCheck = "kaRCHi";
// // let first_three = cityToCheck.slice(0,3).toLowerCase();
// // let fourth = cityToCheck.slice(4,0).toUpperCase();
// // let baki = cityToCheck.slice(0,5).toUpperCase();
// // let city =first_three +fourth + baki;
// // alert(city);

// // var cityToCheck = "KaRaCHI";
// // var beforeFourthChar = cityToCheck.slice(0, 3).toLowerCase(); // Get the first three characters in lowercase
// // var fourthChar = cityToCheck.charAt(3).toUpperCase(); // Get the fourth character and capitalize it
// // var afterFourthChar = cityToCheck.slice(4).toLowerCase(); // Get the rest of the string in lowercase

// // var formattedCity = beforeFourthChar + fourthChar + afterFourthChar; // Combine all parts
// // alert(formattedCity);





// // Assignment 2
// // var month = prompt("Enter a month");
// // var charsInMonth = month.length;
// // if (charsInMonth > 5) {
// // monthAbbrev = month.slice(0, 5);
// // console.log(monthAbbrev);
// //  }
// // let  month_prompt = prompt("Enter a month for abbreviation").toLowerCase();
// // let  months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
// // let monthAbbrev = months.slice[i](0,3);
// // found = false;
// // for (let i=0; i < months.length;i++){
// //     if (month_prompt === months[i]){
// //         alert(monthAbbrev);
// //         found = true
// //         break;
// //     }
// // }
// // if (!found) {
// //         alert("Invalid month"); 
// // }
// let month_prompt = prompt("Enter a month for abbreviation");
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let found = false

// for (let i = 0; i < months.length; i++) {
//     if (month_prompt.toLowerCase() === months[i].toLowerCase()) {
//         let monthAbbrev = months[i].slice(0, 3); 
//         alert("Abbreviation: " + monthAbbrev);
//         found = true;
//         break;  
//     }
// }

// if (!found) {
//     alert("Invalid month"); 
// }

// // Assignment 3
// let str = "JavaScript Programming";

// // Measuring string length
// let length = str.length;
// console.log(length);            
// // Assignment 4

// // // // Extracting parts of the string using slice
// // // let part = str.slice(0, 10);  // Extracts from index 0 to 9 (10 characters)
// // // console.log(part);  // Output: "JavaScript"
// // Assignment 15
// // // // Extracting using substring
// // // let part2 = str.substring(4, 14);  // Extracts from index 4 to 13
// // // console.log(part2);  // Output: "Script Pro"
