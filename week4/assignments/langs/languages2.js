const lang = 'JavaScript'

document.querySelector("#submit").addEventListener("click", function(){
    const myInputs = document.querySelectorAll('input')

    console.log('myInputs', myInputs)

    const allarry = [...myInputs]

    console.log('allarry', allarry)

    chkLang(allarry)
})

function chkLang(langs) {
    let result = false

    langs.forEach((curLang) => {

        if(curLang.value === lang) {
            result = true
        }

    })

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}