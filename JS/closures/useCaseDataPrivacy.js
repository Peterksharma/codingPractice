function bankAccount(initialBalance){
      let balance = initialBalance

      return {
            deposit: function(amount) {
                  balance += amount
                  console.log(`Deposited ${amount}, The new balance is ${balance}`)
            },
            withdraw: function(amount) {
                  if(amount>balance) {
                        console.log('Not enough money in the account')
                  } else {
                        balance -= amount
                        console.log(`Withdrew ${amount}, The new balance is ${balance}`)
                  }
            },
            checkBlance: function() {
                  console.log(`Current Balance is: ${balance}`)
            }
      }
}

const myAccount = bankAccount(500)
myAccount.deposit(123)
myAccount.checkBlance
myAccount.withdraw(234)
myAccount.checkBlance
myAccount.withdraw(2343)
myAccount.checkBlance


console.log(myAccount.balance)