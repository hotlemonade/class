
function loginCheck() {
    const id = document.querySelector('.input-id')
    const pw = document.querySelector('.input-pw')
    const login = document.querySelector('.login-btn')
    const wrap = document.querySelector('.login-wrap');
    
    const userId = 'dohs'
    const userPw = '1234a' 

    login.addEventListener('click', userCheck ) 
    
    function userCheck() {
        let result = userId === id.value && userPw === pw.value;
        result ? window.location.href = './index.html' : wrap.classList.add('err')
    }
}

loginCheck();


