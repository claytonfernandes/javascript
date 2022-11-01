function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    msg.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#e8ddc7'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#d68258'
    } else {
        //BOA NOITE!
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#574167'
    }
}
