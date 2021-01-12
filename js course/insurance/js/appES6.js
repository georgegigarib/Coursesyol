 const form = document.getElementById('request-quote');

const html = new HTMLUI();

const insurante = new Insurance();
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
        console.log(price);
    }

});


}




// todo lo relacionado con html

//display latest 20 years
