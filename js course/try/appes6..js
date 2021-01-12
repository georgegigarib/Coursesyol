//class

class Client{
    //to the constructor

    constructor(name, balance){
            //method inside class
            this.name = name;
            this.balance = balance; 

    }
    membership() {

        {
           let name;
            
             if(this.balance > 1000){
             name = 'Gold';
         }   else if(this.balance > 500){
                name = 'Platinum'
            }   else{
                name = 'Normal'
            }
         return name;
         }   
    }
        
    clientInfo(){
        return `Name: ${this.name}, Balance ${this.balance},
        Membership: ${this.membership()}`
        
        };

        
    withdraw(amount){
        return this.balance -= amount;
    }

    deposit(amount){
            return this.balance += amount;
    }

    getBalance(){
        return this.balance;
    }
        //static methods dowesn requiere instatiation

        static welcome(){
            return 'welcome to your bank';
        }
}


const mary = new Client('Mary', 1000);

console.log(mary);
console.log(mary.clientInfo());
console.log(mary.membership());
console.log(mary.withdraw(300));
console.log(mary.deposit(700));

// console.log(mary.welcome())
//aparece error porque no requiere instantiation
console.log(Client.welcome())




// inherit classes

class Business extends Client{

    constructor(name, balance, phone, category){
            super(name, balance);
            this.phone = phone;
            this.category = category; 
    }

    //puedo overwrite the method
    clientInfo(){
        return `Name: ${this.name}, Balance ${this.balance},
        Membership: ${this.membership()}, Phone: ${this.phone}, Balance: ${this.category}`
    }
    static welcome(){
        return 'welcome to your bank 2';
    }
}

const business = new Business('Business Name', 1000, 1288549208, 'Real State');

//no hay que agregar nada, ya que el extend  me da acceso a los metodos del main class
console.log(business.clientInfo());     
console.log(business.getBalance()); 
//nombre de la clase
console.log(Business.welcome());     




