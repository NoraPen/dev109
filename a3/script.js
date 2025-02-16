function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    var white = "#ffffff"; // Color for white spaces

    // Top section 
    for (let i = 1; i <= pHeight; i++) {
        rLine += "<p>";
        
        // Add white spaces 
        for (let j = 0; j < pHeight - i; j++) {
            rLine += "<span style='color:" + white + ";'>" + pSymbol + "</span>";
        }
        
        //  Top Left
        for (let j = 0; j < i; j++) {
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }

        // Top Right
        for (let j = 0; j < i; j++) {
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }

        rLine += "</p>";
    }

    // Combined Bottom section
    for (let i = pHeight - 1; i > 0; i--) {
        rLine += "<p>";

        // Add white spaces 
        for (let j = 0; j < pHeight - i; j++) {
            rLine += "<span style='color:" + white + ";'>" + pSymbol + "</span>";
        }

        //  Bottom Left
        for (let j = 0; j < i; j++) {
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }

        // ABottom Right
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
