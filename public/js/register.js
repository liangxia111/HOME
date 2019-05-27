function fun(){
    var ename=document.querySelector(".ename").value
    var email=document.querySelector(".email").value
    var pwd=document.querySelector(".word").value
    var phone=document.querySelector(".phone").value
    var test=document.querySelector(".test").value
    var data=`ename=${ename}&email=${email}&epwd=${pwd}&phone=${phone}&test=${test}`
    ajax({
        url:"/login/reg",
        type:"get",
        data:data
        //dataType:"JSON"
    }).then((result)=>{
        if(result=="注册成功"){
            location.href="http://127.0.0.1:3000/index.html"
        }else{
            alert("注册失败")
        }
       
       

    })

}




















