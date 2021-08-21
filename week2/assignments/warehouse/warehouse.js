const parts = [ 
     { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

function list () {
    var details = document.getElementById("detailsList")

    parts.forEach(function (each) {
        
        let partNo = document.createElement('div')
        details.appendChild(partNo)

        var check = document.createElement("input")
        check.setAttribute("type", "checkbox")
        partNo.appendChild(check)

        let partInfo = document.createElement("span")
        partInfo.textContent = ("parts: " + " " + each.partNbr + " " + "Qty: " + " " + each.qty)

        partNo.appendChild(partInfo)
        
    }) 
} 

list()

    function special () {
    var specialPkg = document.getElementById("specialPackaging")
    var emptyPkg = true
    parts.filter(function (specialPackaging) {
        if (specialPackaging.aisle === "B3"){
            let partInfo = document.createElement("span")
            partInfo.innerHTML = ("<br></br>Item: " + " " + specialPackaging.partNbr + "/" + "Qty: " + " " + specialPackaging.qty)
        
            specialPkg.appendChild(partInfo)
            emptyPkg = false
            }
        }) 
        if (emptyPkg) {
            specialPkg.remove()
        }
    }
    special()

function hazardous () {
    var hazard = document.getElementById("hazardousMaterials")
    var hazardMat = true
    parts.find(function (hazardousMaterials) {
        if (hazardousMaterials.aisle === "J4"){
            let partInfo = document.createElement("p")
            partInfo.textContent = (" Get Gloves")

            hazard.appendChild(partInfo)
            hazardMat = false

        }
    }) 
    if (hazardMat) {
        hazard.remove()
    }
}
hazardous()

function smallParts () {
    var smallItems = document.getElementById('smallItemsOnly')
    var smalls = true
    parts.every(function(smallItemsOnly) {
        if (smallItemsOnly.aisle === "H1") {
            let partInfo = document.createElement("p")
            partInfo.textContent = (smallItemsOnly.partDescr + " take basket and go dirctly to aisle H1")

            smallItems.appendChild(partInfo)
            smalls = false
        }
    }) 
    if (smalls) {
        smallItems.remove()
    }
}
smallParts()

function largeParts () {
    var largeItems = document.getElementById("forkiftNeeded")
    var large = true
    parts.some(function(forkiftNeeded) {
        if (forkiftNeeded.aisle === "S"| "T"| "U") {
            let partInfo = document.createElement("p")
            partInfo.textContent = (forkiftNeeded + "need to reserve a forklift")

            largeItems.appendChild(partInfo)
            large = false
        }
    }) 
    if (large) {
        largeItems.remove()
    }
}
largeParts ()

function total(){
    var totalItem = document.getElementById("totalItems")
    let sum = parts.reduce(function(totalItems, currentItems) {
        return totalItems += currentItems.qty
        }, 0) 
    totalItem.textContent += sum
}
total()
// parts.reduce(function(Total, item) {
//     return item.qty + Total
// }, 
// 0)
// I can't get this  to work properly and this is the only way the tutors 
// keep telling me to do it. I asked about writing it with out the 
// function and she said it doesn't matter