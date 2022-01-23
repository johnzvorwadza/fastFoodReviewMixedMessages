//Create arrays for fast food shops
const fastFoodShops = ["Mc'Donalds","KFC","Morleys","5guys","Burger King"];

//create an array of items sold in these shops
const iterms = ["Cheese burgers","French Fries","Chicken thighs"];

//create array for comments on the iterm 
const comment = ["best thing I have ever eaten"
,"worst thing I have ever eaten"
,"so overrated","so underrated"
,"not as good as people say"
,"not as bad as people say"];

//create an array for people
const people = ["Stormzy","Chip","Digga D","JayI"];

//create an array for dates
const dates = ["a day ago","two days ago","a week ago","two weeks ago"]

var randomNumberInArray=array=>Math.floor(Math.round()*array.length);

function makeReview(){
    console.log(`${fastFoodShops[fastFoodShops]} ${iterms[iterms]} are ${comment} ${people} said in an interview ${dates}`);
}

makeReview();
