document.getElementById('button').addEventListener('click', loadData);

function loadData(){

    //create the object

    const xhr = new XMLHttpRequest();

    //open connection
    xhr.open('GET', 'data.txt', true);


    //execution of the AJAX call

    // xhr.onload = function(){
    //    //codes
    //    //200:correct
    //    //403:forbidden
    //    //404:not found

    //     if(this.status === 2000){
    //         document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    //     }
    //     else {
    //         document.getElementById('output').innerHTML = `<h1>${this.status}</h1>`;
    //     }
    // }


    xhr.onreadystatechange = function(){
        //codes
        //200:correct
        //403:forbidden
        //404:not found
        console.log('Ready State', xhr.readyState);

        //Ready State
        //0 = Unsent
        //1 = Opened
        //2 = Received
        //3 = Loading
        //4 = Done
         if(this.status === 2000 && this.readyState === 4){
             document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
         }
         else {
             document.getElementById('output').innerHTML = `<h1>${this.status}</h1>`;
         }
     }

    //send request
    xhr.send();

}