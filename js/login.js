let UsuarioAtual = window.prompt('Crie um usuario temporário com, NO MÍNIMO, 5 caracteres: ')
let QuantidadeDeLetras = UsuarioAtual.split('')
    if(QuantidadeDeLetras.length<5){
        while(QuantidadeDeLetras.length<5){
            alert('Por favor! Digite, NO MÍNIMO, 5 caracteres!')
            UsuarioAtual = window.prompt('Crie um usuario temporário com, NO MÍNIMO, 5 caracteres: ')
            QuantidadeDeLetras = UsuarioAtual.split('')
        }
    }

let senhaAtual = ''
function gerarSenha(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    
    for(let i =0; i<6;i++){
        senhaAtual += Math.floor(Math.random()*(max-min))+min;
    }
    // console.log(senhaAtual)
}
    gerarSenha(0,9)


alert(`Anote seus dados de acesso
LOGIN:
    UserName = ${UsuarioAtual} 
    Senha = ${senhaAtual}`)


function logar(){
    
    let usuario = document.getElementById('usuario');
    let senha = document.getElementById('password');

    // alert(usuario.value+UsuarioAtual+senha.value+senhaAtual)
        if(usuario.value==UsuarioAtual&&senha.value==senhaAtual){
            localStorage.setItem("acesso",true)
            alert("Redirecionando para página...")
            window.location.href="index.html"
        }else {
            alert("Usuário ou senha incorreta")
        }
}
