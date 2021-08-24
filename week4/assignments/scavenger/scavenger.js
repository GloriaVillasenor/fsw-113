document.querySelector("#submit").addEventListener("click", function(){
    combineLists()
})
function combineLists() {
    // console.log('test')
    const textary1 = document.getElementById("scavenger-0").value
    const textary2 = document.getElementById("scavenger-1").value
    const textary3 = document.getElementById("scavenger-2").value
    const textary4 = document.getElementById("scavenger-3").value

    // console.log(textary1, textary2, textary3, textary4)

    const ary1 = textary1.split(",")
    const ary2 = textary2.split(",")
    const ary3 = textary3.split(",")
    const ary4 = textary4.split(",")

    // console.log(ary1, ary2, ary3, ary4)
    const allary = [...ary1, ...ary2, ...ary3, ...ary4].sort()
    // console.log(allary)
    const div = document.getElementById("AllItems")
    div.textContent = allary
}

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}