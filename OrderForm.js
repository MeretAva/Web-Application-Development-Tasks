function CalculateTotal(){
    var priceOne = document.getElementById("priceProduct1").innerHTML;
    var quantityOne = document.getElementById("quantityProduct1").valueAsNumber;
    var totalOne = priceOne * quantityOne;
    var priceTwo = document.getElementById("priceProduct2").innerHTML;
    var quantityTwo = document.getElementById("quantityProduct2").valueAsNumber;
    var totalTwo = priceTwo * quantityTwo;
    var totalAll = totalOne + totalTwo;
   
    document.getElementById("totalForAllProducts").innerHTML = totalAll;
}

function PayPal(){
    alert("You will be transferred to the PayPal Login website to complete the payment!");
}

function SubmitMessage(){
    alert("Your order has been submitted succesfully!");
}

function ContactButton(){
    userEmail= prompt("Please enter your email to contact you about the problem report!", "jack.miller@iu-study.org")
    if(userEmail.length == 0){
        alert("You need to provide a valid email so we can contact you about your issue. Please start the process from the beginning.");
    } 
    else{
        problemReport= prompt("State your problem here!");
        if(problemReport.length == 0){
        alert("Message field can not be empty when submitting a problem. Please start the process from the beginning.");
        } 
        else{
        alert("Your message has been sent to the team. Thank you for reporting the issue we will try our best to get back to you quickly!");
        }
    }
}