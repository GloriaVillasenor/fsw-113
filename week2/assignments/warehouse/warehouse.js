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

// list of each part number and qty for check-off in the "detailsList" element
function list () {
    var details = document.getElementById("detailsList")

    for (i = 0; i < parts.length; i++) {
        
        let partNo = document.createElement('div')
        details.appendChild(partNo)

        var check = document.createElement("input")
        check.setAttribute("type", "checkbox")
        partNo.appendChild(check)

        let partInfo = document.createElement("span")
        partInfo.textContent = ("parts: " + "" + parts[i].partNbr + "" + "Quantity: " + "" + parts[i].qty)

        partNo.appendChild(partInfo)
        
    }
} 

list()

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element
    function special () {
        var specialPkg = document.getElementById("specialPackaging")
        var emptyPkg = true
        for (i = 0; i < parts.length; i++) {
            if (parts[i].aisle === "B3"){
                console.log(parts[i])
                let partInfo = document.createElement("span")
                partInfo.innerHTML = ("<br></br>parts: " + "" + parts[i].partNbr + "/" + "Quantity: " + "" + parts[i].qty)
        
                specialPkg.appendChild(partInfo)
                emptyPkg = false
            }
        }
        if (emptyPkg) {
            specialPkg.remove()
        }
    }
    special()
// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element
function hazardous () {
    var hazard = document.getElementById("hazardousMaterials")
    var hazardMat = true
    for (i = 0; i < parts.length; i++) {
        if (parts[i].aisle === "J4"){
            console.log(parts[i])
            let partInfo = document.createElement("p")
            partInfo.textContent = (parts[i].partDescr + " Get Gloves")

            hazard.appendChild(partInfo)
            hazardMat = false

        }
    }
    if (hazardMat) {
        hazard.remove()
    }
}
hazardous()

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1
function smallParts () {
    var smallItems = document.getElementById('smallItemsOnly')
    var smalls = true
    for (i = 0; i < parts.length; i++) {
        if (parts[i].aisle === "H1") {
            console.log(parts[i])
            let partInfo = document.createElement("p")
            partInfo.textContent = (parts[i].partDescr + " take basket and go dirctly to aisle H1")

            smallItems.appendChild(partInfo)
            smalls = false
        }
    }
    if (smalls) {
        smallItems.remove()
    }
}
smallParts()
// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element
function largeParts () {
    var largeItems = document.getElementById("forkiftNeeded")
    var large = true
    for (i = 0; i < parts.length; i++) {
        if (parts[i].aisle === "S"| "T"| "U") {
            console.log(parts[i])
            let partInfo = document.createElement("p")
            partInfo.textContent = (parts[i] + "need to reserve a forklift")

            largeItems.appendChild(partInfo)
            large = false
        }
    }
}
largeParts ()
// sum up the total number of parts and append that number to the text already in "totalItems" element
function total(){
    var totalItem = document.getElementById("totalItems")
    let sum = 0
    for (i = 0; i < parts.length; i++) {
    sum += parts[i].qty
    }
    totalItem.textContent += sum
}
total()