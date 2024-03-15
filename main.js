const register = document.querySelector('.register');
const closeRegister = document.querySelector('.register-x');
const registerBtn = document.querySelector('.get-Started');
const login = document.querySelector('.login');
const loginBtn = document.querySelector('.login-btn');
const registerLink = document.querySelector('.register-btn');
const closeLogin = document.querySelector('.login-x');
const layer = document.querySelector('.overlay');
const getLocation = document.querySelector('.getGeoLocation');
const displayLocation = document.querySelector('gotLocate');

getLocation.addEventListener('click', () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude } = position.coords;
            displayLocation.textContent = `Longitude ${longitude} & Latitude ${latitude}`; 
            console.log(position);

        },
        (err) => {
            displayLocation.textContent = err.message;
            console.log(err.message);
        });
    }
})

registerBtn.addEventListener('click', () => {
    register.classList.add('showRegister');
    register.style.display = 'block';
    layer.style.display = 'block';
});
closeRegister.addEventListener('click', () => {
    register.classList.remove('showRegister');
    closeRegister.style.cursor = 'pointer';
    layer.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
    register.style.display = 'none';
    login.classList.add('showLogin');
    login.style.display = 'block';
})
registerLink.addEventListener('click', () => {
    login.style.display = 'none';
    register.style.display = 'block';
})
closeLogin.addEventListener('click', () => {
    login.classList.remove('showLogin');
    layer.style.display = 'none';

})


