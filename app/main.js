//thanks tcons!
!function(r,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n():r.transformicons=n()}(this||window,function(){"use strict";var r={},n={transform:["click"],revert:["click"]},t=function(r){return"string"==typeof r?Array.prototype.slice.call(document.querySelectorAll(r)):void 0===r||r instanceof Array?r:[r]},o=function(r){return"string"==typeof r?r.toLowerCase().split(" "):r},e=function(r,e,f){var i=(f?"remove":"add")+"EventListener",s=t(r),a=s.length,u={};for(var l in n)u[l]=e&&e[l]?o(e[l]):n[l];for(;a--;)for(var d in u)for(var m=u[d].length;m--;)s[a][i](u[d][m],c)},c=function(n){r.toggle(n.currentTarget)};return r.add=function(n,t){return e(n,t),r},r.remove=function(n,t){return e(n,t,!0),r},r.transform=function(n){return t(n).forEach(function(r){r.classList.add("tcon-transform")}),r},r.revert=function(n){return t(n).forEach(function(r){r.classList.remove("tcon-transform")}),r},r.toggle=function(n){return t(n).forEach(function(n){r[n.classList.contains("tcon-transform")?"revert":"transform"](n)}),r},r});
!function(r,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n():r.transformicons=n()}(this||window,function(){"use strict";var r={},n={transform:["click"],revert:["click"]},t=function(r){return"string"==typeof r?Array.prototype.slice.call(document.querySelectorAll(r)):void 0===r||r instanceof Array?r:[r]},o=function(r){return"string"==typeof r?r.toLowerCase().split(" "):r},e=function(r,e,f){var i=(f?"remove":"add")+"EventListener",s=t(r),a=s.length,u={};for(var l in n)u[l]=e&&e[l]?o(e[l]):n[l];for(;a--;)for(var d in u)for(var m=u[d].length;m--;)s[a][i](u[d][m],c)},c=function(n){r.toggle(n.currentTarget)};return r.add=function(n,t){return e(n,t),r},r.remove=function(n,t){return e(n,t,!0),r},r.transform=function(n){return t(n).forEach(function(r){r.classList.add("tcon-transform")}),r},r.revert=function(n){return t(n).forEach(function(r){r.classList.remove("tcon-transform")}),r},r.toggle=function(n){return t(n).forEach(function(n){r[n.classList.contains("tcon-transform")?"revert":"transform"](n)}),r},r});
let tcons = Array.from(document.querySelectorAll(".tcon"))
let formicon = transformicons.add(tcons[0])
let gridicon = transformicons.add(tcons[1])

//side-nav-btn color changing script
let offsetTopPos = document.querySelector('.slant-about-prior').offsetTop

window.addEventListener('scroll', checkPosition)

function checkPosition() {
    let curPos = window.scrollY
    if (curPos < offsetTopPos - 40) {
        document.querySelector('.side-nav-btn').style.background = 'transparent'
    } else {
        document.querySelector('.side-nav-btn').style.background = 'var(--main-color)'
        document.querySelector('.side-nav-btn').style.borderRadius = '15%'
    }
}
checkPosition()

//collapse side-nav on click
let sideNav = document.querySelector('.side-nav')

sideNav.addEventListener('click', () => {
    $('.collapse').collapse('hide')
    formicon.revert('.tcon-menu--xbutterfly')
})

// pause and play skills carousel
function caroPause(pause) {
    let btn = document.querySelector('.play-pause-btn')
    if (pause) {
        $('.carousel').carousel('pause')
        btn.innerHTML = `<button onclick="caroPause(false)" class="btn btn-dark">play</button>`
    } else {
        $('.carousel').carousel()
        btn.innerHTML = `<button onclick="caroPause(true)" class="btn btn-outline-dark">pause</button>`
    }

}


// SKILLS
    //skillToggler
    let skillToggle = 0

// skills templates
let carouselTemplate = `
<div class="carousel carousel-fade" data-ride="carousel" data-interval="500">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="w-100 d-flex justify-content-center align-items-center">
                <img class="skill-img-caro" src="assets/images/skills/vue.png" alt="vue">
            </div>
        </div>
        <div class="carousel-item">
            <div class="w-100 d-flex justify-content-center align-items-center">
                <img class="skill-img-caro" src="assets/images/skills/javascript.png" alt="javascript">
            </div>
        </div>
        <div class="carousel-item">
            <div class="w-100 d-flex justify-content-center align-items-center">
                <img class="skill-img-caro" src="assets/images/skills/node-js.png" alt="nodejs">
            </div>
        </div>
        <div class="carousel-item">
            <div class="w-100 d-flex justify-content-center align-items-center">
                <img class="skill-img-caro" src="assets/images/skills/mongo-db.png" alt="mongo-db">
            </div>
        </div>
        <div class="carousel-item">
            <div class="w-100 d-flex justify-content-center align-items-center">
                <img class="skill-img-caro" src="assets/images/skills/html5.png" alt="html5">
            </div>
        </div>
        <div class="carousel-item">
            <div class="w-100 d-flex justify-content-center align-items-center">
                <img class="skill-img-caro" src="assets/images/skills/css3.png" alt="css3">
            </div>
        </div>
        <div class="carousel-item">
            <div class="w-100 d-flex justify-content-center align-items-center">
                <img class="skill-img-caro" src="assets/images/skills/bootstrap4.png" alt="bootstrap">
            </div>
        </div>
        <div class="carousel-item">
            <div class="w-100 d-flex justify-content-center align-items-center">
                <img class="skill-img-caro" src="assets/images/skills/csharp.png" alt="csharp">
            </div>
        </div>
        <div class="carousel-item">
            <div class="w-100 d-flex justify-content-center align-items-center">
                <img class="skill-img-caro" src="assets/images/skills/my-sql.png" alt="mysql">
            </div>
        </div>
        <div class="carousel-item">
            <div class="w-100 d-flex justify-content-center align-items-center">
                <img class="skill-img-caro" src="assets/images/skills/unity.png" alt="unity">
            </div>
        </div>
    </div>
</div>
<div class="w-100 mt-4 d-flex play-pause-btn justify-content-center">
    <button onclick="caroPause(true)" class="btn pill btn-outline-dark">pause</button>
</div>
`

let gridTemplate = `
<div class="row">
    <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center p-1">
        <img src="assets/images/skills/vue.png" alt="vue" class="skill-img-grid">
        <h6>Vue</h6>
    </div>
    <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center p-1">
        <img src="assets/images/skills/javascript.png" alt="javascript" class="skill-img-grid">
        <h6>Javascript</h6>
    </div>
    <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center p-1">
        <img src="assets/images/skills/node-js.png" alt="nodejs" class="skill-img-grid">
        <h6>Node.js</h6>
    </div>
    <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center p-1">
        <img src="assets/images/skills/mongo-db.png" alt="mongodb" class="skill-img-grid">
        <h6>MongoDB</h6>
    </div>
    <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center p-1">
        <img src="assets/images/skills/html5.png" alt="html5" class="skill-img-grid">
        <h6>HTML5</h6>
    </div>
    <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center p-1">
        <img src="assets/images/skills/css3.png" alt="css3" class="skill-img-grid">
        <h6>CSS3</h6>
    </div>
    <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center p-1">
        <img src="assets/images/skills/bootstrap4.png" alt="bootstrap4" class="skill-img-grid">
        <h6>Bootstrap 4</h6>
    </div>
    <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center p-1">
        <img src="assets/images/skills/csharp.png" alt="csharp" class="skill-img-grid">
        <h6>c#</h6>
    </div>
    <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center p-1">
        <img src="assets/images/skills/my-sql.png" alt="mySql" class="skill-img-grid">
        <h6>mySQL</h6>
    </div>
    <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center p-1">
        <img src="assets/images/skills/unity.png" alt="unity" class="skill-img-grid">
        <h6>Unity</h6>
    </div>
</div>
`

function skillsDisplay() {
    let dropZone = document.querySelector(".skills-display")
    if (skillToggle % 2) {
        dropZone.innerHTML = gridTemplate
    } else {
        dropZone.innerHTML = carouselTemplate
        $('.carousel').carousel()
    }
}

document.querySelector(".skills-display").innerHTML = carouselTemplate