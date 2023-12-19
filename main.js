const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");



//Calculate BMI
const calculateForm = document.getElementById("calculate-form");
      calculateCm = document.getElementById("calculate-cm");
      calculateKg = document.getElementById("calculate-kg");
      calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
    e.preventDefault()

    // Check if the field have a value
    if(calculateCm.value === '' || calculateKg.value ===''){
        // Add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        //Show Message
        calculateMessage.textContent = 'Fill in the Heigt and Weight 🧑‍💻'

        //Remove the message in 3 sec
        setTimeout(() =>{
            // This message will be shown when it takes 3 sec 'blank'
            calculateMessage.textContent = ''
        }, 3000)
    } else{
        // BMI FORMULA
        // < 18.5 under, 18.5 - 24.9 healthy, 25- 29 over, 30-39.9 obese, 40+ extremely obese
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm))
        
        // Health status
        if (bmi < 18.5){
            //Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 🥺`
        } else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`
        } else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😭`
        }


        //Clearing input field
        calculateCm.value = ''
        calculateKg.value = ''
        //Remove message 4 seconds
        setTimeout(() => {
            calculateMessage.textContent =''
        }, 4000)
    
    }
}

calculateForm.addEventListener('submit', calculateBmi)


//scoll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, the scroll up will appear 
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);


//when the user click the "i" the links will open
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    //if ther user click the "i" it will change to "x" icon
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line": "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});



function redirectToContactPage() {
    // Replace 'contact.html' with the actual path to your contact page
    window.location.href = 'contact.html';
}

// Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`,

    }, {duration: 500, fill: "forwards"})
})



//the image will appear from bottom its like respawning from below
const scrollRevealOption = {
    distance: "100px",
    origin: "top",
    duration: 1250,
};

//header container

ScrollReveal().reveal(".nav-logo", {
    ...scrollRevealOption,
    delay: 400,
    origin: "left",
});

ScrollReveal().reveal(".link", {
    ...scrollRevealOption,
    delay: 900,
    origin: "top",
    interval: 100,
});


ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    delay: 1900 ,
});

ScrollReveal().reveal(".header-content h4, .header-content .section-header", {
    ...scrollRevealOption,
    delay: 2400,
    origin: "bottom"
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 2900,
    origin: "left"
});

ScrollReveal().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 3400,
    origin: "right"
});

//about container
ScrollReveal().reveal(".about-image img", {
    ...scrollRevealOption,
    origin: "left",
})

ScrollReveal().reveal(".about-content .section-header ", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
})

ScrollReveal().reveal(".about-content .section-description ", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1000,
})

ScrollReveal().reveal(".about-card ", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1500,
    interval: "400",
})

//Price Container

ScrollReveal().reveal(".price-container h2",{
    ...scrollRevealOption,
    delay: 500,
    origin: "top",
})

ScrollReveal().reveal(".price-container .section-description ",{
    ...scrollRevealOption,
    delay: 1000,
    origin: "left",
})


ScrollReveal().reveal(".price-card",{
    ...scrollRevealOption,
    interval: 500,
    delay: 1500,
    origin: "bottom",
})

//Our Class
ScrollReveal().reveal(".class-card",{
    ...scrollRevealOption,
    interval: 400 ,
    origin: "left",
    delay: 1500,
})

ScrollReveal().reveal(".class-container h4, .class-container .section-header", {
    ...scrollRevealOption,
    delay: 1000,
    origin: "bottom",
});

ScrollReveal().reveal(".class-container p", {
    ...scrollRevealOption,
    delay: 1250,
    origin: "right",
});

//Our Trainers
ScrollReveal().reveal(".trainer-container h2", {
    ...scrollRevealOption,
    delay: 500,
    origin: "bottom",
});

ScrollReveal().reveal(".trainer-container p ", {
    ...scrollRevealOption,
    delay: 1000,
    origin: "left",
});

ScrollReveal().reveal(".trainer-card ", {
    ...scrollRevealOption,
    delay: 1500,
    origin: "right",
    interval: 400,
});

// About Us

ScrollReveal().reveal(".client-container h2", {
    ...scrollRevealOption,
    delay: 500,
    origin: "top",
});

ScrollReveal().reveal(".client-container .section-description", {
    ...scrollRevealOption,
    delay: 1000,
    origin: "left",
});



//BMI

ScrollReveal().reveal(".calculate-img", {
    ...scrollRevealOption,
    delay: 500,
    origin: "right",
    
});

ScrollReveal().reveal(".section-titles", {
    ...scrollRevealOption,
    delay: 1000,
    origin: "top",
    
});

ScrollReveal().reveal(".calculate-description", {
    ...scrollRevealOption,
    delay: 1500,
    origin: "bottom",
    
});

ScrollReveal().reveal(".calculate-box, .button-flex", {
    ...scrollRevealOption,
    delay: 2000,
    origin: "left",
    interval: 400,
});

//Footer
ScrollReveal().reveal(".footer-col ", {
    ...scrollRevealOption,
    delay: 1000,
    origin: "right",
    interval: 400,
});


ScrollReveal().reveal(".footer-socials a ", {
    ...scrollRevealOption,
    delay: 2500,
    origin: "top",
    interval: 400,
});



const swiper = new Swiper(".swiper", {
    loop:true,
    slidesPerView: "auto",
    // between each card
    spaceBetween:10,
})