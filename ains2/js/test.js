function bannerMain(){
    let images = ["img/banner-bg1.jpeg", "img/banner-bg2.jpeg", "img/banner-bg3.jpeg"];
    let currentImage = 0;
    let backgroundDiv = document.querySelector(".banner-bg");

    let btns = documentQuerySelectorAll('.btn-box a');
    btns.forEach(e => {
        
    })

    // backgroundDiv.style.backgroundImage = 'url(' + images[currentImage] + ')';
    backgroundDiv.style.backgroundImage = `url(${images[currentImage]})`;

    setInterval( changeImage, 5000);








    setInterval(function() {
        backgroundDiv.style.backgroundImage = 'url(' + images[currentImage] + ')';
        currentImage = (currentImage + 1) % images.length;
    }, 5000); // 5초마다 이미지 변경

    document.querySelector('.nextBtn').addEventListener('click', function() {
        currentImage = (currentImage + 1) % images.length;
        backgroundDiv.style.backgroundImage = 'url(' + images[currentImage] + ')';
    });

    document.querySelector('.prevBtn').addEventListener('click', function() {
        currentImage = (currentImage - 1 + images.length) % images.length;
        backgroundDiv.style.backgroundImage = 'url(' + images[currentImage] + ')';
    });
}