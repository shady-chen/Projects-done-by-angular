var app = angular.module('app',['ui.router']);
// 配置一下
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
		//设置默认路由
		$urlRouterProvider.otherwise('/home');
		// 开始配置路由
		$stateProvider.state('home',{
				url:'/home',
				views:{
					main:{
						templateUrl: './views/main.html'
					}
				}
			}).state('hot',{
				url:'/hot',
				views:{
					main:{
						templateUrl: './views/hot.html'
					}
				}
			}).state('heigh',{
				url:'/heigh',
				views:{
					main:{
						templateUrl: './views/heigh.html'
					}
				}
			}).state('search',{
				url:'/search',
				views:{
					main:{
						templateUrl: './views/search.html'
					}
				}
			})
}]);
/******************controller*****************************/
app.controller('ctrl', ['$scope','$http', function($scope,$http){
	/*******************进入页面加载内容********************************/ 
	$.ajax({
		type:'get',
		dataType:'jsonp',
		url:'http://api.douban.com/v2/movie/coming_soon?count=8&start=0',
		success:function(res){
			console.log(res);
			$scope.comingSoomdata = res.subjects;
			$scope.$apply();
			console.log($scope.comingSoomdata);
		}
	});
	/**************分页按钮*************/ 
	var num=0;
	$scope.page=function(index,n,url)
	{
		num = index?index:num+n;
		if(num>5)
		{
			alert("最多只有五页!");
			return;
		}
		if(num<0)
		{
			alert("当前已经是第一页");
			return;
		}
		switch (url) 
		{
			case 1:
			console.log(url);
				$.ajax({
				type:'get',
				dataType:'jsonp',
				url:'http://api.douban.com/v2/movie/coming_soon?count=8&start='+num*8,
				success:function(res){
				$scope.comingSoomdata = res.subjects;
				$scope.$apply();
				$(window).scrollTop(0);
				}
			});
				break;
			case 2:
			console.log(url);
				$.ajax({
					type:'get',
					dataType:'jsonp',
					url:'http://api.douban.com/v2/movie/in_theaters?count=8&start='+num*8,
					success:function(res)
					{
						console.log(res);
						$scope.hotFlim = res.subjects;
						$scope.$apply();
						console.log($scope.hotFlim);
					}
					});
				break;
			default:
			console.log(url);
				$.ajax({
					type:'get',
					dataType:'jsonp',
					url:'http://api.douban.com/v2/movie/top250?count=8&start='+num*8,
					success:function(res){
						$scope.top = res.subjects;
						$scope.$apply();
			
					}
					});
				break;
		}
		
	}//page

	$scope.hotMovie=function()
	{
		$.ajax({
		type:'get',
		dataType:'jsonp',
		url:'http://api.douban.com/v2/movie/in_theaters?count=8&start=0',
		success:function(res)
		{
			console.log(res);
			$scope.hotFlim = res.subjects;
			$scope.$apply();
			console.log($scope.hotFlim);
		}
		});
	
	};
	$scope.toptwo=function()
	{
		$.ajax({
		type:'get',
		dataType:'jsonp',
		url:'http://api.douban.com/v2/movie/top250?count=8&start=0',
		success:function(res){
			$scope.top = res.subjects;
			$scope.$apply();
			
		}
		})
	};
	
	$scope.search=function()
	{
		
		$.ajax({
		type:'get',
		dataType:'jsonp',
		url:'http://api.douban.com/v2/movie/search?q='+$scope.searchdata,
		success:function(res){
			$scope.searchData = res.subjects;
			console.log(res)
			$scope.$apply();
			
		}
		})
	}//search		
	
	
}]);


/********************jquery*************************/

/********************jquery*************************/  