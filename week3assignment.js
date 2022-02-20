//1. Create an array called ages....
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var last = ages[ages.length - 1]
var first = ages[ages.length - ages.length]
var diff = (last - first)
console.log('the difference between first and last is' + ' ' + diff)

var ages = [3, 9, 23, 64, 2, 8, 28, 93]; 
ages.push(50)
var last = ages[ages.length - 1] //I don't know if I needed to declare all these variables again as well as define the array. But if I didn't it did not return the right difference. 
var first = ages[ages.length - ages.length]
var diff = (last - first)
console.log ('the new difference is' + ' '+ diff )

var i, sum=0
for(i=0; i<ages.length; i++)
{
    sum = sum + ages[i]
}
console.log('average age is' + ' '+ sum/ages.length)

// 2. Create an array called names....
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
var i, sum=0
for(i=0; i<names.length; i++)
{
    sum = sum + names[i]
}


//console.log('average length of name is' + ' '+ (sum/names.length) + 'letters')
//this gave me a NaN in the print. This is because I've asked the script to count something that isn't a number
//console.log(names.length) This gave a result of 6 because it is counting the number of elements and not characters. 
    //function getCharacterLength (str) {
    //return [...str].length
    //}
    //console.log(getCharacterLength(names)) this produced the same result of 6
// var i, sum=0
//     for (i= 0; i < names.length; i++)
//      {
//        sum= sum + names.length[i]
//      }
//    console.log(sum) //this also didn't work and gave a NaN result
//console.log(names[0])
//console.log(names[0].length); this showed me that .length will work

var i, sum=0
for (i= 0; i < names.length; i++)
{
    sum = sum + names[i].length
  }
 console.log(sum) //this gave me 23

 console.log(names.length) //this gave me 6 

 console.log(sum/names.length) //this gave me 3.833
 console.log('the are an average of' + ' ' + sum/names.length + ' ' + 'letters in each name')
//this showed me the issue was that I needed to put the counter inside of the loop (names[].length)
var con= names[0];

    for(i=1; i<names.length; i++)

    {
        con = con.concat(" ",names[i]);
    }
    console.log("new string: ",con);

//3.
//You can access the last element in an array by using pop.
//4.
//You can access the first element in an array by using shift.
//5. Create a new array called nameLengths...
var nameLengths = [];
    for(i=0; i<names.length; i++)
    {
        nameLengths[i] = names[i].length;
    }
//6.
    sum=0;
for(i=0; i<nameLengths.length; i++)
{
    sum = sum + nameLengths[i]
}

console.log("Sum of name lengths nameLengths array is ",sum);
//I wanted to see if this worked if I added a name to the array
// names.push('Amy')
// console.log(names)
// var nameLengths = [];
//     for(i=0; i<names.length; i++)
//     {
//         nameLengths[i] = names[i].length;
//     }
// sum=0;
// for(i=0; i<nameLengths.length; i++)
// {
//     sum = sum + nameLengths[i]
// }
// sum=0;

// for(i=0; i<nameLengths.length; i++)
// {
// }
// console.log("Sum of name lengths nameLengths array is ",sum);
//The result was 26 which would be correct. 
//7. Write a function that takes two parameters...
// {
// var con= word;
// for(i=0; i< n;i++)
//     {
//         con= con.concat(word);
//     }
//     return con;
// }
// console.log(concatword("hello",3));
//this gave a result of 4 because the function started counting at 0
function concatword(word, n)
{
var con= word;
for(i=1; i< n;i++)
    {
        con= con.concat(word);
    }
    return con;
}
console.log(concatword("hello",3));
//8. Write a function that takes two parameters, firstName and lastName....
function concatName(firstName, lastName)
{
    return firstName.concat(" ",lastName)

}
//console.log("full name" + " " + concatName("Bob", "McDonald");
//this keeps returning a "missing ) after argument list" syntax error
firstName = 'Bob'
lastName = 'Dodd'
console.log(concatName ("Bob", "Dodd"))
//9. Write a function that takes an array...
function isTotalGreaterThan100(arr)
{
    sum=0;
    for (i=0; i<arr.length; i++)
    {
        sum=sum + arr[i];
    }
    if(sum>100)
    {
        return true;
    }
    else
    {
        return false
    }
}
var newArray = [4, 5, 6, 142, 3, 2]
console.log(isTotalGreaterThan100(newArray))
var newArrayB = [4, 5, 6, 7, 10]
console.log(isTotalGreaterThan100(newArrayB))
//10. Function for average of elements
sum = 0
function averageElement(arr)
{
    sum=0
    for (i=0; i<arr.length; i++)
    {
        sum = sum + arr[i]
    }
    return (sum/arr.length)
}

var newSet = [1,10,100,1000]
console.log(averageElement(newSet))
// var checkSum = (1+10+100+1000)
// console.log(checkSum)
// var checkAverage = (checkSum/4)
// console.log (checkAverage)
//this confirmed my function worked

//11. Write a function that takes two arrays of  numbers....
function isArrayAverageAGreater(arr1, arr2)
{
    if(averageElement(arr1) > averageElement(arr2))
    {
        return true;
    }
    else
    {
        return false; 
    }
}

var arrayA = [5, 10, 15, 20]
var arrayB = [1, 1, 1, 2]
console.log(isArrayAverageAGreater(arrayA, arrayB))

//12. Write a function called willBuyDrink...
function willBuyDrink(isHotOutside, moneyInPocket)
{
    if((isHotOutside) && (moneyInPocket > 10.50))
    {
        return "can";
    }
    else
    {
        return "cannot"; 
    }
}
// var hotOutside = true;
// var moneyInPocket=10.75
// console.log("I",willBuyDrink(hotOutside, moneyInPocket), "buy a drink");
// var hotOutside = false;
// var moneyInPocket = 10.75
// console.log("I",willBuyDrink(hotOutside, moneyInPocket), "buy a drink");
function whosThatPokemon(pokemonType, pokemonColor, pokemonRegion)
{
    if(((pokemonType == 'grass') && (pokemonColor='green') && (pokemonRegion == 'Kanto')))
    {
        return "Bulbasaur";
    }
    else if ((pokemonType == 'electric') && (pokemonColor = 'yellow') && (pokemonRegion === 'Kanto'))
    {
        return "Pikachu"
    }
    else if ((pokemonType == 'water') && (pokemonColor == 'blue') && (pokemonRegion === 'Kanto'))
    {
        return "Squirtle"
    }
    else if ((pokemonType == 'normal') && (pokemonColor == 'brown'|| 'Tan') && (pokemonRegion === 'Kanto'))
    {
        return "Eevee"
    }
    else if ((pokemonType == 'fire') && (pokemonColor=='orange') && (pokemonRegion === 'Kanto'))
    {
        return "Charmander"
    }
    else if ((pokemonType!= 'fire' || 'electric'||'water'||'grass'||'normal') || (pokemonRegion != 'Kanto') || (pokemonColor != 'blue'||'tan'||'brown'||'orange'||'green'||'yellow'))
            
    {
        return "a mysterious pokemon"
    }    
}

var pokemonType = 'ghost'
var pokemonColor = 'blue'
var pokemonRegion = 'Kanto'
console.log(whosThatPokemon(pokemonType, pokemonColor, pokemonRegion))

//I wrote this function so that you could input three different pieces of info
//about your pokemon and get an identification. 
//However, my conditionals do not totally work. For example, if I put
//'electric' in at the type, it will return Pikachu no matter what the other
//values are.

//         (pokemonType = 'fire') + (pokemonColor = 'orange' OR 'red') = (pokemonRegion = 'Kanto')
//         {
//         return "Charmander"
//         }
//     else if (pokemonType = 'water') + (pokemonColor = 'blue') + (pokemonRegion = 'Kanto')
//         {
//         return "Squirtle"
//         }
//     else if (pokemonType = 'electric') + (pokemonColor = 'yellow') + (pokemonRegion = 'Kanto')
//         {
//         return "Pikachu"
//         }
//     else if (pokemonType = 'normal') + (pokemonColor = 'brown' OR 'tan') + (pokemonRegion = 'Kanto')
//          {
//             return 'Eevee'
//          }
// else
//     {
//         return "a mysterious Pokemon"
//     }
// }
// above note shows my first attempt at writing the conditionals

