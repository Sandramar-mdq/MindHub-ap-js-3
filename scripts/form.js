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
  alert("PERSONAL DATA TO SEND"/dataPers);
}

const handleForm = (event) => {
    event.preventDefault()
    captureDataPers(dataPers)
    showData() 

}

let buttonForm = document.getElementById('button-Form')

buttonForm.addEventListener(
  'click', 
  handleForm
  )
