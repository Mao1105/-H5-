document.addEventListener('touchstart', function(e) {
	e.preventDefault();
});
// 对话-页面
var content=document.getElementById('content');
var dialog=document.getElementById('dialog');
var aDialog=dialog.getElementsByTagName('span');
var go=aDialog[aDialog.length-1];

//錯誤頁
var regoBtn=document.getElementById('regoBtn');
regoBtn.addEventListener('touchstart',function(){
	oNotDare.style.display='none';
	oDialog.style.display='block';
})

//运动方式选择页面
var choose=document.getElementById('choose')
//运动详情1页面
var sport=document.getElementById('sport');
var main=document.getElementById('main');
var aDiv=document.querySelectorAll('.error');
console.log(aDiv)
var lenDiv=aDiv.length;
var rightmp3=document.getElementById('rightmp3');
var touchonoff=true;

//由于移动端不能自动触发play，所以只能设置一个交互行为触发play.
(function(){
	main.addEventListener('touchend',function(){
		if(touchonoff){
			touchonoff=false;
			rightmp3.play();
			bgmp3.play();
		}
	})
})();

//从对话页面进入-运动方式选择页面
(function(){
	go.addEventListener('touchstart',function(){
		
		dialog.style.display='none';
		choose.style.display='block';
	})
})()

var bodyBtn=document.querySelectorAll('.body');
var bodytitle=document.querySelector('#title');
var bodypic=document.querySelector('#pic');
var leftIcon=document.querySelector('.leftIcon');
var rightIcon=document.querySelector('.rightIcon');
var temp=0;
var bodyClass=[
	{
		bt:'tripetitle',
		bp:'tripepic'
	},
	{
		bt:'legtitle',
		bp:'legpic'
	},
	{
		bt:'armtitle',
		bp:'armpic'
	},
	{
		bt:'backtitle',
		bp:'backpic'
	}
]
//添加身体部位选择事件
for(var i=0,len=bodyBtn.length;i<len;i++){
	(function(i){  
	       bodyBtn[i].addEventListener('touchstart',function(){
			chooseTemp(i);
			choose.style.display='none';
			sport.style.display='block';
			})
	})(i);  
}

//添加转换事件
 (function(){  
       leftIcon.addEventListener('touchstart',function(){
	bgmp3.play();
			temp--;
			if(temp>=0){
				chooseTemp(temp);
			}else if(temp=-1){
				temp=bodyClass.length-1;
				chooseTemp(temp);
			}
		}) 
	rightIcon.addEventListener('touchstart',function(){
			temp++;
			if(temp<bodyClass.length){
				chooseTemp(temp);
			}else if(temp=bodyClass.length){
				temp=0;
				chooseTemp(temp);
			}
		})
})();  
function chooseTemp(t){
	bodytitle.className=bodyClass[t].bt;
	bodypic.className=bodyClass[t].bp;
	run();
}
//重力感应检测
function run(){
	var index=0;
	error();
	function error(){
		for(var i=0;i<lenDiv;i++){
			(function(i){  
				aDiv[i].className='error';
			})(i);  
		}
	}
	setTimeout(function(){
		if(window.DeviceMotionEvent) {
		    var speed = 15;// 用来判定的加速度阈值，太大了则很难触发
		    var count=0;    
		    var x, y, z, lastX, lastY, lastZ;
		    x = y = z = lastX = lastY = lastZ = 0;
			window.addEventListener('devicemotion',fn,false)
			function fn(event){
				if(index!=lenDiv){
				    var acceleration = event.accelerationIncludingGravity;
				    x = acceleration.x;
				    y = acceleration.y;
				    if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed|| Math.abs(z-lastZ) > speed) {
				        count++;
				        if(count==5){
					        right(index);
				        	index++;
					        count=0;
					        if(index==lenDiv){return;}
				        }
				    }
				    lastX = x;
				    lastY = y;
				    lastZ = z;
			}}
		}
	},1000)
}
function right(i){
	bgmp3.pause();
	rightmp3.play();
	setTimeout(function(){rightmp3.pause();bgmp3.play();},2000)
	aDiv[i].className='right';
}
