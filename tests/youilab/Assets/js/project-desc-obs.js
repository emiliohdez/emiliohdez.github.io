const header = document.querySelector("header");
const sectionOne = document.querySelector(".section-1");
const faders = document.querySelectorAll(".fade-in");

const sectionOneOptions = {
	rootMargin: "-60% 0% 0% 0%"
};

const sectionOneObserver = new IntersectionObserver(function(
	entries,
	sectionOneObserver
) {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			header.classList.add("nav-changed");
			console.log(entry);
		} else {
			header.classList.remove("nav-changed");
		}
	});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);