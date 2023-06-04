function billSplitter(Costperdish,NoOfpeople){
    var totle_bill = (Costperdish*NoOfpeople)
    var PerPerson = (totle_bill / NoOfpeople)

    return{
        totle_bill : totle_bill,
        PerPerson : PerPerson
    };
}

var finalamount = billSplitter(30,3)
console.log(finalamount);