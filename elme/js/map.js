var map = new BMap.Map("allmap");
map.enableScrollWheelZoom(true);
(function(){
    // 定位引擎
    var geolocation = new BMap.Geolocation();
    // console.log(geolocation);
    // geolocation.getCurrentPosition(成功回调函数,配置)
    geolocation.getCurrentPosition(function(r){
        // console.log(e);
        if(this.getStatus() == BMAP_STATUS_SUCCESS){

            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            // alert('您的位置：'+r.point.lng+','+r.point.lat);
            getPos(r.point);
        }

    },{enableHighAccuracy: true})
})();



// 逆地址解析引擎
function getPos(pt){
    // pt是一个坐标容器
    var geoc = new BMap.Geocoder();
    geoc.getLocation(pt, function(rs){
        var addComp = rs.addressComponents;
        // console.log(addComp);
       var str = addComp.province  + addComp.city +  addComp.district +  addComp.street + addComp.streetNumber;
       console.log(str);
       document.getElementsByClassName('address')[0].innerHTML=str;
    });
}