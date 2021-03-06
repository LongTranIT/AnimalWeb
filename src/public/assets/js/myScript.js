function openDivImage(element) {
    fullUrl = element.style.backgroundImage;
    firstIndexUrl = fullUrl.indexOf('"');
    lastIndexUrl = fullUrl.lastIndexOf('"');
    srcUrl = fullUrl.substring(firstIndexUrl + 1, lastIndexUrl);
    document.getElementById("img01").src = srcUrl;
    document.getElementById("modal01").style.display = "block";
}
function openImgImage(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
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

//Active navbar base url
setNavigation();

function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".header-right a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length-1) === href.substring(0,href.length-1)) {
            $(this).addClass('active');
        }
    });
};