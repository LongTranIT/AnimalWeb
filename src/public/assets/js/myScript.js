function openDivImage(element) {
    fullUrl = element.style.backgroundImage;
    firstIndexUrl = fullUrl.indexOf('"');
    lastIndexUrl = fullUrl.lastIndexOf('"');
    srcUrl = fullUrl.substring(firstIndexUrl + 1, lastIndexUrl);
    console.log(srcUrl);
    document.getElementById("img01").src = srcUrl;
    document.getElementById("modal01").style.display = "block";
}
function openImgImage(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}
function myFunction() {
    let img = document.querySelector("#body-info .body-info-container__img");
    let subImg = document.querySelector("#body-info .body-info-container__sub");
    let locationBtn = document.querySelector(
        "#body-info .body-info-container__location--item.location-btn"
    );
    let imgBtn = document.querySelector(
        "#body-info .body-info-container__location--item.img-btn"
    );
    let toggleImg = document.querySelector("#body-info .body-info-container__toggle--img");
    // img.classList.toggle("display-none");
    // subImg.classList.toggle("display-none");
    imgBtn.classList.toggle("display-none");
    locationBtn.classList.toggle("display-none");
    toggleImg.classList.toggle("map");
}

var pageLinks = document.querySelectorAll('.page-link');
href = window.location.href;
beginQuery = href.indexOf('?');
if (beginQuery !== -1) {
    queryParams = href.substring(beginQuery);
    pageLinks.forEach(link => {
        link.href = link.href + queryParams;
    });
}
