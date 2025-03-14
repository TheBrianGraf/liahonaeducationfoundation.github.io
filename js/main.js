(function ($) {
	("use strict");

	// Spinner
	var spinner = function () {
		setTimeout(function () {
			if ($("#spinner").length > 0) {
				$("#spinner").removeClass("show");
			}
		}, 1);
	};
	spinner();

	// Initiate the wowjs
	new WOW().init();

	// Fixed Navbar
	$(window).scroll(function () {
		if ($(window).width() < 992) {
			if ($(this).scrollTop() > 45) {
				$(".fixed-top").addClass("bg-dark shadow");
			} else {
				$(".fixed-top").removeClass("bg-dark shadow");
			}
		} else {
			if ($(this).scrollTop() > 45) {
				$(".fixed-top").addClass("bg-dark shadow").css("top", -45);
			} else {
				$(".fixed-top").removeClass("bg-dark shadow").css("top", 0);
			}
		}
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$(".back-to-top").fadeIn("slow");
		} else {
			$(".back-to-top").fadeOut("slow");
		}
	});
	$(".back-to-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
		return false;
	});

	// Causes progress
	$(".causes-progress").waypoint(
		function () {
			$(".progress .progress-bar").each(function () {
				$(this).css("width", $(this).attr("aria-valuenow") + "%");
			});
		},
		{ offset: "80%" }
	);

	// Facts counter
	$('[data-toggle="counter-up"]').counterUp({
		delay: 5,
		time: 500,
	});

	// Testimonials carousel
	$(".testimonial-carousel").owlCarousel({
		autoplay: false,
		smartSpeed: 1000,
		center: true,
		dots: false,
		loop: true,
		nav: true,
		navText: [
			'<i class="bi bi-arrow-left"></i>',
			'<i class="bi bi-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
		},
	});
})(jQuery);

const testimonials = [
	{
		img: "img/testimonial-1.jpg",
		text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
		name: "Doner Name 1",
		profession: "Profession 1",
	},
	{
		img: "img/testimonial-2.jpg",
		text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
		name: "Doner Name 2",
		profession: "Profession 2",
	},
	{
		img: "img/testimonial-3.jpg",
		text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
		name: "Doner Name 3",
		profession: "Profession 3",
	},
];

const carouselContainer = document.getElementById("testimonial-carousel");

testimonials.forEach((testimonial) => {
	const testimonialItem = document.createElement("div");
	testimonialItem.classList.add("testimonial-item text-center");

	testimonialItem.innerHTML = `
                <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="${testimonial.img}" alt="${testimonial.name}" style="width: 100px; height: 100px"/>
                <div class="testimonial-text rounded text-center p-4">
                    <p>${testimonial.text}</p>
                    <h5 class="mb-1">${testimonial.name}</h5>
                    <span class="fst-italic">${testimonial.profession}</span>
                </div>
            `;

	carouselContainer.appendChild(testimonialItem);
});
