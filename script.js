document.addEventListener("DOMContentLoaded", () => {
    const navlinks = document.querySelectorAll('header nav a');
    
    // Function to remove active class from all links
    const removeActiveClass = () => {
        navlinks.forEach(link => link.classList.remove('active'));
    };

    // Add event listener to each nav link
    navlinks.forEach(link => {
        link.addEventListener('click', function () {
            removeActiveClass(); // Remove active class from all links
            this.classList.add('active'); // Add active class to the clicked link
        });
    });

    // Resume Section
    const resumeBtns = document.querySelectorAll('.resume-btn');
    const resumeDetails = document.querySelectorAll('.resume-detail');

    // Remove default active class initially
    resumeBtns.forEach(btn => btn.classList.remove('active'));
    resumeDetails.forEach(detail => detail.classList.remove('active'));

    // Add active class to the first button and detail initially
    if (resumeBtns.length > 0) resumeBtns[0].classList.add('active');
    if (resumeDetails.length > 0) resumeDetails[0].classList.add('active');

    // Resume Button Click Event
    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            resumeBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');

            resumeDetails.forEach(detail => detail.classList.remove('active'));
            resumeDetails[idx].classList.add('active');
        });
    });

    // Portfolio Navigation
    const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
    const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    let index = 0;
    const maxIndex = portfolioDetails.length - 1;

    const activePortfolio = () => {
        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

        portfolioDetails.forEach(detail => detail.classList.remove('active'));
        portfolioDetails[index].classList.add('active');

        arrowLeft.classList.toggle('disabled', index === 0);
        arrowRight.classList.toggle('disabled', index === maxIndex);
    };

    arrowRight.addEventListener('click', () => {
        if (index < maxIndex) {
            index++;
            activePortfolio();
        }
    });

    arrowLeft.addEventListener('click', () => {
        if (index > 0) {
            index--;
            activePortfolio();
        }
    });

    // Initialize portfolio
    activePortfolio();
});


document.querySelector('a[href="#about"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});


// responsive

  const menuIcon = document.getElementById("menu-icon");
  const navList = document.querySelector(".navbar ul");

  menuIcon.addEventListener("click", () => {
    navList.classList.toggle("show");
  });

