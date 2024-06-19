const ar = document.querySelectorAll('a[href^="#"]');
let packagesOpen = false;

for (let obj of ar) {
    obj.addEventListener('click', function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.getBoundingClientRect().top;
            const newPosition = window.pageYOffset + targetPosition - (window.innerHeight * 0.1);
            window.scrollTo({
                top: newPosition,
                behavior: 'smooth'
            });
        }
    })
}

function handleClickContactUs() {
    document.getElementById("click-contact-us").click();
}

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        for (let i of ar) i.style.color = 'black';
        navbar.style.position = 'fixed';
        navbar.style.left = 0;
        navbar.style.backgroundColor = 'white';
        navbar.style.animation = 'navbar-out 0.5s linear forwards';
    } else {
        for (let i of ar) i.style.color = 'white';
        navbar.style.position = 'relative';
        navbar.style.backgroundColor = 'transparent';
        navbar.style.animation = 'none';
    }
});

const viewMoreButton = document.querySelector('.view-more');
viewMoreButton.addEventListener('click', function () {
    packagesOpen = !packagesOpen;
    viewMoreButton.innerText = packagesOpen ? "VIEW LESS" : "VIEW MORE";
    document.getElementById("packages").style.height = packagesOpen ? "240vh" : "150vh";
});

function handleSubscribe() {
    const email = document.getElementById("subscribe-mail").value;
    fetch('/addSubscriber', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mail: email })
    })
}