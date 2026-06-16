//O JavaScript é uma linguagem WEB

//Variaveis - Valores armazenados na memória do computador

//Funções - Blocos de código

function carregar(){
    //alert("Bem Vindo!")
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date() 
    var hora = data.getHours()
    var minutos = data.getMinutes()

    

    msg.innerHTML = `Agora são ${hora}:${minutos}`

    if(hora >= 0 && hora <12){
        img.src = 'manha.png'
        document.body.style.background = '#00b4d8'
    }
    else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#b76e2e'
    }
    else{
        img.src = 'noite.png'
        document.body.style.background = '#1c2833'
    }
}
