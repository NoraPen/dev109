function createRhombus() {
    var height = document.getElementById('rHeight').value;
    var colorEven = document.getElementById('colorEven').value;
    var colorOdd = document.getElementById('colorOdd').value;
    var symbol = document.getElementById('symbol').value;

    // Clear previous rhombus
    document.getElementById("upLeft").innerHTML = '';
    document.getElementById("upRight").innerHTML = '';
    document.getElementById("downLeft").innerHTML = '';
    document.getElementById("downRight").innerHTML = '';

    upLeft(height, colorEven, colorOdd, symbol);
    upRight(height, colorEven, colorOdd, symbol);
    downLeft(height, colorEven, colorOdd, symbol);
    downRight(height, colorEven, colorOdd, symbol);
}

function upLeft(height, colorEven, colorOdd, symbol) {
    var result = "";
    for (var i = 1; i <= height; i++) {
        var line = "";
        // Add spaces before symbols to align left
        for (var j = 1; j <= height - i; j++) {
            line += " "; // White space to shift symbols
        }
        // Add symbols
        for (var j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                line += `<span style='color:${colorEven};'>${symbol}</span>`;
            } else {
                line += `<span style='color:${colorOdd};'>${symbol}</span>`;
            }
        }
        result += line + "<br>";
    }
    document.getElementById("upLeft").innerHTML = result;
}

function upRight(height, colorEven, colorOdd, symbol) {
    var result = "";
    for (var i = 1; i <= height; i++) {
        var line = "";
        // Add spaces to push symbols to the right
        for (var j = 1; j <= height - i; j++) {
            line += " "; // White space to shift symbols
        }
        // Add symbols
        for (var j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                line += `<span style='color:${colorEven};'>${symbol}</span>`;
            } else {
                line += `<span style='color:${colorOdd};'>${symbol}</span>`;
            }
        }
        result += line + "<br>";
    }
    document.getElementById("upRight").innerHTML = result;
}

function downLeft(height, colorEven, colorOdd, symbol) {
    var result = "";
    for (var i = height; i >= 1; i--) {
        var line = "";
        // Add spaces before symbols to align left
        for (var j = 1; j <= height - i; j++) {
            line += " "; // White space to shift symbols
        }
        // Add symbols
        for (var j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                line += `<span style='color:${colorEven};'>${symbol}</span>`;
            } else {
                line += `<span style='color:${colorOdd};'>${symbol}</span>`;
            }
        }
        result += line + "<br>";
    }
    document.getElementById("downLeft").innerHTML = result;
}

function downRight(height, colorEven, colorOdd, symbol) {
    var result = "";
    for (var i = height; i >= 1; i--) {
        var line = "";
        // Add spaces to push symbols to the right
        for (var j = 1; j <= height - i; j++) {
            line += " "; // White space to shift symbols
        }
        // Add symbols
        for (var j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                line += `<span style='color:${colorEven};'>${symbol}</span>`;
            } else {
                line += `<span style='color:${colorOdd};'>${symbol}</span>`;
            }
        }
        result += line + "<br>";
    }
    document.getElementById("downRight").innerHTML = result;
}
