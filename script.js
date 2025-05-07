// Dados organizados por categoria
const flashcards = {
  MC: [
    { question: "1. O que é uma substância?", answer: "B) Uma matéria composta por um único tipo de componente." },
    { question: "2. Qual das alternativas é um exemplo de mistura homogênea?", answer: "B) Água e açúcar." },
    // ... restantes dos items da categoria MC
  ],
  TF: [
    { question: "1. A água pura é uma substância. (V/F)", answer: "Verdadeiro." },
    { question: "2. Misturas homogêneas permitem ver, a olho nu, os componentes separados. (V/F)", answer: "Falso." },
    // ... restantes dos items da categoria TF
  ],
  Disc: [
    { question: "1. Explique, com suas próprias palavras, a diferença entre uma substância e uma mistura.", answer: "Resposta esperada: Uma substância é composta por um único tipo de componente com propriedades definidas, enquanto uma mistura contém duas ou mais substâncias mantendo suas características individuais." },
    // ... restantes dos items da categoria Disc
  ]
};

// Função para carregar uma categoria de flashcards usando DocumentFragment
function loadCategory(cat) {
  // Atualiza os botões da navegação
  document.querySelectorAll(".nav button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`button[data-cat='${cat}']`).classList.add("active");
  
  const container = document.getElementById("cards");
  container.innerHTML = ""; // Limpa o container
  
  const fragment = document.createDocumentFragment();
  flashcards[cat].forEach(item => {
    // Cria o card e seus elementos internos
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-front">
          <div class="question">${item.question}</div>
        </div>
        <div class="card-face card-back">
          <div class="answer">${item.answer}</div>
        </div>
      </div>`;
    
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

// Delegação de eventos para flip dos cards
document.getElementById("cards").addEventListener("click", function (event) {
  const card = event.target.closest(".card");
  if (card) {
    card.classList.toggle("flip");
  }
});

// Delegação de eventos para alternar categorias
document.querySelector(".nav").addEventListener("click", function (event) {
  const btn = event.target.closest("button");
  if (btn) {
    const cat = btn.getAttribute("data-cat");
    loadCategory(cat);
  }
});

// Carrega a categoria padrão ao iniciar
loadCategory("MC");
