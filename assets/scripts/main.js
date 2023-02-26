// API call to get background images for slider
fetch("api/getSliderImages")
  .then(response => response.json())
  .then(data => {
    // Dynamically set the background images for slider
    let sliderBackground = document.querySelector("#slider-background");
    let i = 0;
    setInterval(() => {
      sliderBackground.style.backgroundImage = `url(${data[i].imageUrl})`;
      i = (i + 1) % data.length;
    }, 5000);
  });

// API call to get logo
fetch("api/getLogo")
  .then(response => response.json())
  .then(data => {
    // Dynamically insert logo
    let logoContainer = document.querySelector("#logo-container");
    let logo = document.createElement("img");
    logo.src = data.logoUrl;
    logo.alt = "Company Logo";
    logoContainer.appendChild(logo);
  });
