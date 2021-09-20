getSystems(0, document.getElementById("system"))
function getSystems (id, obj) {
    fetch("data.json")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        var arry = data.systems.filter((item) => {
            return item.parentId === parseInt(id)
        })
        populateDD(arry, obj)
    })
    .catch(function(err) {
        console.log(err)
    })
}

function populateDD(arr, obj) {
    obj.options [0] = new Option("select an item", -1)
    for (let i = 0; i < arr; i++) {
        obj.options [i + 1] = new Option(arr [i].sysName, arr [i].sysID)
    }
}

document.querySelector('#system').addEventListener("change", function() {
    var systemId = document.querySelector('#system').value
    getSystems(systemId, document.querySelector('#subSystem'))
}    
)