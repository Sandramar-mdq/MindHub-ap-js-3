function captureDataPers() {
    let name = document.getElementById('idName')
    let mail = document.getElementById('idMail')
    let userMsg = document.getElementById('idMsg')

    /* console.log(name.value)
    console.log(mail.value)
    console.log(userMsg.value) */

    console.log(name)
    console.log(mail)
    console.log(userMsg)

    /* let dataPers = {
        [name.name] : name.value,
        [mail.mail] : mail.value,
        [userMsg.userMsg] : userMsg.value
    } */
}


const handleForm = (event) => {
    event.preventDefault()
    captureDataPers()
}

let buttonForm = document.getElementById('button-Form')
buttonForm.addEventListener(
    'click', 
    handleForm 
)
