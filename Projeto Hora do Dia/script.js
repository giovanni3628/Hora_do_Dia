function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
   
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 6 && hora < 12){
    //bom dia
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'

    } else if(hora >= 12 && hora < 18) {
    //boa tarde  
    img.src = 'tarde.png'  
    document.body.style.background = '#b9846f'

    } else {
    //boa noite    
    img.src = 'noite.png'
    document.body.style.background = '#515154'
    }
}
