

class HTMLUI{


    displayYears(){
 
         const max = new Date().getFullYear(),
                 min = max - 20;
     
     
     
         const selectYears = document.getElementById('year');
     
         for(let i = max; i>=min; i--){
             const option = document.createElement('option');
             option.value = i;
             option.textContent = i;
             selectYears.appendChild(option);
         }
     }
     
     
     displayError(message){
         const div = document.createElement('div');
         div.classList = 'error';
         div.innerHTML = `<p>${message}</p>`
     
         form.insertBefore(div, document.querySelector('.form-group'))
     
         //remove error
     
         setTimeout(() => {
             div.remove();
         }, 4000);
     }
     
     showResults(result, insurance){
         let image = document.querySelector('#loading img');
         image.style.display = 'block';
         setTimeout(() => {
             image.style.display = 'none';
             let espacio = document.getElementById('result');
           let mensaje = document.createElement('div');
           
                 let  make = insurance.make;
            
           mensaje.innerHTML = `
           <p class="header"> Summary</p>
           <p>Make: ${make} </p>
           <p>Year: ${insurance.year} </p>
           <p>Level: ${insurance.level} </p>
           <p class="total"> Total: $ ${result}</p>`;
           espacio.appendChild(mensaje)
     
         }, 3000);
     }
 
    }


    
class Insurance{

    constructor(selectMake, year, level){
        this.make = selectMake;
        this.year = year;
        this.level = level;
    }

//

                    calculateQuotation(insurance){
                        const base = 2000;
                    let price =  this.calculateMake(base, insurance.make);
                        price = this.calculateYear(price, this.getYearDifference(insurance.year));
                        price = this.calculateLevel(price, insurance.level);
                        //print result
                        html.showResults(price, insurance);
                        console.log(price);
                    }

                    calculateMake(base, make){
                        let price;
                        /*
                            rules
                            1. american = 15%+
                            2. asian=  05%+
                            2. european = 35%+
                        */
                        if (make == 'American'){
                            price = base * 1.15;
                        } else if (make == 'Asian'){
                            price = base * 1.05;
                        } else {
                            price = base * 1.35;
                        }
                        return price;
                    }

                    getYearDifference(year){
                        //3%
                        let difference = new Date().getFullYear() - year;
                        return difference;
                    }
                    calculateYear(price, year){
                        //3%
                        const taza = 3;

                        price -= ((year * taza)*price /100);
                        return price;
                    }
                    calculateLevel(price, level){
                        

                        //Basic insurance 30%+
                        //Complete insurance 30%+

                        if (level === "basic"){
                            price *=1.30;
                        }else{
                            price *= 1.50;
                        }
                        return price;
                    }

//
}