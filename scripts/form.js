function captureDataPers() {
    let name = document.getElementById('idName')
    let mail = document.getElementById('idMail')
    let userMsg = document.getElementById('idMsg')

      let dataPers = {
        [name.name] : name.value,
        [mail.name] : mail.value,
        [userMsg.name] : userMsg.value
    }
    console.log(dataPers)
    return dataPers;
}

function showData() {
  alert(dataPers));
}

const handleForm = (event) => {
    event.preventDefault()
    captureDataPers()
    showData() 

}

let buttonForm = document.getElementById('submit')

buttonForm.addEventListener(
  'click', 
  handleForm,
  )
