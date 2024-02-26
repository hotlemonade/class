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




