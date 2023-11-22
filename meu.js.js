function verificar() {
    let date = new Date()
    let ano = date.getFullYear()
    let fano = window.document.getElementById('data')
    let resun = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src' , 'img/criança-mas.jpg')
            } else if (idade < 21) {
                img.setAttribute('src' , 'img/jovem-mas.jpg')
            } else if (idade < 50) {
                img.setAttribute('src' , 'img/adulto-mas.jpg')
            } else {
                img.setAttribute('src' , 'img/idoso-mas.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src' , 'img/criança-fem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src' , 'img/jovem-fem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulta-fem.jpg')
            } else {
                img.setAttribute('src' , 'img/idosa-fem.jpg')
            }
        }
        resun.style.textAlign = 'center'
        resun.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        resun.appendChild(img)
    }

}