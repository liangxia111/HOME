/*var txtname=document.querySelector(".name")
var txtupwd=document.querySelector(".pass")
txtname.onfocus=txtupwd.onfocus=function(){
  var txt=this;
  var div=txt.parentNode.children[1]


//4修改元素
txt.className="txt_focus"
div.className=""
}
//查找触发事件的元素
txtname.onblur=function(){
vali(this,/^\w{1,10}$/)
}
function vali(txt,reg){
var  div=txt.parentNode.nextElementSibling


  //4修改元素
   
  txt.className=""
  //5如果验证通过
  if(reg.test(txt.value)==true){
      div.className="vali_success"
  }else{
      div.className="vali_fail"
  }
  txtupwd.onblur=function(){
      vali(this,/^\d{6}$/)
  }

}*/


function show() {
    var txtname=document.querySelector(".name").value
    console.log(txtname)
    var txtupwd = document.querySelector(".pass").value
    var data = `name=${txtname}&upwd=${txtupwd}`
    ajax({
        url: "/login/show",
        type: "get",
        data: data,
        dataType: "json"
    }).then((result) => {
        console.log(result)
        sessionStorage.setItem("id",result[0].id);
        sessionStorage.setItem("name",result[0].name);
        var  uname=sessionStorage.getItem("name")
       if(result.innerHTML="登陆成功"){
    location.href = "http://127.0.0.1:3000/index.html"
    }else{
    alert("登录失败")}
    })

}

















