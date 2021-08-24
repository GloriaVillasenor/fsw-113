var type

function fetchData() {
    var queryType = document.getElementById("queryType").value
    var itemID = document.getElementById("itemID").value
    // console.log("queryType: ", queryType)
    // console.log("itemId: ", itemId)
    getFromSWAPI(queryType, itemID)
}

function getFromSWAPI(queryType, itemID) {
    type = queryType
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        //console.log('response: ', data)
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

function updateInfo(data) {

    console.log('data: ', data)
    console.log('type: ', type)

    var dataLabel1 = document.getElementById("dataLabel1")
    var dataValue1 = document.getElementById("dataValue1")
    var dataLabel2 = document.getElementById("dataLabel2")
    var dataValue2 = document.getElementById("dataValue2")

    if (type === 'people') {
        dataLabel1.innerText = 'Person Name:'
        dataValue1.innerText = data.name
        dataLabel2.innerText = 'Height:'
        dataValue2.innerText = data.height
    } else if (type === 'planets') {
        dataLabel1.innerText = 'Planet Name:'
        dataValue1.innerText = data.name
        dataLabel2.innerText = 'Diameter:'
        dataValue2.innerText = data.diameter

    } else if (type === 'starships') {
        dataLabel1.innerText = 'Starship Name:'
        dataValue1.innerText = data.name
        dataLabel2.innerText = 'Model:'
        dataValue2.innerText = data.model

    }  
}
