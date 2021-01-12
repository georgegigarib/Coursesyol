
//variables

const courses = document.querySelector('#courses-list'),
        shoppingCartContent = document.querySelector('#cart-content tbody'),
        clearCartBtn = document.querySelector('#clear-cart');





//event listeners

loadEventListeners();

function loadEventListeners(){
    courses.addEventListener('click', buyCourse );


    //remove from cart

    shoppingCartContent.addEventListener('click', removeCourse);

    //clear cart btn
    clearCartBtn.addEventListener('click', clearCart);

    document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}


//functions

function buyCourse(e){
    //add to cart

    if (e.target.classList.contains('add-to-cart')){
 
       const course = e.target.parentElement.parentElement;
       getCourse(course);
    }
}

function getCourse(course){

  //create object with course data

  const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
  };
  addToCart(courseInfo);
//   console.log(courseInfo)
}


function addToCart(course){

    const row = document.createElement('tr');

    //build template

    row.innerHTML = `
    <tr>
        <td>
                <img src="${course.image}">
        </td>
                     <td>${course.title}</td>
                     <td>${course.price}</td>
                     <td>
                        <a href="#" class="remove" data-id="${course.id}">X</a>
                     </td>
       
    </tr>
    `;

    shoppingCartContent.appendChild(row);

    saveIntoStorage(course);

}


function removeCourse(e){


    //remove from de DOM
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
        course = e.target.parentElement.parentElement;
        courseId = course.querySelector('a').getAttribute('data-id');
    };


    //local storage

    removeFromLocalStorage(courseId);


    
}

function removeFromLocalStorage(id){
    let coursesls = getCourseFromStorage();

    //loop

    coursesls.forEach(function(courseLS, index){
        if(courseLS.id === id){
            coursesls.splice(index, 1);
        }
    });
    localStorage.setItem('courses', JSON.stringify(coursesls));
    console.log(coursesls);
}

function clearCart() {
        // shoppingCartContent.innerHTML = '';
            while(shoppingCartContent.firstChild){
                shoppingCartContent.removeChild(shoppingCartContent.firstChild);
            }

            clearLocalStorage();
}

function clearLocalStorage(){
    localStorage.clear();
}

function saveIntoStorage(course){

    let courses = getCourseFromStorage();

    courses.push(course);

    //storage only save strings

    localStorage.setItem('courses', JSON.stringify(courses));

}

function getCourseFromStorage(){

    let courses;

    if (localStorage.getItem('courses') ===null){
        courses = [];
    }
    else {
        courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
}


//loaded cart

function getFromLocalStorage(){

let coursesls = getCourseFromStorage();

        coursesls.forEach(function(course){
            const row = document.createElement('tr');


      
//  

row.innerHTML = `
<tr>
    <td>
            <img src="${course.image}">
    </td>
                 <td>${course.title}</td>
                 <td>${course.price}</td>
                 <td>
                    <a href="#" class="remove" data-id="${course.id}">X</a>
                 </td>
   
</tr>
`;
shoppingCartContent.appendChild(row);
});


}
