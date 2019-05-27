window.onload = function () {
    var data = location.href.split("?")[1]
    ajax({
        url: "/login/details",
        type: "get",
        data: data,
        dataType: "json"
    }).then((result) => {
        console.log(result)
        var result = result[0];
        sessionStorage.setItem("title", result.title);
        sessionStorage.setItem("price", result.price);
        sessionStorage.setItem("fid", result.hid);
        var title = document.querySelector(".active-2")
            .firstElementChild.innerHTML = result.title
        var color = document.querySelector(".active-2").children[1]
            .innerHTML = result.color
        var price = document.querySelector(".active-2").children[2]
            .innerHTML = result.price
        var details = document.querySelector(".active-2").children[6]
            .innerHTML = result.details
        var spec = document.querySelector(".active-2").children[8]
            .innerHTML = result.spec
        var category = document.querySelector(".active-2").children[10]
            .innerHTML = result.category

    })
    var data = location.href.split("?")[1]
    ajax({
        url: "/login/pic",
        type: "get",
        data: data,
        dataType: "json"
    }).then((result) => {
        console.log(result)
        sessionStorage.setItem("img", result[0].md)
        var pic = document.querySelector(".top1>ul>li")
        console.log(pic)
        var ul = document.querySelector(".top1>ul")
        console.log(ul)
        var divLg = document.querySelector("#div-lg")
        var mImg = document.querySelector(".card>img")
        console.log(mImg)

        console.log(divLg)
        var html = ""
        for (var p of result) {
            html += `<li >
           <img  src="${p.md}" data-lg="${p.lg}" data-lglg="${p.lglg}">
           </li>`
        }
        ul.innerHTML = html
        ul.style.width = "120*result.length"
        var mImg = document.querySelector(".card>img")
        mImg.getAttribute("src", result.lg)
        divLg.style.backgroundImage = `url($(result.lglg))`
        //点击左右按钮
        //让左右按钮移动
        var prev = document.querySelector(".prev")
        var next = document.querySelector(".next")
        if (result.length <= 4) {
           next.disabled=false
        }
        var data = true
        var moved = 0;
        next.onclick = function () {
            if (data == true) {
                moved++
                ul.style.marginLeft = -120 * moved + "px"
                prev.disabled=false
            
            if (120*moved>120) {
               data=false
            }
            }
        }
            prev.onclick = function () {
              
                if (120*moved>0 ) {
                    moved--
                    ul.style.marginLeft = -120 * moved + "px"
                     data=true
                    if (120*moved == 0) {
                      next.disabled=false
                    }
                }
            }
        

        //大图片切换小图片
        var imgs = document.querySelectorAll(".top1>ul>li>img")
        for (var img of imgs) {
            img.onmouseenter = function (e) {
                var img = e.target
                var lg = img.dataset.lg
            
                mImg.setAttribute("src", lg)
                divLg.style.backgroundImage = `url(${img.dataset.lglg})`
            }
        }
        //  // 鼠标进入superMask,显示遮罩层和大图片；鼠标移除superMask,隐藏遮罩层和大图片
        var mask = document.querySelector("#mask")
        console.log(mask)
        var smask = document.querySelector("#super-mask")
        // 遮罩层和大图片初始 隐藏
        mask.style.display = "none"
        divLg.style.display = "none"
        var max = 320 //中图片的宽度520-mask200
        smask.onmouseenter = function () {
            mask.style.display = "block"
            divLg.style.display = "block"
        }
        smask.onmouseleave = function () {
            mask.style.display = "none"
            divLg.style.display = "none"
        }
        // mask跟随鼠标移动，并同步移动大div的背景图片位置
        smask.onmousemove = function (e) {
            var left = e.offsetX - 100
            var top = e.offsetY - 100
            if (left < 0) left = 0
            else if (left > max) left = max
            if (top < 0) top = 0
            else if (top > max) top = max
            mask.style.left = left + "px"
            mask.style.top = top + "px"
            // 大图片背景的移动比例：大图片宽高/小图片宽高
            divLg.style.backgroundPosition = `${ -450/1100* left}px ${-450/1100* top}px `
        }
    })
}


//获取点击的数量
var btn1 = document.querySelector(".num").children[0]
console.log(btn1)
var count = document.querySelector(".num  h6")
var btn2 = document.querySelector(".num").children[2]
btn1.onclick = function () {
    count.innerHTML++;
    sessionStorage.setItem("count", count.innerHTML);
}
btn2.onclick = function () {
    if (count.innerHTML > 0) {
        count.innerHTML--;
        sessionStorage.setItem("count", count.innerHTML);
    }
}
//添加到购物车

var list = document.querySelector(".button")

list.onclick = function () {
    var title = sessionStorage.getItem("title")
    var count = sessionStorage.getItem("count")
    var price = sessionStorage.getItem("price")
    var img = sessionStorage.getItem("img")
    var id = sessionStorage.getItem("id")
    var rid = sessionStorage.getItem("fid")
    var model=document.querySelector(".model")
    var close=document.querySelector(".model-close")
    console.log(model)
    if(id==null){
        //alert("请登录")
     model.style.display="block"
     close.onclick=function(){
         model.style.display="none"
     }
    }else{
    var data = `pname=${title}&count=${count}&price=${price}&pic=${img}&user_id=${id}&sid=${rid}&is_checked=true`
    ajax({
        url: "/login/addcart",
        type: "post",
        data: data,
        dataType: "json"
    }).then((result) => {
        alert("添加成功")


    })

}


}


//控制左右按钮




var ul = document.querySelector(".main-div>ul")
var li = ul.querySelector(".main-div li")
var k = 0
setInterval(function () {
    k -= 260
    ul.style.left = k + "px"
    if (k < -1020) {
        li.remove()
        ul.appendChild(li)
        ul.style.left = "0px"
        k = 0
    }
}, 2000)





















document.querySelector("#content1").style.zIndex = 1;
//console.log(document.getElementById("content1"))
var lists = document.querySelectorAll("[data-toggle=d-flex ]")
//console.log(lists)
var n = 10//var flex of lists
for (var flex1 of lists) {
    // console.log(flex1)
    flex1.onclick = function () {
        var list = this
        console.log(this)
        var id = list.getAttribute("data-target")
        console.log(id)
        var content = document.querySelector(id)
        console.log(content)
        content.style.zIndex = n;
        n++
        console.log(n)
    }
}