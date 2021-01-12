
const budgetTotal = document.querySelector('span#total'),
budgetLeft = document.querySelector('span#left');



let budget, budgetleft;

//instanciar html


// event listeners



//classes

class Budget{

    constructor(budget){
       this.budget = Number(budget);
       this.budgetleft = this.budget;
    }


    substrackFromBudget(amount){
        return this.budgetleft -= amount;
    }
}


class HTMLUI{

    agregar(amount){

        console.log(amount);

            budgetTotal.innerHTML = `${amount}`;
            budgetLeft.innerHTML = `${amount}`;
    

}
//display expenses
    agregarALista(name, amount){
            const expensesList = document.querySelector('#expenses ul');
            const li = document.createElement('li');

            li.className = "list-group-item d-flex justify-content-between align-items-center"
            li.innerHTML = `
                ${name}
                <span class="badge badge-primary badge-pill">$ ${amount}</span>
            `;
            expensesList.appendChild(li);

        }

        trackBudget(amount){

            let budgetLeftD = budget.substrackFromBudget(amount);
            budgetLeft.innerHTML = `${budgetLeftD}`;

            

                if(budget.budget / 4 > budgetLeftD){
                   budgetLeft.parentElement.parentElement.classList.remove('alert-success','alert-warning'); 
                   budgetLeft.parentElement.parentElement.classList.add('alert-danger'); 
                } else if(budget.budget / 2 > budgetLeftD){
                    budgetLeft.parentElement.parentElement.classList.remove('alert-success','alert-warning'); 
                   budgetLeft.parentElement.parentElement.classList.add('alert-warning'); 
                }

            console.log(budgetLeftD);
        }
//display message
        printMessage(message, className){

            const messageWrapper = document.createElement('div');
            messageWrapper.classList.add('text-center', className, 'alert');
            messageWrapper.appendChild(document.createTextNode(message));

//insertar en html
                document.querySelector('.primary').insertBefore(messageWrapper, form);
            setTimeout(() => {
                messageWrapper.remove();
                form.reset();
            }, 3000);
        
            }
}



let html = new HTMLUI();

let form = document.getElementById('add-expense');
document.addEventListener('DOMContentLoaded', function(){

    const elmonto =  prompt('Add a week budget');
    if (elmonto == null || elmonto == '' || elmonto == 0){
        window.location.reload();
    } else {
     budget = new Budget(elmonto);
        console.log(budget);

        //instanciar html
            html.agregar(budget.budget);
}


});




form.addEventListener('submit',function(e){
    e.preventDefault();

    const expenseName = document.querySelector('#expense').value;
    const amount = document.querySelector('#amount').value;


        if (expenseName == '' || amount == ''){
            html.printMessage('All fills are mandatory', 'alert-danger');
        } else{
            html.agregarALista(expenseName, amount);
            html.trackBudget(amount);
            html.printMessage('Added...', 'alert-success')
        }
});




