// perminent functions
function create(content, elementType, target, styles, id) {
    if (content === void 0) { content = ""; }
    if (target === void 0) { target = document.body; }
    if (styles === void 0) { styles = ""; }
    if (id === void 0) { id = ""; }
    var newDiv = document.createElement(elementType);
    var newContent = document.createTextNode(content);
    newDiv.setAttribute("style", styles);
    newDiv.setAttribute("id", id);
    newDiv.appendChild(newContent);
    target === null || target === void 0 ? void 0 : target.append(newDiv);
    return newDiv;
}
// creation of variables
var mouseX;
var mouseY;
var counter = 0;
var held = 0;
var mouseDown = 0;
// mouse stuff
onmousedown = function (e) {
    console.log("Mouse down");
    mouseDown++;
    mouseX = e.clientX - 30;
    mouseY = e.clientY - 30;
    //alert("Mouse clicked at "+mouseX+", "+mouseY);
    Alpha();
    console.log("Alpha called");
    // setInterval to call Alpha every second while mouse is down
    this.setInterval(function () {
        if (mouseDown > 0) {
            Alpha();
        }
        else {
            this.clearInterval();
        }
    }, 100);
};
onmouseup = function (e) {
    console.log("Mouse up");
    mouseDown--;
};
onmousemove = function (e) {
    mouseX = e.clientX - 30;
    mouseY = e.clientY - 30;
    //alert("Mouse moved to "+mouseX+", "+mouseY);
    //console.log("Mouse moved to "+mouseX+", "+mouseY);
};
// main functionality
function Alpha() {
    try {
        var canvas = document.getElementById("canvas1") ? document.getElementById("canvas1") : document.body;
        if (canvas == null) {
            throw new Error("Canvas not found");
        }
        var ColorRan = Math.floor(Math.random() * 16777215).toString(16);
        //canvas.append('<div id="dot'+counter+'" style="left:'+mouseX+'px;top:'+mouseY+'px; width:60px; height:60px;background-color:#'+ColorRan+';border-radius:100px;position:absolute;border-color:transparent"></div>');
        create("", "div", (document.getElementById("canvas1") ? document.getElementById("canvas1") : document.body), "left:" + mouseX + "px;top:" + mouseY + "px; width:60px; height:60px;background-color:#" + ColorRan + ";border-radius:100px;position:absolute;border-color:transparent", "dot" + counter);
        counter++;
        var err = Error;
    }
    catch (err) {
        var myWindow = window.open("", "MsgWindow", "width=300,height=25");
        if (myWindow === null || myWindow === void 0 ? void 0 : myWindow.document.body) {
            create("Error: " + err, "p", myWindow.document.body);
        }
    }
}
;
