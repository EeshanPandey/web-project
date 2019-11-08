var express=require("express"); 
var bodyParser=require("body-parser"); 
var urlencodedParser = bodyParser.urlencoded({ extended: true });


var MongoClient= require('mongodb').MongoClient;
var url="mongodb://localhost:27017/fashion";


// MongoClient.connect(url, function(err,db){
	
// 	var cursor= db.collection('mfashion').find();
	
// 	cursor.each(function(err,doc){
// 	result.push(doc);
// 	//console.log(result);
// 	});
// 	//console.log(result);
// 	//console.log(JSON.stringify(result[1]));
// 	db.close();
// });
// console.log(result);

var app=express();

app.use(bodyParser.json()); 
app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.engine('html',require('ejs').renderFile);

app.get('/',function(req,res){
	res.render('home.html');
});

app.get('/mensfashion', function(req,res)
{

	res.render("mensfashion1.ejs",{items:items});
});

app.get('/womensfashion',function(req,res)
{
	
	res.render('womensfashion.ejs',{f_item:f_item});
});
app.get('/kidsfashion',function(req,res)
{
	res.render('kidsfashion.ejs');
});
app.get('/health',function(req,res)
{
	res.render('healthandfitness.ejs');
});

app.get('/registration',function(req,res){
	res.render('reg.html');
});

app.post('/register',urlencodedParser, function(req,res){
	 //    var response = { username:req.body.Uname,   
		// ph :req.body.MNum, 
		// email:req.body.email, 
		// password:req.body.pass };
		
	    //console.log(response);
	    MongoClient.connect(url, async function(err, db) {
  		//var dbo = db.db("mydb");
  		var response = { username:req.body.Uname,   
		ph :req.body.MNum, 
		email:req.body.email, 
		password:req.body.pass };
  		db.collection("registration").insertOne(response, function(err, res) {
  	  	if (err) throw err;
    	console.log("1 document inserted");
    	db.close();
  });
}); 


	// res.send(JSON.stringify(response));
/*	MongoClient.connect(url, function(err, db){
        if (err)
            throw err;
        console.log("Connected to Database");
        db.collection('user').insertOne(response,function(err,result){
            if (err)
                throw err;
            console.log("1 document inserted to Collection");
            console.log(response);
        });
    });
*/
    res.render('success.html');

});

app.get('/login',function(req,res){
	res.render('login.html');
});

app.get('/home',function(req,res){
	res.render('web_tech_1.html');
});








var items =[
	{
		"title":"Black plain T-shirt for men",
		"price":250,
		"del":"Delivery in next 3 working days",
		"img_src":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqrWm6VZCYACYUrutBdkiU5HLV5N3vadBUZCc51Ki0Wm9l748F"
	},
	{
		"title":"Coloured Casual T-shirt",
		"price":150,
		"del":"Delivery in next 3-5 working days",
		"img_src":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR_BI2rd-r9bYhTPJCv3BIZUkF0xjwk0esGsEmLxMJOI-OML8F"	
	},
	{
		"title":"Leather Men's Shoe",
		"price":750,
		"del":"Delivery in next 2-7 working days",
		"img_src":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBT83sxDhZS3NFMOeKpHdiIOsw5-Tn82nbGrPFnyTV5PQHKzc-"
	},
	{
		"title":"Real Madrid Home Jersey",
		"price":1400,
		"del":"Delivery in next 2-5 working days",
		"img_src":"https://images-na.ssl-images-amazon.com/images/I/71cVLLARihL._SX425_.jpg"
	},
	{
		"title":"Men's Kurta (Yellow)",
		"price":999,
		"del":"Delivery in 1-2 working days",
		"img_src":"https://5.imimg.com/data5/HJ/LR/MY-45275458/mens-kurta-pajama-500x500.jpg"
	},
	{
		"title":"Nike Mercurial boots",
		"price":2099,
		"del":"Delivery in 5-6 working days",
		"img_src":"https://www.futbolemotion.com/imagesarticulos/136537/grandes/bota-nike-mercurial-superfly-vi-elite-special-edition-fg-laser-orange-black-hyper-crimson-0.jpg"
	},
	{
		"title":"Men's Formal Suit",
		"price":2999,
		"del":"Delivery in 2-3 working days",
		"img_src":"https://www.lordsindia.com/image/1/BLAZER/SUIT/MS-59-500x500.jpg"

	},
	{
		"title":"Levi Jeans",
		"price":599,
		"del":"Delivery in 3-5 working days",
		"img_src":"https://images-na.ssl-images-amazon.com/images/I/91OxwEbvf9L._UX466_.jpg"
	}

]
var f_item = [
	{
		"title":"Long Kurti for Women",
		"price":800,
		"del":"Deliver by in 2-4 working days",
		"img_src":"https://5.imimg.com/data5/TB/KC/MY-49794489/georgia-long-kurti-for-women-500x500.jpg"
	},
	{
		"title":"Women Jewellery Beginner",
		"price":2500,
		"del":"Deliver by in 1-3 working days",
		"img_src":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0M2AEu177FMuJG2WgusxQzuGd6QUDsFc9oo_PWb2Buukw7nhx"
	},
	{
		"title":"Cross strap Brown heels",
		"price":950,
		"del":"Delivery in next 3-5 working days",
		"img_src":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdBoc65_OgoF97oBM8Y1N-hNzBcuKNiLIoNb6Gu4siC64t-Gg7"
	},
	{
		"title":"Women's Flip Flops Brown",
		"price":650,
		"del":"Delivery in next 1-2 working days",
		"img_src":"https://images-na.ssl-images-amazon.com/images/I/81y0lnVIJyL._UX395_.jpg"
	},
	{
		"title":"Harpa Casual Black Top",
		"price":599,
		"del":"Delivery in 2-4 working days",
		"img_src":"https://rukminim1.flixcart.com/image/400/400/jeua3680/top/s/w/n/m-gr5127-black-harpa-original-imaf3fczfebnry8u.jpeg?q=90"
	},
	{
		"title":"Blue Jeans for Women",
		"price":1199,
		"del":"Delivery in 1-2 working days",
		"img_src":"https://images-na.ssl-images-amazon.com/images/I/71JFYDfuWxL._UL1500_.jpg"
	},
	{
		"title":"Pink Fashion Handbag",
		"price":2000,
		"del:":"Delivery in 4-6 working days",
		"img_src":"https://www.dhresource.com/0x0/f2/albu/g5/M00/54/C5/rBVaJFk45weAMQbiAAL5XWQIV1E508.jpg"
	},
	{
		"title":"Pink Design Ladies Frock",
		"price": 200,
		"del:":"Delivery in 3-4 working days",
		"img_src":"https://sc01.alicdn.com/kf/HTB1QesjOFXXXXbnXpXXq6xXFXXXC/Aliexpress-fashion-design-ladies-skirts-summer-short.jpg_350x350.jpg"
	}

	]
app.listen( process.env.PORT || 3000 , function(){
	console.log("SERVER 3000 HAS STARTED");
});
