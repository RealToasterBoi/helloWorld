var secretSong = new Audio('media/secret.mp3');
function secret() {
    var helloWorld = "";
    var spanNum = 1;
    var rainbowColors = ["red","orange", "yellow", "green", "blue", "indigo", "violet"]
    var  BIGRainbowColors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"]
    document.getElementById("helloWorld").setAttribute("style", document.getElementById("helloWorld").getAttribute("style") + "font-size: 150px; top: 50%; left: 50%; transform: translate(-50%, -50%);");
    for (var i = 0; i < document.getElementById("helloWorld").innerHTML.length; i++) {

        if (document.getElementById("helloWorld").innerHTML[i] == " "){helloWorld += " "; continue;}
        helloWorld += "<span id=\"span" + spanNum + "\">" + document.getElementById("helloWorld").innerHTML[i] + "</span>";
        spanNum++;

    }

    document.getElementById("helloWorld").innerHTML = helloWorld;
    var i = -1;
    var test = "";
    var id = setInterval(() => {
        i++
        for (var j = 1; j < spanNum; ++j) {
            document.getElementById("span" + j).style.color = rainbowColors[(() => {
                k = Math.trunc((j-1+i) / rainbowColors.length)
                return ((j-1+i) - (rainbowColors.length*k));
                
            })()];
        }
    }, 100);
    var i = 0;
    var id = setInterval(() => {
        j = Math.trunc((i) /  BIGRainbowColors.length)
        document.body.style.background =  BIGRainbowColors[i - ( BIGRainbowColors.length*j)]
    }, 472);
    var ID2 = setTimeout(secretSong.play(), 472);
}
