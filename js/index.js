/*头部 下拉菜单*/
/* 登录 ****************************************************************************/
var denluFF=$(".denlu-ff")[0];
var denlu=$(".denlu")[0];
hover(denluFF,function(){
	denlu.style.display="block";
	denluFF.style.background="#fff";
},function(){
	denluFF.style.background="#f6f6f6";
	denlu.style.display="none";
})
/*手机营业厅 ***************************************************************************/
var phones=$(".phones")[0];
var erweima=$(".erweima")[0];
hover(phones,function(){
	erweima.style.display="block";
	phones.style.background="#fff";
},function(){
	phones.style.background="#f6f6f6";
	erweima.style.display="none";
})
/*手机营业厅 ***************************************************************************/
var fatherLis=$(".fatherlis");
var xuanxiang=$(".xuanxiang");
for(var i=0;i<fatherLis.length;i++){
	fatherLis[i].index=i;
		hover(fatherLis[i],function(){
			xuanxiang[this.index].style.display="block";
		},function(){
			xuanxiang[this.index].style.display="none";
		})
}

/*太原*************************************************************************/
var catybox=$(".catybox")[0];
var shanxi=$(".shanxi")[0];
var body=document.body;
catybox.onmouseover=function(){
	shanxi.style.display="block";
}
catybox.onmouseout=function(){
	shanxi.style.display="none";
}
/*body.onclick=function(){
	shanxi.style.display="none";
}*/
/*banner ***************************************************************************/
var tupian=document.getElementById("tupian");
var as=tupian.getElementsByTagName("a");
var yuandian=getClass("yuandian")[0];
var bannerbox=getClass("bannerbox")[0];
var bannnerLeft=getClass("bannner-left")[0];
var bannnerRight=getClass("bannner-right")[0];
var dian=yuandian.getElementsByTagName("li");


var now=0;//申明一个全局变量
	var next=0;
	for(var i=1;i<as.length;i++){
		as[i].style.left="750px";//让下一步的下标0从右向左
	}
	function hua(){
		next++;
		if(next>=as.length){
			next=0;
		}
		as[next].style.left="750px";
		animate(as[now],{left:-750});
		animate(as[next],{left:0});
		now=next;
		for(var i=0;i<dian.length;i++){
			dian[i].style.background="#b1b8cb";
			as[i].style.zIndex=0;
		}
		dian[next].style.background="#cc1289";
		as[next].style.zIndex=1;
	}
	var time=setInterval(hua,2000);

	bannerbox.onmouseover=function(){
		clearInterval(time);
		bannnerLeft.style.display="block";
		bannnerRight.style.display="block";
	}
	bannerbox.onmouseout=function(){
		time=setInterval(hua,2000);
		bannnerLeft.style.display="none";
		bannnerRight.style.display="none";
	}

	bannnerRight.onclick=function(){
			next--;
			if(next<=-1){
				next=as.length-1;
			}
			as[next].style.left="-750px";
			animate(as[now],{left:750});
			animate(as[next],{left:0});
			now=next;
				for(var i=0;i<dian.length;i++){
					dian[i].style.background="#b1b8cb";
				}
			dian[next].style.background="#cc1289";
	}
	bannnerLeft.onclick=function(){
		next++;
		if(next>=as.length){
			next=0;
		}
		as[next].style.left="750px";
		animate(as[now],{left:-750});
		animate(as[next],{left:0});
		now=next;
		for(var i=0;i<dian.length;i++){
			dian[i].style.background="#b1b8cb";
		}
		dian[next].style.background="#cc1289";
		}

		for(var i=0;i<dian.length;i++){
			dian[i].index=i;
			dian[i].onmouseover=function(){
				as[this.index].style.left="750px";
				for(var j=0;j<as.length;j++){
					if(j>=this.index){
						as[j].style.left="750px";//放入右侧
					}else{
						as[j].style.left=0;//放入盒子中
					}
					
					as[j].style.zIndex=0;
					dian[j].style.background="#b1b8cb";
				}
				if(this.index==0){
					as[this.index].style.left=0;
					dian[this.index].style.background="#cc1289";
				}
				animate(as[this.index-1],{left:-750});//将前一张再放到左边
				as[this.index].style.zIndex=1;
				animate(as[this.index],{left:0});
				dian[this.index].style.background="#cc1289";
				next=this.index;
				now=this.index;
			}
		}
/*业务区 ***************************************************************************/
var boxWhite=$(".box-white")[0];
var boxLi=$(".liss");
var w=getStyle(boxLi[0],"width");
function LeftLeft(){
	var first=getFirst(boxWhite);
	animate(first,{width:0},600,function(){
			boxWhite.appendChild(first);
			first.style.width=w+"px";
		})
}
var leftleft=setInterval(LeftLeft,2000);
boxWhite.onmouseover=function(){
	clearInterval(leftleft);
}
boxWhite.onmouseout=function(){
	leftleft=setInterval(LeftLeft,2000)
}

/*4G专区**************************************************************************/
var businessPicture=$(".business-picture")[0]
var imgs=$("img",businessPicture);
function fu(arr,chang){
	for(var i=0;i<arr.length;i++){
		arr[i].index=i;
		hover(arr[i],function(){
			//arr[this.index].style.right="10px";
			animate(arr[this.index],{right:chang},100,Tween.Linear);
		},function(){
			//arr[this.index].style.right=0;
			animate(arr[this.index],{right:0},600,Tween.Linear);
		})
	}
}
fu(imgs,20);
/*买手机**************************************************************************/
var tupian=$(".tupian");
fu(tupian,20);
/*业务推荐**************************************************************************/
var tupianR=$(".tupian2");
fu(tupianR,20)
/**固定*****************************************************************/
var tupianS=$(".tupian3");
fu(tupianS,60)
