/*    map    */

function initialize() {
    var mapCanvas = document.querySelector(".map");
    var myLatLng = new google.maps.LatLng(59.936279, 30.321177);

    var mapOptions = {
        center: myLatLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        disableDefaultUI: true
    }

    var map = new google.maps.Map(mapCanvas, mapOptions);   
    var image = "img/icon-map-marker.svg";

    var mapMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

google.maps.event.addDomListener(window, 'load', initialize);


/*    mobile-menu    */

var mainNav = document.querySelector(".main-nav");
var mainNavList = document.querySelector(".main-nav__list");
var mainNavToggles = document.querySelector(".main-nav__toggles");
var mainNavToggleOpen = document.querySelector(".main-nav__toggle-open");
var mainNavToggleClose = document.querySelector(".main-nav__toggle-close");

mainNavToggles.addEventListener("click", function(event) {
    event.preventDefault();
    mainNavToggleOpen.classList.toggle("main-nav__toggle-open--show");
    mainNavToggleClose.classList.toggle("main-nav__toggle-close--show");
    mainNavList.classList.toggle("main-nav__list--show");
    mainNav.classList.toggle("main-nav--show");
});


/*    reviews-slider    */

var review = document.querySelectorAll(".review");
var reviewsToggle = document.querySelectorAll(".reviews__toggle");

for (var i = 0; i < reviewsToggle.length; i++) {
    reviewsToggle[i].addEventListener('click', function(event) {
    event.preventDefault();

    for (var i = 0; i < reviewsToggle.length; i++) {
        if (reviewsToggle[i].classList.contains("reviews__toggle--current")) {
            reviewsToggle[i].classList.remove("reviews__toggle--current");
        };
    };
    
    this.classList.add("reviews__toggle--current");
    var count = this.getAttribute('data-count');

    for (var i = 0; i < review.length; i++) {
        if (review[i].classList.contains("review--current")) {
          review[i].classList.remove("review--current");
        };
    };
    
    review[count].classList.add("review--current");
    });
};


/*    mobile price-slider    */

var price = document.querySelector(".price__table");
var priceToggle = document.querySelectorAll(".price__toggle");

for (var i = 0; i < priceToggle.length; i++) {
    priceToggle[i].addEventListener('click', function(event) {
    event.preventDefault();

    for (var i = 0; i < priceToggle.length; i++) {
        if (priceToggle[i].classList.contains("price__toggle--current")) {
            priceToggle[i].classList.remove("price__toggle--current");
        };
    };
    
    this.classList.add("price__toggle--current");
    
    var count = this.getAttribute('data-count');
    var column = "price__table--col-" + count;

    price.className = "price__table";
    price.classList.add(column);
    });
};