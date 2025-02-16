function createRhombus(pHeight, pSymbol, pColorEven, pColorOdd) {
    var rLine = "";
    var white = "#ffffff"; // Define the color of the white spaces

    // Top Left 
    for (let i = 1; i <= pHeight; i++) {
        rLine += "<p>";
        
        // Create each line with white spaces
        for (let j = 0; j < pHeight - i; j++) {
            rLine += "<span style='color:" + white + ";'>" + " " + "</span>";
        }
        
        // Add the colored symbols with alternating colors
        for (let j = 0; j < i; j++) {
            if (j % 2 === 0) { // Even position
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else { // Odd position
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        
        rLine += "</p>";
    }

    // Bottom Left 
    for (let i = pHeight - 1; i > 0; i--) {
        rLine += "<p>";
        
        // Create each line with white spaces
        for (let j = 0; j < pHeight - i; j++) {
            rLine += "<span style='color:" + white + ";'>" + " " + "</span>";
        }
        
        // Add the colored symbols with alternating colors
        for (let j = 0; j < i; j++) {
            if (j % 2 === 0) { // Even position
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else { // Odd position
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        
        rLine += "</p>";
    }

    return rLine; // Return the final output
}
