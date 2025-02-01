//////////////////////////////////////////////
//Set Current Year//
//To select a class in html & assign it to a VAR.
const yearEl = document.querySelector(".year");
//JS function to get present Date & to return only the present Year.
const currentYear = new Date().getFullYear();
//New Value assigned to year VAR to replace the existing content.(New text replacing Old text)
yearEl.textContent = currentYear;

//////////////////////////////////////////////
//Mobile Pg Navigation//

//Creating 2 VAR for the actions:
//1)VAR for button clicked on:
const btnNavEl = document.querySelector(".btn-mobile-nav");
//2)VAR for header element where c;ass will  be added or removed.
const headerEl = document.querySelector(".header");

//Creating click function to add/remove VAR
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////
//Smooth Scrolling Animation Behaviour Script//

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link){
  link.addEventListener("click", function (e){
    e.preventDefault();
    const href = link.getAttribute("href");
    //console.log(href);
         
    //Scroll back to top:
		//If href != #, then window must scroll to top
    if (href === "#"){
      window.scrollTo({
        top:0,
        behaviour: "smooth"});
    }

    //Scroll to other links:          
    if(href !== "#" && href.startsWith("#")){
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behaviour:"smooth"});
    }
          
		//Close mobile nav-bar when scrolling down to selected link
		//.contains ask the question if main-nav-link is inside the class list of the link we clicked on.
    if (link.classList.contains("main-nav-link")){
      headerEl.classList.toggle("nav-open");
    }
  });
});

/////////////////////////////////////////////////////////
//Sticky Navigation//

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function(entries) {
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false){
	    document.body.classList.add ("sticky");
	  }
	  if(ent.isIntersecting === true){
	    document.body.classList.remove ("sticky");
	  }
  },
  {
    //In the viewport
    root:null,
    threshold:0,  
    rootMargin:"-60px",
  }
);
obs.observe(sectionHeroEl);
