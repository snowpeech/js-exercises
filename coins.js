var money = 42; //amount in cents

function makeChange(num) {
    //quarters
    var quarters = (num - (num%25)) /25;
    console.log("number of quarters: ")
    console.log(quarters)
    num = num-quarters*25;
    //console.log(num)

    //dimes
    var dimes = (num - (num%10)) /10;
    console.log("number of dimes: ")
    console.log(dimes)
    num = num-dimes*10;
    //console.log(num)

    //nickels
    var nickels = (num - (num%5)) /5;
    console.log("number of nickels: ")
    console.log(nickels)
    pennies = num-nickels*5;
    console.log("number of pennies: ")
    console.log(pennies)

}

makeChange(money);