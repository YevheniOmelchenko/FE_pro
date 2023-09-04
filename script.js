/* необходимо создать объект bankAccount(дебет), представляющий банковский счёт со свойствами 

1.accountNumber - для номера счета 
2.accountHolderName - для имени владельца счета
3.balance - для баланса                 для отображения остатка на счету

4.deposit() - для описания действия по добавлению денег на счет
5.withdraw() - для описания действия по снятию денег со счета
6.checkBalance() - для проверки баланса
*/

const bankAccount = {
    accountNumber: "123",
    accountHolderName: "John Smith",
    balance: 1000,

    deposit: function (money) {
        this.balance = this.balance + money;
    },

    withdraw: function (money) {
        if (money > this.balance) {
            return console.log(`Error , Balance =  ${this.balance}`);
        } else {
            this.balance = this.balance - money;
        }
    },
    checkBalance: function () {
        return console.log(`Balance = ${this.balance}`);
    },
};

bankAccount.deposit(1000);
bankAccount.checkBalance();
bankAccount.withdraw(500);
bankAccount.checkBalance();
bankAccount.withdraw(2000);
bankAccount.checkBalance();
bankAccount.withdraw(1450);
bankAccount.checkBalance();
