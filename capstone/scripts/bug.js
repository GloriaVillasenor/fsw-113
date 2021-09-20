// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
var newBug
class Bug {
    constructor(args) {
        this.reportedBy = arguments[0],
        this.system = arguments[1],
        this.subSystem = arguments[2],
        this.bugDesc = arguments[3]
    }

    addBug(newBug) {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
    //    let div = document.createElement("listWrapper");
    //    document.body.appendChild(div)
    //    object.addEventListener("click", deleteBug(), resolveBug());
    //     console.log('Reported By: ', this.reportedBy)
    //     console.log('Bug Description: ', this.bugDesc)
    let newBug = "<div id="bug22" class="bugRpt"></div>"
        newBug += "<p>Reported by: Gloria<br />System: Sales/Sales Contacs<br />You can't click the button when you try to</p>"
        newBug += "<button onclick="objBug.deleteBug(22)" class="bugBttn">X</button>"
        document.newBug.inneHTML = newBug
    }

    deleteBug(newBug) {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        const elem = document.querySelector('#bug');
        elem.parentNode.removeChild(elem);
    }

    resolveBug(newBug) {
        // Create code that changes the appropriate bug report to a darker color
    }
}

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    bugReport = new Bug(
        document.getElementById("reportedBy").value,
        document.getElementById("system").value,
        document.getElementById("subSystem").value,
        document.getElementById("bugDesc").value
    )

    bugReport.addBug()
}
