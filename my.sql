
SET NAMES UTF8;
drop  database   if  exists  sh;
create database  sh   charset=utf8;
use  sh;
/*用户信息表*/
create  table  login(
 id int  primary key auto_increment,
 name  varchar(11),
 upwd  varchar(18),
 email  varchar(64),
 phone  varchar(16),
 user_name  varchar(32)

);
insert into login  values("1","tom","124589","13524@qq.com",11111111,"wangming");
insert  into login values("2","jun","123456","118542@qq.com",2222222,"lisan");
/**注册表**/
create table home(
   eid int primary  key auto_increment,
    ename varchar(15),
    email varchar(17),
    epwd varchar(11),
    phone varchar(11),
    test varchar(15)
)
insert into home values("1","jerry","1185@qq.com",111111,22222,2145)
insert into home values("2","sara","11458@qq.com",222222,123456,2148)


/**家具型号种类**/
create  table  sh_family(
 sid  int  primary  key  auto_increment,
 sname  varchar(32)
);
("null","客厅"),
("null","书房"),
("null","阳台"),
("null","卧室")



/**各种家具**/
create table  sh_home(
  hid INT PRIMARY KEY AUTO_INCREMENT,
   home_id varchar(32),      #商品所属分类
   title  varchar(140),  #标题
color varchar(140),     #颜色
 price  DECIMAL(10,2),     #价格
  details varchar(140), #产品详细说明 
  spec varchar(64),          #规格
   category  varchar(32),   #所属分类
    number  varchar(132)   #商品数量

);
/*家具*/
 INSERT INTO sh_home VALUES
(null,1,"9弗罗特博","米黄色",3699,"这款沙发可以快速轻松地变成一张双人床。床垫和沙发套均可拆卸清洗,易于保持清洁。随心更换垫套，为你的沙发和房间打造新外观。","101*54","沙发",2),
(null,1,"LED灯","米白色",99,"柔和的圆形设计搭配金属和玻璃等天然材料，打造出经典的外观，不禁让你想起旧时的灯具。该款灯罩为整个房间提供平衡的一般照明。","105*45","圆灯",1),
(null,1,"10弗罗特博","米黄色",3699,"一夜安睡过后，你可以轻松把卧室或客房再次变回客厅。内置储物空间易于使用，十分宽敞，可以存放床上用品、书籍和睡衣。","45*62","沙发",1),
(null,2,"11台灯","米黄色",79,"可提供均匀的光线，适合用于镜子和水槽四周","102*56","台灯",2),
(null,2,"11STOCKHOLM 斯德哥尔摩 2017","米黄色",109,"一夜安睡过后，你可以轻松把卧室或客房再次变回客厅","102*12","大灯",2),
(null,2,"11STOCKHOLM 斯德哥尔摩 2017","白色",3699,"这款沙发可以快速轻松地变成一张宽敞的床，从而将客厅转变为卧室。座椅下方的储物空间足以收纳床上用品、枕头和书籍，且便于取用物品。","79*126","沙发",2),
(null,2,"12弗罗特博","米黄色",3699,"床垫和沙发套均可拆卸清洗.","54*101","沙发",1),
(null,2,"11顶灯"," 褐色",139,"随心更换垫套，为你的沙发和房间打造新外观。","101*45","顶灯",1),
(null,2,"伊波利","花瓶, 绿色",129,"黑色不易脏污且清洁方便。搁架单元的短边带有4个挂钩，可用于悬挂工具、运动器材及毛巾、洗衣袋等所有物品。","74*59","花瓶",1),
(null,2,"BULLIG 布丽格","褐色",139,"实木材质，为衣柜增添上乘质感。足够坚固，可以承受较重的衣物。使用 BUMERANG 布梅朗 宽肩衣架来保护针织衫和易损坏的衬衫，避免变形。","102*56","衣架",1),

(null,2,"托普格"," 黑色",69,"可提供均匀的光线，适合用于镜子和水槽四周","71*54","蜡烛",1),

(null,3,"托普格"," 米黄色",499,"一夜安睡过后，你可以轻松把卧室或客房再次变回客厅。","102*201","沙发",2),

(null,3,"伦利","白色",59,"实木材质，为衣柜增添上乘质感。足够坚固，可以承受较重的衣物.","445*15","上碗菜",1),

(null,3,"DRÖNA 德洛纳","黑色",259,"黑色不易脏污且清洁方便。搁架单元的短边带有4个挂钩.","78*45","上碗菜",1),


(null,3,"KUDDVIVA 库维瓦","多色",89,"可提供均匀的光线，适合用于镜子和水槽四周.","704*45","垫套",1),
 
(null,3,"BUMERANG 布梅朗","白色",49,"实木材质，为衣柜增添上乘质感。足够坚固，可以承受较重的衣物。使用 BUMERANG 布梅朗 宽肩衣架来保护针织衫和易损坏的衬衫，避免变形。","71*89","衣架",1),
(null,3,"迷你3屉柜","深灰色",149,"分开的搁板可用来放置杂志等；不仅令您的物品保持整洁，而且，不占用桌面空间。","74*124","屉柜",1),
(null,3,"IKEA PS 2017","深蓝色",499,"折叠式桶盖让您可以轻松拿到桶内的物品，即使堆叠放置时也不例外。","78*45","靠垫",1),
(null,3,"伊波利","灰色",49,"易于折叠和搬动。","71*54","蜡烛拖",1),
(null,4,"STOCKHOLM 斯德哥尔摩 2017","白色",99,"易于折叠，可节省 空间。","78*21","靠垫",1),
(null,4,"斯德哥尔摩 2017","红色",199,"分开的搁板可用来放置杂志等；不仅令您的物品保持整洁，而且，不占用桌面空间。","78*45","靠垫",1),
(null,4,"JÄTTESTOR 雅特斯托","红色",99,"随着孩子长大，可调节挂衣杆和搁板的高度。 内置减震器，可使门缓慢、安静、轻柔地关闭。镂空提手配有透明塑料底座，不但可以阻挡灰尘，还能方便看清里面的物品。","45*78","玩具",1),
(null,4,"MAMMUT 玛莫特"," 橙色",199,"结实且轻便的 MAMMUT 玛莫特 系列可以经受住各类天气的考验，让孩子在玩乐中发挥想象力。非常适合户外使用，移入室内时，易于清洗。","78*45","抱枕",1),
(null,4,"BUSUNGE 布松纳","红色",99,"有些时候，我们都需要一个高大而友善的朋友在身边给自己一个拥抱。这个朋友能够耐心倾听我们的心声，给我们提供有用的建议。就像是那种温柔热情、能够张开双臂迎接我们、陪伴我们一辈子的朋友。","78*89","靠垫",1);
(null,4,"KVISTBRO 魁思伯","储物桌, 深蓝色",99,"这款储物篮可存放休闲毯、报纸或纱线，也可以什么都不放当摆件用，突出其精美设计，营造宽敞之感。可轻松搬离沙发，放到扶手椅旁。","44*44","垃圾桶",1)
(null,4,"GNISSLA 格尼斯拉","台钟, 黑色",129,"静音钟。这款钟的机械装置带有静音机芯，可让你安静地享受放松和睡眠时光。","13厘米","台钟",1)

/*家具图片*/
create  table  sh_home_pic(
 pid int primary key  auto_increment,
 home_id  int,  #家具编号
 md  varchar(124),   #小图片路径
 lg varchar(124),    #中图片路径
 lglg  varchar(125) #大图片路径
);
/*插入图片*/
INSERT  INTO sh_home_pic VALUES
(null,1,"img/product/md/details-1.png","img/product/lg/details-11.png","img/product/lglg/piu-1.png"),
(null,1,"img/product/md/details-2.png","img/product/lg/details-12.png","img/product/lglg/piu-2.png"),
(null,1,"img/product/md/details-3.png","img/product/lg/details-13.png","img/product/lglg/piu-3.png"),
(null,26,"img/product/md/pic-11.jpg","img/product/lg/piv-1.jpg","img/product/lglg/pig-1.jpg"),
(null,26,"img/product/md/pic-12.jpg","img/product/lg/piv-2.jpg","img/product/lglg/pig-2.jpg"),
(null,26,"img/product/md/pic-13.jpg","img/product/lg/piv-3.jpg","img/product/lglg/pig-3.jpg"),
(null,26,"img/product/md/pic-14.jpg","img/product/lg/piv-4.jpg","img/product/lglg/pig-4.jpg"),
(null,26,"img/product/md/pic-15.jpg","img/product/lg/piv-5.jpg","img/product/lglg/pig-5.jpg"),
(null,26,"img/product/md/pic-16.jpg","img/product/lg/piv-6.jpg","img/product/lglg/pig-6.jpg"),
(null,26,"img/product/md/pic-17.jpg","img/product/lg/piv-7.jpg","img/product/lglg/pig-7.jpg")
(null,27,"img/product/md/poc-1.jpg","img/product/lg/pog-1.png","img/product/lglg/poo-1.png"),
(null,27,"img/product/md/poc-2.jpg","img/product/lg/pog-2.png","img/product/lglg/poo-2.png"),
(null,27,"img/product/md/poc-3.jpg","img/product/lg/pog-3.png","img/product/lglg/poo-3.png")



/*购物车条目*/
create  table sh_shopping_item(
mid  int  primary key  auto_increment,
user_id int,  #用户编号
sid  int,  #商品Id
pname  varchar(255), #商品名称
count int, #购买数量
price  DECIMAL(10,2),  #价格
is_checked boolean,  #是否已经勾选
pc  varchar(124)
)
