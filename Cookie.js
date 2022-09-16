var cookies = 0;

function bakeCookies() {
    cookies += 1;
    document.getElementsByClassName('cookies').innerHTML = "counter" + cookies;

}