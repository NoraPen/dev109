  function createRhombus(pHeight, pSymbol, pColorEven, pColorOdd) {
            var rLine = "";
            var white = "#ffffff";

            // Top Left 
            for (let i = 1; i <= pHeight; i++) {
                rLine += "<p>";
                
                // White spaces for left alignment
                for (let j = 0; j < pHeight - i; j++) {
                    rLine += "<span style='color:" + white + ";'>" + " " + "</span>";
                }
                
                // Colored symbols
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
                
                // Symbols with alternating colors
                for (let j = 0; j < pHeight - i; j++) {
                    rLine += "<span style='color:" + white + ";'>" + " " + "</span>";
                }

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
                
                // White spaces 
                for (let j = 0; j < pHeight - i; j++) {
                    rLine += "<span style='color:" + white + ";'>" + " " + "</span>";
                }
                
                // Colored symbols 
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
                
               
                for (let j = 0; j < pHeight - i; j++) {
                    rLine += "<span style='color:" + white + ";'>" + " " + "</span>";
                }

                for (let j = 0; j < i; j++) {
                    if (j % 2 === 0) {
                        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
                    } else {
                        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
                    }
                }

                rLine += "</p>";
            }

            return rLine; 
        }

        // Generate rhombus 
        document.getElementById("rhombus").innerHTML = createRhombus(pHeight, pSymbol, pColorEven, pColorOdd);
    
