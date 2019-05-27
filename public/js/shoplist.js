




window.onload = function () {



    var eid = sessionStorage.getItem("id")
    var data = `user_id=${eid}`
    console.log(eid)
    ajax({
        url: "/login/getShopCart",
        type: "post",
        data: data,
        dataType: "json"
    }).then((result) => {
        for (var i = 0; i < result.length; i++) {
            var $count = result[i].count
            var pid = result[i].sid
            var sum = 0
            var m = ""
            var m = `<div class="div1">                      
            <div>
            <button  class="reduce" >-</button> 
    <input type="text" style="width: 20%; text-align: center" value="${result[i].count}"   data-shop="${result[i].sid}"> 
    <button  class="augment">+</button>
  </div>
 <div class="img">
 <img src="${result[i].pc}" >
 </div>
 <div class="col">
 <p>${result[i].pname}  </p> 
  <p class="coll"> ${result[i].price}.00CNY</p>
 </div>
 <div class="sum">
  <p style="font-size:25px  " class="watch">总计 ${result[i].price * result[i].count} CNY</p> 
            <a href="javascript:;">
                <img src="img/shop.png">加入心愿单</a>      
            <a href="javascript:;" class="del"  data-shop="${result[i].sid}">
                <img src="img/dete.jpg"   >删除</a>
              
                </div>  
        </div>
  <hr> `
            var active = document.querySelector(".div2")
            active.innerHTML += m
            //计算总计

            sum += result[i].count * result[i].price
            console.log(sum)

        }
        var add = document.querySelectorAll(".add")
        var arr = document.querySelectorAll(".watch")
        var arr1 = [];
        for (var t = 0; t < arr.length; t++) {
            var a = parseInt(arr[t].innerHTML.slice(2));
            arr1.push(a);
        }
        var sum1 = 0;
        for (var j = 0; j < arr1.length; j++) {
            sum1 += arr1[j]
        }
        for (var u = 0; u < add.length; u++) {
            add[u].innerHTML = sum1 + " " + "CNY"
        }
        //计算减减的金额
        var btn = $(".reduce")
        $.each(btn, function (index, item) {
            $(item).on("click", function () {
                var uid = sessionStorage.getItem("id")
                var bid = $(this).next().data("shop")
                console.log(bid)
                var numElement = $(this).next();//下一个元素
                var num = $(this).next().val();//下一个元素的值
                if (num > 0) {
                    var Num = numElement.val(--num)
                    // 减少前的html内容

                    var $inner = $(".watch:eq('" + index + "')").text();
                    console.log($inner)
                    // 获取总价
                    var count = $inner.replace(/[^0-9]/ig, "");
                    // 计算减少后的总价
                    var decCount = Number(num) === 0 ? 0 : Math.floor((parseInt(count) / (num + 1)) * num)
                    console.log(decCount)
                    // 设置总价
                    var finalStr = $inner.replace(/[0-9]+/ig, decCount)
                    console.log(finalStr)
                    //把总价的内容放到相应的位置
                    $(".watch:eq('" + index + "')").text(finalStr)
                }
                var data = `user_id=${uid}&sid=${bid}&count=${Num}`
                ajax({
                    url: "/login/drop",
                    type: "post",
                    data: data,
                    dataType: "json"
                }).then((result) => {
                    console.log(result)
                })
            })
        })

        //删除商品数量

        active.addEventListener("click", function (e) {
            var get = e.target
            console.log(get)
            if (get.className == "del") {
                get.parentNode.parentNode.style.display = "none"
                var pid = get.dataset.shop
                var uid = sessionStorage.getItem("id")
                var data = `user_id=${uid}&sid=${pid}`
                ajax({
                    url: "/login/delete",
                    type: "get",
                    data: data,
                    dataType: "json"
                }).then((result) => {
                    alert("你确认删除?")
                    location.href = "http://127.0.0.1:3000/shoplist.html"
                })
            }




            //2绑定按钮的数量自减的事件

            //if (get.className == "reduce") {
            // var uid = sessionStorage.getItem("id")
            //  var bid=get.nextElementSibling.dataset.shop;
            //      console.log(bid) 
            //      var num=get.nextElementSibling;
            //      if(num.value>0)  {
            //         var Num= num.value = --num.value
            //         // 减少前的html内容
            //         var $inner = $(".watch:eq(0)").text();
            //         // 获取总价
            //         var count = $inner.replace(/[^0-9]/ig, "");
            //         // 计算减少后的总价
            //         var decCount = Math.floor((parseInt(count) / (Num + 1)) * Num)
            //         console.log(decCount)
            //         // 设置总价
            //         var finalStr = $inner.replace(/[0-9]+/ig, decCount)
            //         console.log(finalStr)
            //         //
            //         $(".watch:eq(0)").html(finalStr)
            //     }
            //      var  data=`user_id=${uid}&sid=${bid}&count=${Num}`
            //   ajax({
            //     url: "/login/drop",
            //     type: "post",
            //     data: data,
            //     dataType: "json"
            // }).then((result) => {
            //     console.log(result)
            //     var price1=document.querySelector(".watch")
            //     // price1.innerHTML=result[]
            //   })
            //}
            //3绑定按钮的数量自加的事件
            if (get.className == "augment") {
                var uid = sessionStorage.getItem("id")
                var iid = get.previousElementSibling.dataset.shop
                console.log(iid)
                var num1 = get.previousElementSibling
                var Num1 = num1.value++
                //加之前html的内容
                var input = get.parentNode.parentNode.lastElementChild.firstElementChild
                var inp = input.innerHTML
                //获取总价
                var count1 = inp.replace(/[^0-9]/ig, "");
                console.log(count1)
                //计算加+1后的总价
                var reduce1 = Number(Num1) === 0 ? 0 : Math.floor((parseInt(count1) / Num1) * (Num1 + 1))
                console.log(reduce1)
                //设置总价
                var final = count1.replace(/[0-9]+/ig, reduce1)
                console.log(final)
                //把总计放到相应的位置
                input.innerHTML = "总计" + final + "CNY"

                var data = `user_id=${uid}&sid=${iid}&count=${Num1}`
                ajax({
                    url: "/login/add",
                    type: "post",
                    data: data,
                    dataType: "json"
                }).then((result) => {
                    console.log(result)
                })
            }
            var add = document.querySelectorAll(".add")
            var arr = document.querySelectorAll(".watch")
            var arr1 = [];
            for (var t = 0; t < arr.length; t++) {
                var a = parseInt(arr[t].innerHTML.slice(2));
                arr1.push(a);
            }
            var sum1 = 0;
            for (var j = 0; j < arr1.length; j++) {
                sum1 += arr1[j]
            }
            for (var u = 0; u < add.length; u++) {
                add[u].innerHTML = sum1 + " " + "CNY"
            }


        })
        //点击结算 
        var end = document.querySelector(".child button")
        end.onclick = function () {
            confirm("您要去结算吗？")
        }
    })
}








   //所有商品的总计
   //计算所有商品总计
   /*var add = document.querySelectorAll(".add")
   var arr = document.querySelectorAll(".watch")
   var arr1 = [];
   for (var t = 0; t < arr.length; t++) {
       var a = parseInt(arr[t].innerHTML.slice(2));
       arr1.push(a);
   }
   var sum1 = 0;
   for (var j = 0; j < arr1.length; j++) {
       sum1 += arr1[j]
   }
   for (var u = 0; u < add.length; u++) {
       add[u].innerHTML = sum1 + " " + "CNY"
   }
 */




