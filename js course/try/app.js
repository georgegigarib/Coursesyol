// const client = {
//     name : 'george',
//     balance : 1000,
//     membership : function(){
//         let name;

//         if(this.balance > 1000){
//         name = 'Gold';
//     }   else if(this.balance > 500){
//         name = 'Platinum'
//     }   else{
//         name = 'Normal'
//     }
//     return name;
//     }
// }

// console.log(client.name);
// console.log(client.balance);
// console.log(client.membership());



//constructor

// function Client(name, balance) {
//         this.name = name;
//         this.balance = balance; 
//         this.membership = function(){
//                     let name;
            
//                     if(this.balance > 1000){
//                     name = 'Gold';
//                 }   else if(this.balance > 500){
//                     name = 'Platinum'
//                 }   else{
//                     name = 'Normal'
//                 }
//                 return name;
//                 }   
// }
//     const person = new Client('Juan', 17000);

//     console.log(person);
//     console.log(person.membership());




// poner la palabra 'new' creara una nueva instancia

// const name1 = 'karen';
// const name2 = new String('karen');

// console.log(typeof name1);
// console.log(typeof name2);


// const number1 = 20;
// const number2 = new Number(20);

// console.log(number1);
// console.log(number2);


// const function1 = function(a,b){
//     return a+b;
// }
// const function2 = new Function('a', 'b', 'return a+b')

// console.log(function1(4,5));
// console.log(function2(4,5));



// const person1 = {name: 'George'}; 
// const person2 = new Object({name: 'George'});

// console.log(person1);
// console.log(person2);


// const array1 = [1,2,3,4];
// const array2 = new Array(1,2,3,4);


// console.log(array1);
// console.log(array2);

// poner la palabra 'new' creara una nueva instancia





// //prototype

// function Client(name, balance) {
//         this.name = name;
//         this.balance = balance; 
        
// }


// Client.prototype.membership = function(){
//     let name;

//     if(this.balance > 1000){
//     name = 'Gold';
// }   else if(this.balance > 500){
//     name = 'Platinum'
// }   else{
//     name = 'Normal'
// }
// return name;
// }   


//     const person = new Client('Juan', 17000);

//     console.log(person);
//     console.log(person.membership());



    // Client.prototype.clientInfo = function(){
    //     return `Name: ${this.name}, Balance ${this.balance},
    //     Membership: ${this.membership()}`
        
    //     };

//         //con un prototype puedes acceder a otras propiedadees o a otros prototypes
//     console.log(person.clientInfo());

//     console.log('');

//     Client.prototype.withdraw = function(amount){
//         return this.balance -= amount;
//     }

//     Client.prototype.deposit = function(amount){
//             return this.balance += amount;
//     }

//     Client.prototype.getBalance = function (){
//         return this.balance;
//     }

//     const lapersona = new Client('juan', 2000)


//     console.log(lapersona.clientInfo());
//     console.log(lapersona.withdraw(500));
//     console.log(lapersona.deposit(500));
//     console.log(lapersona.getBalance());
//     console.log('');


//     function Business(name, balance, phone, category){
//         Client.call(this, name, balance);
//         this.phone = phone;
//         this.category = category;
//     }
// //inherit prototypes
//     Business.prototype = Object.create(Client.prototype);
// //
//     const business = new Business('Udemy', 10000, 80947386167, 'Education');

//     Business.prototype.constructor = Business;
//     Business.prototype.businessInfo = function(){
//         return `Name: ${this.name}, Balance ${this.balance},
//         Membership: ${this.membership()}, Category: ${this.category}, Phone: ${this.phone}`
        
//         };
//     console.log(business);

//     //aca puedes crear un emtodo nuevo o sobreescribir otro
//     console.log(business.businessInfo());




    const Client = {
        getBalance: function(){
            return `hello ${this.name} your balance is ${this.balance}`;

        },
        withdraw : function (amount){
            return this.balance -= amount;
        },
        deposit : function (amount){
            return this.balance += amount;
        }
    }



    // 


    //creater new object
    const mary = Object.create(Client)

    mary.name = 'Mary';
    mary.balance = 1099;

    console.log(mary);
    console.log(mary.getBalance());

    //withdraw money

    mary.withdraw(500);
    console.log(mary.getBalance());

    mary.deposit(1000);
    console.log(mary.getBalance());


