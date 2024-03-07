// btn 을 눌렀을때 opne class 가 붙고 다시 눌렀을때 class를 때줘라


 

function openMenu(){

    const ham = document.querySelector('.btn-ham');
    const modal = document.querySelector('.menu-modal');
    let timerIn;
    let timerOut;
    
    ham.addEventListener('click', (e) => {
        console.log(`e.target : ${e.target}`)
        console.log(`e.currentTarget : ${e.currentTarget}`)

        let target = e.currentTarget;
        target.classList.toggle('open');
        if(target.classList.contains('open')) {
            modal.classList.add('open');
            // modal.style.opacity = 0.5;
            // clearInterval(timerOut);
            // timerIn = setInterval(fadeIn, 500);

        } else {
            modal.classList.remove('open');
            // clearInterval(timerIn);
            // timerOut = setInterval(fadeOut, 300);
        }
        
    })

    // opacity 0~1 <-> opacity 1 -> 0.9 -> 0.8 -> 0
 
    function fadeIn() {
        console.log('fadeIn')
    }
    function fadeOut() {
        console.log('fadeOut')
    }

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


function bannerMain(){
    let images = ["img/banner-bg1.jpeg", "img/banner-bg2.jpeg", "img/banner-bg3.jpeg"];
    let currentImage = 0;
    let backgroundDiv = document.querySelector(".banner-bg");

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

// bannerMain();
 

function bannerMain2(){
    const backgroundDiv = document.querySelector(".banner-bg"); 
    const box = document.querySelector('.btn-box')
    const btns = document.querySelectorAll('.btn-box a');
    let url = ''; 
    let crrIdx = 0; 
    const count = 3;
    btns.forEach(e => {
        e.addEventListener('click', (event) => {
            event.preventDefault();  
            if( e.dataset.page === 'next') {
                nextImage();
            } else if( e.dataset.page === 'prev') {
                prevImage();
            } else {
                return false;
            } 
        })
    })
    let timer = setInterval( nextImage, 5000);

    box.addEventListener('mouseenter', ()=> {
        clearInterval(timer);
        console.log('stop')
    })

    box.addEventListener('mouseleave', () => {
        timer = setInterval( nextImage, 5000);
        console.log('play')
    })
   
    function nextImage() {
        crrIdx = (crrIdx + 1) % count; 
        showImage();
    }
    function prevImage() {
        if(crrIdx === 0 ) {
            crrIdx = 2;
        } else {
            crrIdx = (crrIdx - 1) % count;
        } 
        showImage(); 
    }

    function showImage() {
        url =`url('./img/banner-bg${crrIdx}.jpeg')`;
        backgroundDiv.style.backgroundImage = url;
    } 
 
}

bannerMain2();

function landing(){

}



