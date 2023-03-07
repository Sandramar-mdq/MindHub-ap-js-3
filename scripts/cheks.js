let categories = []
data.events.forEach(each =>{
    if(!categories.includes(each.category)){
        categories.push(each.category)
    }
})
console.log(categories)

let templateChecks = (category)=>{
    return`
    <span>
          <input class="checks" type="checkbox" onclick='captureData("name", "checks", data.events)' name="category" id="${category}" value="${category}"> 
          <label class="label-text" for="${category}">${category}</label>
    </span>
    `
}

let printChecks = (id_html, categories) => {
    let selector = document.querySelector(`#${id_html}`)
    let templates = categories.map(templateChecks).join('')
    selector.innerHTML = templates
    //console.log(templates)
}

printChecks('checks_container', categories)