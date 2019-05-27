
const express = require("express")
const pool = require("../pool.js")
var router = express.Router();
const session = require("express-session")

/*登录功能*/
router.get("/show", (req, res) => {
    var obj = req.query
    var u = obj.name
    var p = obj.upwd;
    if (!u) {
        res.send("用户名不能为空")
        return;
    }
    if (!p) {
        res.send("密码不能为空")
        return;
    }

    console.log(p + ":" + u)
    var sql = "select name,upwd,id from login  where name=? and upwd=?"
    pool.query(sql, [u, p], (err, result) => {
        if (err) throw err
        if (result.length > 0) {
            res.send(result)
        }
        else {
            res.send("登录失败")
        }


    })
});

/*详情页面*/
router.get("/details", (req, res) => {
    var obj = req.query
    var id = obj.hid;
    var sql = "select * from sh_home where  hid=?"
    pool.query(sql, [id], (err, result) => {
        if (err) throw err
        res.send(result)

    })
})
router.get("/pic", (req, res) => {
    var obj = req.query;
    var eid = obj.hid
    var sql = "select * from sh_home_pic where home_id=? "
    pool.query(sql, [eid], (err, result) => {
        if (err) throw err
        res.send(result)
    })
})
/*注册页面*/
router.get("/reg", (req, res) => {
    var obj = req.query
    var $ename = obj.ename;
    if (!$ename) {
        res.send("用户名不能为空")
        return
    }
    var $email = obj.email;
    if (!$email) {
        res.send("邮箱不能为空")
        return
    }
    var $epwd = obj.epwd;
    if (!$epwd) {
        res.send("密码不能为空")
        return
    }
    var $phone = obj.phone;
    if (!$phone) {
        res.send("电话不能为空")
        return
    }
    var $test = obj.test;
    if (!$test) {
        res.send("验证码不能为空")
        return
    }
    var sql = "insert into  home  set ?  "
    pool.query(sql, [obj], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send("注册成功")
        } else {
            res.send("注册失败")
        }
    })
})

/*用户点击添加购物车按钮*/
router.post("/addcart", (req, res) => {
    var user_id = req.body.user_id;
    var sid = req.body.sid
    var pname = req.body.pname;
    var price = req.body.price;
    var pc = req.body.pic
    var count = req.body.count
    //通过count判断用户是否买过
    var sql = "select count from  sh_shopping_item where user_id=?  AND sid=?"
    pool.query(sql, [user_id, sid, count], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            var sql = `insert into sh_shopping_item  values(null,"${user_id}","${sid}","${pname}","${count}","${price}",is_checked=true,"${pc}")`
        } else {
            var sql = `update sh_shopping_item set count=count+${count} where user_id=${user_id}   AND  sid=${sid}`
        }
        pool.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    })
})
// 查询购物车列表
router.post("/getShopCart", (req, res) => {
    var wid = req.body.user_id
    var sql = "select mid,sid,pname,count,price,is_checked,pc from  sh_shopping_item where user_id=?"
    pool.query(sql, [wid], (err, result) => {

        if (err) throw err;
        res.send(result)
    })
})
//删除购物车列表中的商品
router.get("/delete", (req, res) => {
    var uid = req.query.user_id

    var pid = req.query.sid
    var sql = "delete from  sh_shopping_item where user_id=?  and  sid=?"
    pid = parseInt(pid)
    pool.query(sql, [uid, pid], (err, result) => {
        if (err) throw err
        if (result.affectedRows > 0) {
            res.send({ code: 1, msg: "删除成功" })
        } else {
            res.send({ code: -1, msg: "删除失败" })
        }
    })
})
//修改购物车列表中商品数量减
router.post("/drop", (req, res) => {
    var uid = req.body.user_id

    var tid = req.body.sid;

    var count = req.body.count;
    //console.log(count);

    //先查询。若count>0,才可以减
    var sql = `select count  from sh_shopping_item  where  user_id=? and   sid=?`
    pool.query(sql, [uid, tid], (err, result) => {
        if (err) throw err
        //res.send(result[0])
        //判断数量是否大于0
        var Num = result[0].count - 1;
        if (Num > 0) {
            //如果数量大于0，就修改数据
            //var sql = `update   sh_shopping_item set  count= ${Num} where user_id=${uid}   AND  sid=${tid} `
            var sql = `update   sh_shopping_item set  count= ${Num} where user_id= ?   AND  sid= ? `
            pool.query(sql, [uid, tid], (err, result) => {
                if (err) throw err

                //减完数量，传回前端
                if (result.affectedRows > 0) {
                    var sql = "select count,price  from sh_shopping_item  where user_id=?   AND  sid=?   "
                    pool.query(sql, [uid, tid], (err, result) => {
                        if (err) throw err

                        res.send(result)

                    })

                }


            })

        }
    })
});
//让购物车的数量++
router.post("/add", (req, res) => {
    var bid = req.body.user_id;
    var aid = req.body.sid;
    var num = req.body.count;
    var sql = "select  count   from  sh_shopping_item where user_id=?  and   sid=?"
    pool.query(sql, [bid, aid], (err, result) => {
        if (err) throw err
        //console.log(result)
        var num1 = result[0].count + 1
        //console.log(num1)
        var sql = `update  sh_shopping_item  set count=${num1}  where user_id=?   and   sid=?`
        pool.query(sql, [bid, aid], (err, result) => {
            if (err) throw err
            console.log(bid)
            console.log(aid)
            if (result.affectedRows > 0) {
                var sql = `select  count,   price  from  sh_shopping_item  where user_id = ?  and  sid=?`
                pool.query(sql, [bid, aid], (err, result) => {
                    if (err) throw err
                    console.log(result)
                    res.send(result)

                })
            }
        })
    })

})

module.exports = router;