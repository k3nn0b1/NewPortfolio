document.addEventListener("DOMContentLoaded", function () {
  const text = "< FrontEnd Developer />";
  const typewriter = document.getElementById("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      typewriter.style.width = `${index -3}ch`;
      typewriter.textContent += text.charAt(index);
      index++;
      setTimeout(type, 80);
    } else {
      setTimeout(() => {
        index = 0;
        typewriter.textContent = ""; 
        type();
      }, 3000);
    }
  }

  type();
});

document.addEventListener('DOMContentLoaded', function() {
  const carouselList = document.querySelector('#carouselList');
  const cards = Array.from(document.querySelectorAll('.cards'));
  
  cards.forEach(card => {
      const clone = card.cloneNode(true);
      carouselList.appendChild(clone);
  });
});


