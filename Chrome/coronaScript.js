function getLocation() {
    if (navigator.geolocation) {
        //위치 정보를 얻기
        navigator.geolocation.getCurrentPosition (function(pos) {
            alert(pos.coords.latitude, pos.coords.longitude);
        });
    } else {
        alert("위치 정보를 가져올 수 없습니다.")
    }
}