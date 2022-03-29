function onClick(element) {
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
