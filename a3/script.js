function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    var white = "#ffffff"; // Color for white spaces

    // Top Left 
    for (let i = 1; i <= pHeight; i++) {
        rLine += "<p>";
        
        // Add white spaces for left alignment
        for (let j = 0; j < pHeight - i; j++) {
            rLine += "<span style='color:" + white + ";'>" + "*" + "</span>";
        }
        
        // Add symbols 
        for (let j = 0; j < i; j++) {
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }

        rLine += "</p>";
    }

    // Top Right 
    for (let i = 1; i <= pHeight; i++) {
        rLine += "<p>";
        
        
        // Add symbols 
        for (let j = 0; j < i; j++) {
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }

        rLine += "</p>";
    }

    // Bottom Left 
    for (let i = pHeight - 1; i > 0; i--) {
        rLine += "<p>";
        
        // Add white spaces 
        for (let j = 0; j < pHeight - i; j++) {
            rLine += "<span style='color:" + white + ";'>" + "*" + "</span>";
        }
        
        // Add symbols 
        for (let j = 0; j < i; j++) {
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }

        rLine += "</p>";
    }

    // Bottom Right 
    for (let i = pHeight - 1; i > 0; i--) {
        rLine += "<p>";
        
        
        
        // Add symbols
        for (let j = 0; j < i; j++) {
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }

        rLine += "</p>";
    }

    document.getElementById("rhombus").innerHTML = rLine;
}



