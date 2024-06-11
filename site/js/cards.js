// Dados dos cards
const cardsData = Array.from({ length: 83 }, (_, i) => i + 1);

// Função para criar os cards
function createCards() {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";
  cardsData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerText = card;
    cardElement.addEventListener("click", () => {
      window.location.href = loja / `${card}`.html;
    });
    container.appendChild(cardElement);
  });
}

createCards();
