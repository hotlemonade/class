// btn 을 눌렀을때 opne class 가 붙고 다시 눌렀을때 class를 때줘라


 

function openMenu(){

    const ham = document.querySelector('.btn-ham');
    const modal = document.querySelector('.menu-modal')
    
    ham.addEventListener('click', (e) => {
        console.log(`e.target : ${e.target}`)
        console.log(`e.currentTarget : ${e.currentTarget}`)

        let target = e.currentTarget;
        target.classList.toggle('open');
        if(target.classList.contains('open')) {
            modal.classList.add('open')
        } else {
            modal.classList.remove('open')
        }
        
    })
 

}

openMenu()

// function banner(){

//     let images = ["img/banner-bg1.jpeg", "img/banner-bg2.jpeg", "img/banner-bg3.jpeg"]
//     let currentImage = 0;
//     let backgroundDiv = document.querySelector(".banner-bg")

//     backgroundDiv.style.backgroundImage = 'url(' + images[currentImage] + ')';

//     setInterval(function() {
//         backgroundDiv.style.backgroundImage = 'url(' + images[currentImage] + ')';
//         currentImage = (currentImage + 1) % images.length;
//     }, 5000); // 5초마다 이미지 변경

// }

// banner()

// function bannerNext(){
//     let images = ["img/banner-bg1.jpeg", "img/banner-bg2.jpeg", "img/banner-bg3.jpeg"]
//     let currentImage = 0;
//     let backgroundDiv = document.querySelector(".banner-bg")

//     document.querySelector('.nextBtn').addEventListener('click', function() {
//         backgroundDiv.style.backgroundImage = 'url(' + images[currentImage] + ')';
//         currentImage = (currentImage + 1) % images.length;
//     });
// }

// bannerNext()

let images = ["img/banner-bg1.jpeg", "img/banner-bg2.jpeg", "img/banner-bg3.jpeg"];
let currentImage = 0;
let backgroundDiv = document.querySelector(".banner-bg");

function bannerMain(){
    backgroundDiv.style.backgroundImage = 'url(' + images[currentImage] + ')';

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

bannerMain();



