/*JavaScript representing Fermat's prime number test.
Created by Meret Ditzler on the 13th October 2023.
*/

//Function to get a random natural number with a minimum and maximum value (both exclusive).
function getRandomNumber(min, max){
    //returning a random integer within a certain range.
    return (Math.floor(Math.random() * (max-min)));
}


//Function to get the greatest common divisor for two numbers.
function getGCD(a, b) {
    //Temporary variable to store a value needed for the caluclation.
    var temp;
    /*while loop to calculate the greatest common divisor.
    By calculating the remainder and storing it in b until the remainder equals 0. The value of b is 
    temporary stored in the temp variable and assigned to a in the last step for calculating the next remainder.*/
    while(b !== 0){
        //Storing b in the temporary variable.
        temp= b;
        //Storing the remainder of the division in b.
        b = a%b;
        //Storing the value assigned to the temporary variable in a.
        a= temp;
    }
    //returing the greatest common divider of a and b stored in a.
    return a;
}

//Function to calculate a^(p-1) mod p.
function getCongrouentModulo(a, p){
    //Temporary variable to store the value of a.
    var temp= a;
    //for loop to calculate a^(p-1).
    for(i = 1; i < p; i++){
        //In each loop a will be multiplied with its original value stored in the temporary value to reacreate a with an exponent of (p-1).
        a= a*temp;
    }
    //returning the value of a^(p-1) mod p.
    return (a%p);
}

//function to test if a natural number greater is prime.
function fermatTest(p){
    //Case for p = 1.
    if(p==1){
        //Returning a message saying that p is a composite number.
        return "The number "+ p +" is composite!";
    }
    //Case for a non natural number p.
    else if(p<=0){
        //Returning a message saying that p is not within the defined range (natural numbers).
        return "The number "+ p +" is not within the defined range!"; 
    }
    //Case for a natural number greater than 1.
    else{
        //Variable x to store a randomly selected natural number for which 1<x<p.
        var x = getRandomNumber(1, p);
        //Case for gcd(random number, number to test) !== 1.
        if(getGCD(x,p) !== 1){
            //Returning a message saying p is a composite number.
            return "The number "+ p +" is composite!";
        }
        //Case for gcd(random number, number to test) == 1.
        else{
            //Case for x^(p-1) mod p !== 1.
            if(getCongrouentModulo(x,p) !== 1){
                //Returning a message saying p is a composite number.
                return "The number "+ p +" is composite!";
            }
            //Case for x^(p-1) mod p == 1.
            else{
                //Returning a message saying p is prime with a certain probability.
                return "The number "+ p + " is either prime, carmichael or composite!";
            }
        }
        
    }
}

