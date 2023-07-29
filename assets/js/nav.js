function openHamburger() {
    let hamburgerContainer = document.querySelector(".hamburger-container");
    let hamburgerIsOpen = hamburgerContainer.style.display === "flex";
  
    if (!hamburgerIsOpen) {
      hamburgerContainer.style.display = "flex";
    } else {
      hamburgerContainer.style.display = "none";
    }
  }