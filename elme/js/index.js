var app = angular.module('app',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	//设置默认路由
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
			url:'/home',
			views:
			{
				main:{
					templateUrl: './views/msite.html'
				 }
			}
	}).state('find',{
	    url:'/find',
        views:{
	        main:{
	            templateUrl:'./views/find.html'
            }
        }
    }).state('orderForm',{
        url:'/orderForm',
        views:{
            main:{
                templateUrl:'./views/orderForm.html'
            }
        }
    }).state('mine',{
        url:'/mine',
        views:{
            main:{
                templateUrl:'./views/mine.html'
            }
        }
    })//state
}]);

/************将swiper放到angular的directive中 使其每次加载都会加载一次swiper不然swiper会失效******************/
app.directive('direc',function(){
    // 1.为什么返回?
    return {
        restrict:'AE', //四种都可以渲染
        replace : true,
        compile:function(){

            var mySwiper = new Swiper('.swiper-container1', {
                //autoplay: 5000,//可选选项，自动滑动
                initialSlide :0,
                effect : 'fade',
                onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                    swiperAnimateCache(swiper); //隐藏动画元素
                    swiperAnimate(swiper); //初始化完成开始动画
                }, onSlideChangeEnd: function(swiper){
                    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                }
            });
            var mySwiper2 = new Swiper('#swiper-swiper', {
                initialSlide :0,
                effect : 'fade',
                pagination : '.swiper-pagination'
            });
            // 每渲染一次执行一次
        }
    };
});

app.controller('ctrl',['$scope',function($scope){
    $scope.dataShop =
    [
        {
            img:'//fuss10.elemecdn.com/d/09/630a094e084baee010fb644fc5c43jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'芝根芝底现烤披萨',
            starnum:4.9,
            monthnum:286,
            start:40,
            change:8,
            per:25,
            long:4.78,
            mins:38
        },
        {
            img:' //fuss10.elemecdn.com/c/b6/0f1980fc226c0d02bc12e85c63456jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'海山披萨',
            starnum:5.0,
            monthnum:499,
            start:20,
            change:3,
            per:15,
            long:3.28,
            mins:35
        },
        {
            img:'//fuss10.elemecdn.com/b/6f/120529d78b3070748ea69b0d0dbd6jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'红焖Jimy饭',
            starnum:4.8,
            monthnum:111,
            start:10,
            change:0,
            per:10,
            long:1.2,
            mins:18
        },
        {
            img:'//fuss10.elemecdn.com/c/d5/66f035fbf86f619859d6a441c3a75jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'上海鸭公煲',
            starnum:4.7,
            monthnum:1286,
            start:100,
            change:10,
            per:50,
            long:5.78,
            mins:45
        },
        {
            img:'//fuss10.elemecdn.com/f/33/294ec8070d6f3dd65c697b3fc8378jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'河南清汤粉',
            starnum:4.9,
            monthnum:826,
            start:20,
            change:3,
            per:0,
            long:1.5,
            mins:35
        },
        {
            img:'//fuss10.elemecdn.com/9/e2/ddd29833d647b9c9b63d835dc38c7jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'安徽酱肘子',
            starnum:5.0,
            monthnum:567,
            start:30,
            change:3,
            per:15,
            long:1.78,
            mins:0
        },
        {
            img:'//fuss10.elemecdn.com/5/41/b6f07e717bd162e353ef6164950c4jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'山西手抓饭',
            starnum:3.9,
            monthnum:2,
            start:20,
            change:1,
            per:20,
            long:10.78,
            mins:59
        },
        {
            img:'//fuss10.elemecdn.com/6/18/338ad34f5fa857395461ca5efda4apng.png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'南方人爱吃面条',
            starnum:5.0,
            monthnum:586,
            start:40,
            change:5,
            per:20,
            long:2.78,
            mins:0
        },
        {
            img:'//fuss10.elemecdn.com/e/10/67abbaea805ce3e75651ddf256184png.png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'甜的酸辣粉',
            starnum:5.0,
            monthnum:876,
            start:50,
            change:5,
            per:25,
            long:1.18,
            mins:20
        },
        {
            img:'//fuss10.elemecdn.com/3/06/237029bdd135e13b64877a1207072png.png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'疾角疙啦猪腿饭',
            starnum:4.7,
            monthnum:186,
            start:10,
            change:1,
            per:0,
            long:1.27,
            mins:0
        },
        {
            img:'//fuss10.elemecdn.com/c/d5/66f035fbf86f619859d6a441c3a75jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
            name:'全坊冰沙',
            starnum:'满分！',
            monthnum:10000,
            start:500,
            change:5,
            per:100,
            long:5.0,
            mins:0
        }

    ]
}]);
