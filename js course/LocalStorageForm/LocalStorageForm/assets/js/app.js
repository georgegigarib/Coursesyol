const tweetList = document.getElementById('tweet-list');


    document.querySelector('#form').addEventListener('submit', newTweet);
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);

function newTweet(e){
    e.preventDefault();
    let tweet = document.getElementById('tweet').value;

    //agregar tweet
        const li = document.createElement('li');
        li.textContent = tweet;
        tweetList.appendChild(li);
    //btn remove

        let removebtn = document.createElement('li');
        removebtn.textContent = 'X';
        removebtn.classList = 'remove-tweet';
    //agregar
    li.appendChild(removebtn);

    ///////////////////////
    // console.log(tweet);

    addtweetslcl(tweet);
}
//add to localstorage



//remove
tweetList.addEventListener('click', removeTweet);

function removeTweet(e){
if(e.target.classList.contains('remove-tweet')){
    e.target.parentElement.remove();
}

    removeTweetLocalStorage(e.target.parentElement.textContent);
}


function addtweetslcl(tw){
    let tweets = gettweets();
    
    tweets.push(tw);

    localStorage.setItem('tweet', JSON.stringify(tweets)); 
    
    
    alert('tweet added');
}

function gettweets(){
let tweets = [];
    let lstweets = localStorage.getItem('tweet');
    //get values
    if (lstweets === null){
        tweets = [];

    } else{
        tweets = JSON.parse(lstweets);
    }
    return tweets;

}


//print ls tweets

function localStorageOnLoad(){
    let tweets = gettweets();
    console.log(tweets);

    //loop

    tweets.forEach(function(tweet){
    //agregar tweet
        const li = document.createElement('li');
        li.textContent = tweet;
        tweetList.appendChild(li);
    //btn remove

        let removebtn = document.createElement('li');
        removebtn.textContent = 'X';
        removebtn.classList = 'remove-tweet';
    //agregar
    li.appendChild(removebtn);
    
});
}

//remove from storage
function removeTweetLocalStorage(tw){

    let tweets = gettweets();
    let tweetde = tw.substring(0, tw.length - 1);
    console.log(tweetde);

    tweets.forEach(function(twls, index){
        if(tweetde === twls){
           tweets.splice(index, 1);

        }
       
        localStorage.setItem('tweet', JSON.stringify(tweets));
        
    });
    alert('tweet deleted');
}
