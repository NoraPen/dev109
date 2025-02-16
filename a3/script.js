function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    topLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    topRight(pHeight, pColorEven, pColorOdd, pSymbol);
    bottomLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    bottomRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

function topLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = 0; i < pHeight; i++) {
        rLine += "<p>";
        
        // Add white spaces for alignment
        for (var j = 0; j < pHeight - i - 1; j++) {
            rLine += "<span style='color: white;'> </span>"; 
        }
        
        // symbols with alternating colors
        for (var j = 0; j <= i; j++) {
            if (j % 2) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        
        rLine += "</p>";
    }
    
    document.getElementById("topLeft").innerHTML = rLine;
}

function topRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = 0; i < pHeight; i++) {
        rLine += "<p>";
        
        // Add white spaces to align symbols 
        for (var j = 0; j < pHeight - i - 1; j++) {
            rLine += "<span style='color: white;'> </span>"; 
        }
        
        // symbols with alternating colors
        for (var j = 0; j <= i; j++) {
            if (j % 2) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        
        rLine += "</p>";
    }
    
    document.getElementById("topRight").innerHTML = rLine;
}

function bottomLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = pHeight; i > 0; i--) {
        rLine += "<p>";
        
        // Add white spaces for left alignment
        for (var j = 0; j < pHeight - i; j++) {
            rLine += "<span style='color: white;'> </span>"; 
        }
        
        //  symbols with alternating colors
        for (var j = 0; j < i; j++) {
            if (j % 2) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        
        rLine += "</p>";
    }
    
    document.getElementById("bottomLeft").innerHTML = rLine;
}

function bottomRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = pHeight; i > 0; i--) {
        rLine += "<p>";
        
        // Add white spaces to align symbols to the right 
        for (var j = 0; j < pHeight - i; j++) {
            rLine += "<span style='color: white;'> </span>"; // White symbols
        }
        
        //  symbols with alternating colors
        for (var j = 0; j < i; j++) {
            if (j % 2) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        
        rLine += "</p>";
    }
    
    document.getElementById("bottomRight").innerHTML = rLine;
}
