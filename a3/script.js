function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upRight(pHeight, pColorEven, pColorOdd, pSymbol);
//downRight(pHeight, pColorEven, pColorOdd, pSymbol);

}


function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
var white = "#ffffff";
for (i=0;i<pHeight;i++){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<=i;j++){
    rLine +="<span style='color:" + white + ";'>" + pSymbol +"</span>";
/*
//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
*/
}


    
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("upRight").innerHTML = rLine;
}
