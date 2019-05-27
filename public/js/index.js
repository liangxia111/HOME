  
var index = document.querySelector(".index-li")
var a = index.querySelector("a");
var lefts = 0;
setInterval(function () {
    lefts -= 265;
    index.style.left = lefts + "px";
    if (lefts < -1060) {
        a.remove();
        index.appendChild(a);
        index.style.left = "0px";
        lefts = 0;
    }
}, 2000)
var index2 = document.querySelectorAll(".index-li")[1]
var index1 = index2.querySelector("a")
var newleft = 0;
setInterval(function () {
    newleft -= 265;
    index2.style.left = newleft + "px";
    if (newleft < -1060) {
        index1.remove();
        index2.appendChild(index1)
        index2.style.left = "0px"
        newleft = 0
    }
}, 2000)
var index3 = document.querySelectorAll(".index-li")[2];
var a1 = index3.querySelector("a")
var newright = 0;
setInterval(function () {
    newright -= 265;
    index3.style.left = newright + "px";
    if (newright < -1060) {
        a1.remove();
        index3.appendChild(a1)
        index3.style.left = "0px"
        newright = 0

    }
},2000)

var prev = document.querySelector(".prev")
var enda = document.querySelector(".enda")
var div = enda.querySelector(".enda div")
var m = 0
prev.onclick = function () {
    m -= 260;
    enda.style.left = m + "px"
    if (m <= -2120) {
        m = 0
        div.remove()
        enda.appendChild(div)
        enda.style.left = "0px"
    }
}
var next = document.querySelector(".next")
var enda = document.querySelector(".enda")
var div = enda.querySelector(".enda div")
var n = 0
next.onclick = function () {
    n -= 260
    enda.style.right = n + "px"
    if (n <= -2120) {
        enda.appendChild(div)
        enda.style.right = "0px"
        n = 0
    }

}

//1楼
function wash(){
    var room=document.querySelector(".ban4-1")
    room.style.transform="scale(1.1)"
   

}
function washroom(){
var washroom=document.querySelector(".ban4-1")
washroom.style.transform="scale(1.0)"

}

//2楼
function wash1(){
    var room1=document.querySelector(".last")
    room1.style.transform="scale(1.1)"
   

}
function washroom1(){
    var shop1=document.querySelector(".last")
    shop1.style.transform="scale(1.0)"
    
    }
    //3楼
    function wash2(){
        var room2=document.querySelector(".stop")
        room2.style.transform="scale(1.1)"
       
    
    }

    function washroom2(){
        var shop2=document.querySelector(".stop")
        shop2.style.transform="scale(1.0)"
        
        }



