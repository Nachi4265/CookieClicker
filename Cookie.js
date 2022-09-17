var cookies = 0;

var cpc = 1;


function bakeCookies(){
    cookies += cpc;
    document.getElementById('cookie-text').innerHTML = " "+ cookies;
}

function double(){
    cpc += 1;
    document.getElementsByClassName('cookie-text').innerHTML = " "+ cookies;
}

function five(){
    cpc += 4;
    document.getElementsByClassName('cookie-text').innerHTML = " "+ cookies;
}

function craze(){
    cpc += 100;
    document.getElementsByClassName('cookie-text').innerHTML = " "+ cookies;
}

