

const form = document.getElementById('request-quote');


const html = new HTMLUI();


/// Event listeners


eventListeners();
function eventListeners(){
document.addEventListener('DOMContentLoaded', function(){
    // options years
    
html.displayYears();

});

//when form submitted

form.addEventListener('submit', function(e){
    e.preventDefault();


    const selectMake = document.getElementById('make').value;
    const year = document.getElementById('year').value;
    const level = document.querySelector('input[name="level"]:checked').value;

    if(selectMake === ''){
        html.displayError('All the fills are mandatory');
    } else{

        const prevResult = document.querySelector('#result div');
        if(prevResult != null){
            prevResult.remove();
        }

        const insurance = new Insurance(selectMake, year, level);
        
        let price = insurance.calculateQuotation(insurance);
        
    }

});


}

function Insurance(selectMake, year, level){
    this.make = selectMake;
    this.year = year;
    this.level = level;
}

Insurance.prototype.calculateQuotation = function(insurance){
    const base = 2000;
   let price =  this.calculateMake(base, insurance.make);
    price = this.calculateYear(price, this.getYearDifference(insurance.year));
    price = this.calculateLevel(price, insurance.level);

    //print result

    html.showResults(price, insurance);
    console.log(price);
}

Insurance.prototype.calculateMake = function(base, make){
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

Insurance.prototype.getYearDifference = function(year){
    //3%
    let difference = new Date().getFullYear() - year;
    return difference;

}

Insurance.prototype.calculateYear = function(price, year){
    //3%
    const taza = 3;

    price -= ((year * taza)*price /100);
    return price;
}

Insurance.prototype.calculateLevel = function(price, level){
    

    //Basic insurance 30%+
    //Complete insurance 30%+

    if (level === "basic"){
        price *=1.30;
    }else{
        price *= 1.50;
    }
    return price;
}



// todo lo relacionado con html
function HTMLUI(){


}
//display latest 20 years

HTMLUI.prototype.displayYears = function(){

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


HTMLUI.prototype.displayError = function(message){
    const div = document.createElement('div');
    div.classList = 'error';
    div.innerHTML = `<p>${message}</p>`

    form.insertBefore(div, document.querySelector('.form-group'))

    //remove error

    setTimeout(() => {
        div.remove();
    }, 4000);
}

HTMLUI.prototype.showResults = function(result, insurance){
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

    }, 1000);
}