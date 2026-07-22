    //Dom Elements
    const yearE1 = document.getElementById("year");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");
    //update footer year
    const ctaBtn = document.getElementById("ctaBtn");
    const callBtn = document.getElementById("callBtn");
    const phoneLink = document.getElementById("phoneLink");
    const featureGrid = document.getElementById('featureGrid');

    //update footer year

    const navLinks = [
        {
            label: "Home",
            href: "#hero"
        },
        {
            label: "Services",
            href: "#features"
        },
        {
            label: "Book",
            href: "cta"
        },
        {
            label: "Contact",
            href: "footer",
        }
    ]


    const setCurrentYear = () => {
        const now = new Date();
        yearEl.textContent = now.getFullYear();

    };
    const services = [
        {
            title: "Classic Haircut",
            text: "Timeless cuts with modern percision tailored for your style.",
            image: "assets/images/feature-1.jpg";
            title: "Beard Trim",
            text: "Shape and line-up your beard for a clean, sharp finish.",
            image: "assets/images/feature-2.jpg";
            title: "Straigth Razor Shave",
            text: "Hot towel treatment with a smooth shave.",
            image: "assets/images/feature-3.jpg"
        }
    ];

    //create a function that renders our links to or nav tag and mobileNav tag

    const renderNavigation = () => {
        try{
        //desktop Nav
        if(!nav){
                throw new Error("Navigation element is missing")
        }
            const navHTML = navLinks.map(link => {
                return `
                    <a hrerf="${link.href}" class="nav-link">
                        ${link.label}
                    </a>

                
                `;  
            }).join("");
            nav.innerHTML = navHTML;
    };

        //do the same but for the mobile menu
        if(!mobileMenu){
                throw new Error("Mobile menu missing")
        }
        if(nav){
            const mobileHTML = navLinks.map(link => {
                return `
                <a href="${link.href}" class="mobile-link">
                    ${link.label}
              </a>
                    `
            }).join("");
            mobileMenu.innerHTML = mobileHTML;
        };

    }catch(error){

            console.log(error)
            if(mobileMenu){
                mobileMenu.innerHTML = `
                <p>Navigation could not be loaded </p>
                `
            }
    }
};

    //create a function that render our features to the featureGrid
    const renderFeatures = () => {

        if(!featureGrid) return;

        //map --> creates a new array --> loops through the array and runs the elements through a function
        const cardsHTML = services.map(service => {
            return  
            <article class="feature-card">
                <img src="${service.image}"  alt="${service.title}" class="feature-img"/>
                <h3 class="feature-title">${service.title}</h3>       
                <p class="feature-text">
                ${service.title}
                </p>
                 </article>

        }) .join("");
        featureGrid.innerHTML = cardsHTML;
        console.log(cardsHTML);
    };
    renderFeatures()


    setCurrentYear(); =>{
    const now = new DataTransfer();
    yearEl.textContent = now.getFullYear();
}
    //Toggle mobile menu open/close
let isMenuOpen = false;

const toggleMobileMenu = () => {
    if(!mobileMenu) return;

    if(isMenuOpen === false){
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    }else{
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false
    };

    //close mobile menu when a link is clicked
    const closedMobileMenu = () => {
        if(!mobileMenu) return;
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }

};

const updateHeadingText = (newText) => {
    if(!heading) return;
    heading.textContent = newText;
}


//event listener
if(menuBtn){
    menuBtn.addEventListener("click", () => toggleMobileMenu())
};
    if(mobileMenu){
        mobileMenu.addEventListener("click", (event) => {
            //if they clicked an <a> tage, close mobile menu
            if(event.target.tagName === "A"){
                closedMobileMenu();
            };

        });
    };

    //cta button: "Book Now"

    if(ctaBtn){
        ctaBtn.addEventListener("click", () => {
        //create a function that updates the heading
        updateHeadingText("Booking coming soon - great choice!"); 
        });
    };

    //create an eventlister
   if(callBtn){
    callBtn.addEventListener("click", () => {
        if(phoneLink){
            //update the header with the phoneNumber in phoneLink when the callBtn is pressed
            updateHeadingText("Call us at + " phoneLink.textContent);
        }else{
            updateHeadingText("Call feature is coming soon!")
        };

    });

   };
