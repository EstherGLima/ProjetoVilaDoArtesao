const cardsData = Array.from({ length: 83 }, (_, i) => i + 1);

const imageUrls = Array.from({ length: 83 }, (_, i) => `fotos/finalimage/Chale/${i + 1}.png`);

function createCards() {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";
  cardsData.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");


    const imgElement = document.createElement("img");
    imgElement.src = imageUrls[index % imageUrls.length];
    cardElement.appendChild(imgElement);

    cardElement.addEventListener("click", () => {
      window.location.href = `loja/${card}.html`;
    });

    container.appendChild(cardElement);
  });
}

createCards();
