// Initialize AOS library
AOS.init();

// Handle navbar scroll behavior
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > window.innerHeight / 2) {
        navbar.style.top = '-60px';
    } else {
        navbar.style.top = '0';
    }
});

// CAPTCHA functionality
const inputDisableEl = document.querySelector(".disable");
const inputEnableEl = document.querySelector(".captcha");
const btnRefereshEl = document.querySelector(".btn-icon");
const messagEl = document.querySelector(".message");
const btnSubmit = document.querySelector(".btn-submit");
const captchaImageEl = document.getElementById("captchaImage");

let captchaTxt = null;

// Generate a random string for CAPTCHA
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Generate CAPTCHA image
function generateCaptcha() {
    captchaTxt = generateRandomString(4);
    captchaImageEl.src = `https://api.codebazan.ir/captcha/?font=1&bg=1&textcolor=1&text=${captchaTxt}`;
}

// Handle CAPTCHA submission
function submitBtn() {
    messagEl.classList.add("active");
    if (inputEnableEl.value === captchaTxt) {
        messagEl.innerHTML = "You've Entered Correct Captcha.......";
        messagEl.style.color = "#28b463";
    } else {
        messagEl.innerHTML = "You've Entered Invalid Captcha.......";
        messagEl.style.color = "#C70039";
    }
}

// Refresh CAPTCHA
function refreshCaptcha() {
    generateCaptcha();
    inputEnableEl.value = "";
    messagEl.classList.remove("active");
}

// Event listeners
btnRefereshEl.addEventListener("click", refreshCaptcha);
btnSubmit.addEventListener("click", submitBtn);
generateCaptcha();