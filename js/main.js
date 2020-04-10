let logado = true;

if(localStorage.getItem("acesso"=="true")){
    logado = true
}
if(logado != true) {
    location.href = "login.html"
}