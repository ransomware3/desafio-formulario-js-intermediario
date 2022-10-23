const camposDoForm = document.getElementsByName('info')
const alertaObrigatorio = document.getElementsByName('campo-obrigatorio')
const btnEnviar = document.getElementById('btn-enviar')

camposDoForm.forEach((item, indice, array) => {
    const campo = camposDoForm[indice]

    function reconhecerCampoPreenchido(){
        if(campo.value != ""){
            campo.style.border = "1px solid green"
            alertaObrigatorio[indice].style.display = "none"
        }else{
            campo.style.border = "1px solid red"
            alertaObrigatorio[indice].style.display = "block"
        }
    }

    function alertaEmTodosOsCampos(){
        if(campo.value == ""){
            campo.style.border = "1px solid red"
            alertaObrigatorio[indice].style.display = "block"
        }
    }

    alertaObrigatorio.forEach((indice) => {})

    alertaObrigatorio[indice].style.display = "none"

    campo.addEventListener('input', () => {
        reconhecerCampoPreenchido()
    })

    btnEnviar.addEventListener('click', () => {
        alertaEmTodosOsCampos()
    })
})