# TechNova

TechNova is a single-page website for a technology company that specializes in building websites, mobile applications, data analysis solutions, and smart solutions. The website is fully responsive, animated, and user-friendly.

## Table of Contents

1. Pages & Sections

1. Features

1. JavaScript Functionality

1. Libraries Used

1. Installation & Usage

1. Screenshots

## Pages & Sections

The website has one main page (Home) with multiple sections:

* Home

* About Us

* What We Offer

* Cases / How We Do Things

* Pricing / Tell Us About Your Project

* Contact Us

## Features

* Fully responsive design (works on all screen sizes)

* Smooth animations for slides, icons, and menu interactions

* Dynamic navbar color changes depending on the section

* Animated pricing and feature sections

* Hidden menu with dynamic content updates

## JavaScript Functionality

Here’s a breakdown of the main JS functions used in the project:

1. Loader & Content Display

`setTimeout(hiding_loader_displaying_content, 7000);
function hiding_loader_displaying_content(){
    $(".loader_background").css({display: "none"});
    $(".content").animate({opacity: "1"}, 2000);
};`


* Shows a loading screen for 7 seconds, then fades in the website content.
2. Slide Height & Scrolling

`$(".slides_container").css("height", window.innerHeight+"px");`


* Sets each slide to full viewport height.

* Clicking slide indicators smoothly scrolls to the corresponding section.

3. Dynamic Feature Icons (Third Slide)

* Arrays `icons_shape_arr` & `icons_name_arr` define the icons and labels.

* `AddingIcons_Buttons()` & `adding_oneICON()` populate icons dynamically depending on screen size.

* Animations bring icons into view from different positions (top, bottom, left, right).

4. Animate Icons on Scroll

* `third_slide_animate_iconCovers()` triggers icon animations when the user scrolls to the third slide.

* `animate_iconCovers()` randomly animates icons into place.

5. Navbar Color Change

`Change_Navbar_color(scroll_top, slides_height);`


* Changes navbar and menu colors dynamically depending on which section is visible.

6. Mobile Slider (Fourth Slide)

* Sets widths for slides and left positions.

* Allows sliding through mobile projects with indicators (`slider_movement()` function).

7. Pricing Animation (Fifth Slide)

`price_products_backColor()` cycles through pricing blocks, highlighting them sequentially.

8. Hidden Menu Functionality

* Opens hidden menu on navbar click (`open_hiddenMenu_changing_content()`).

* Updates menu content dynamically (`changing_hiddenMenu_content()`).

* Closes hidden menu on clicking the close button.

## Libraries Used

* Bootstrap
 – layout and responsive design

* Font Awesome
 – icons

* jQuery
 – DOM manipulation and animations

## Installation & Usage

1. Clone the repository:

git clone <https://github.com/MElsayed3/TechNova.git>


2. Open `index.html` in a browser.

3. Ensure the `js` folder and libraries are included for full functionality.

## Screenshots
### Home Section
![Home Screenshot](screenshots/home.jpg)

### About Us Section
![Home Screenshot](screenshots/about.jpg)

### What We Offer Section
![Home Screenshot](screenshots/whatweoffer.jpg)

### Cases / How We Do Things Section
![Home Screenshot](screenshots/cases.jpg)

### Pricing Section
![Home Screenshot](screenshots/pricing.jpg)

### Contact Us Section
![Home Screenshot](screenshots/contact.jpg)