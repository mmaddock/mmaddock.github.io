dragElement(document.getElementById("balcony1"));
dragElement(document.getElementById("balcony2"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id+"header")){
       document.getElementById(elmnt.id+"header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

function dragMouseDown(e){
    e = e || Window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
}

function elementDrag(e){
    e = e || Window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2)+"px";
    elmnt.style.left = (elmnt.offsetLeft-pos1)+"px";
}

function closeDragElement(){
   document.onmouseup =null;
    document.onmousemove= null;
}
}

var dragValue;

function move(id){
    var element= document.getElementById("first-small1");
    element.onmousedown = function(){
        dragValue = element;
    }
    document.onmouseup =function(e){
        dragValue = null;
    }
    document.onmousemove = function(e){
        var x = e.pageX;
        var y = e.pageY;

        dragValue.style.left= x+"px";
        dragValue.style.top = y+"px";
    }
}