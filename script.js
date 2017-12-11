function initMap() {
    var uluru = {lat: 54.348024, lng: 18.664599};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}