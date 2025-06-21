const chapters = [
{
  title: "Quando Te Vi pela Primeira Vez",
  text: "Já havíamos nos visto antes, mas conversamos de fato no aniversário da Thauanny. Te achei uma gatinha, mas só tomei coragem de chegar depois... e você me deu um fora 😅",
  question: "Quando você me deu um fora?",
  answers: ["Após a festa da Thauanny", "Carnaval", "No jogo do Brasil", "Feriado de Páscoa"],
  correct: 1
},     
{
  title: "A Reaproximação e o Primeiro Beijo",
  text: "Depois daquele fora, ficamos um tempo sem nos falar. Mas um dia, você tomou a iniciativa de me chamar pra conversar — e isso mudou tudo. Marcamos de assistir um filme, e foi ali, no sofá, entre risadas e nervosismo, que rolou o nosso primeiro beijo. Um momento que ficou gravado no coração 💘",
  question: "Qual era o filme que estava passando quando nos beijamos pela primeira vez?",
  answers: ["A Barraca do Beijo", "Com Amor, Simon", "Para Todos os Garotos que Já Amei", "O Date Perfeito"],
  correct: 0
},  
{
  title: "O Pedido Improvisado",
  text: "Eu planejava pedir você em namoro no show da Pitty. Mas as coisas não saíram como o planejado, e o pedido aconteceu de uma maneira inusitada. Mesmo assim, aquele dia ficou marcado pra sempre.",
  question: "Como eu te pedi em namoro?",
  answers: ["WhatsApp", "No show da Pitty", "Twitter", "Pessoalmente"],
  correct: 2
},
{ 
  title: "O Nosso Começo Oficial", 
  text: "Sempre brincamos , por um tempo, dizendo que nós não sabiamos a data exata que começamos a namorar. e decidimos que seria no dia 24. Mas depois de relembrar, confirmar e revisar, ficou gravado na memória e no coração: o nosso dia especial!", 
  question: "Qual foi o dia que começamos a namorar oficialmente (Eu fui atrás e descobri o dia exato! kkkkk😅)?", 
  answers: ["27 de setembro", "18 de setembro", "24 de setembro", "25 de setembro"], 
  correct: 2 
},
{
  title: "A Viagem Que Sonhamos e Fizemos",
  text: "O tempo foi passando e colecionei momentos incríveis ao seu lado. Como a nossa primeira viagem de casal, à Chapada dos Veadeiros — um lugar mágico, cheio de trilhas, natureza e amor. E teve aquela noite especial… um jantar maravilhoso, clima perfeito. Sempre lembro disso com carinho.",
  question: "Onde foi o jantar incrível naquela noite especial?",
  answers: ["Na Mata Restaurante", "Luar da Vila", "Cantinho das Delícias", "Vendinha 1961"],
  correct: 3
},
{
  title: "O Nosso Jeito Único de Amar",
  text: "Com o tempo, fomos criando o nosso próprio jeitinho de viver a relação. Longe de redes sociais, sem precisar mostrar nada pra ninguém, só nós dois, no nosso cantinho, rindo das fofocas do dia, dividindo confidências e curtindo o simples prazer de estarmos juntos. 💕",
  question: "O que virou o nosso ritual preferido nesses anos todos?",
  answers: ["Postar momentos no Instagram", "Viajar o tempo todo", "Ficar deitados, conversando sobre tudo e rindo das nossas fofocas", "Sair com a galera toda semana"
  ],
  correct: 2
},
{
  title: "Os Nossos Programinhas Preferidos",
  text: "Viajar é maravilhoso, mas nem sempre dá. E aí, no dia a dia, o que a gente mais ama é sair pra comer aquele hambúrguer gostoso e depois andar pelo shopping, conversar à toa, olhar vitrines e rir de bobagens. É no simples que a gente constrói tanta memória boa. 🍔🛍️❤️",
  question: "Qual é o nosso programa mais frequente (e que nunca enjoamos)?",
  answers: ["Ir para baladas agitadas", "Comer hambúrguer e andar atoa no shopping", "Ir ao teatro todo mês", "Ficar só em casa maratonando séries de terror"],
  correct: 1
},
{
  title: "Nosso Agora: Amor na Rotina Corrida",
  text: "Hoje vivemos um desafio novo: você finalizando a faculdade, com TCC e estágios; eu começando a minha carreira, cheio de aprendizados e responsabilidades. Nem sempre temos tempo, mas mesmo na correria, seguimos juntos, apoiando um ao outro, firmes no nosso propósito. 💪❤️",
  question: "O que representa melhor o desafio dessa fase atual?",
  answers: ["Conseguir conciliar nossos sonhos em meio à rotina puxada", "Aprender a morar em cidades diferentes", "Superar as dificuldades financeiras da adolescência", "Nos adaptarmos a um intercâmbio distante"],
  correct: 0
},
{
  title: "Próximos Passos: O Ano Que Vem",
  text: "Depois de tantos desafios, o próximo ano promete ser especial: você com a faculdade concluída, eu com a carreira um pouco mais estabilizada, e finalmente teremos mais tempo para fazer o que amamos: viajar, conhecer lugares novos e colecionar ainda mais memórias incríveis juntos. 🌎✨",
  question: "Qual é um dos nossos principais planos para o próximo ano?",
  answers: ["Viajar o máximo que conseguirmos, incluindo nosso sonho de ir ao Chile", "Focar totalmente em novos cursos e estudos", "Fazer uma longa viagem de intercâmbio", "Morar um tempo fora do país" ],
  correct: 0
},
{
  title: "O Nosso Futuro: Construindo o Sonho",
  text: "Sonhamos com uma vida tranquila e feliz: nossa casa com um quintal enorme, um golden correndo pelo jardim, aquela cozinha incrível com a geladeira que você tanto quer, um carro confortável na garagem e, quem sabe, nossa pequena Elisa iluminando a casa. Casados, realizados e vivendo o que sempre sonhamos. ❤️",
  question: "Qual é a data que imaginamos para celebrar o nosso casamento?",
  answers: ["24/09/2027", "24/12/2027", "24/07/2027", "14/02/2027" ],
  correct: 2
}
];

let current = 0;
let correctAnswered = false;

function loadChapter() {
  const ch = chapters[current];
  const story = document.getElementById("story");
  story.classList.add("fade-out");

  setTimeout(() => {
    document.getElementById("chapter-title").textContent = ch.title;
    document.getElementById("chapter-text").textContent = ch.text;
    document.getElementById("question").textContent = ch.question;
    const ansDiv = document.getElementById("answers");
    ansDiv.innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("retry-btn").classList.add("hidden");
    correctAnswered = false;

    ch.answers.forEach((a, i) => {
      const b = document.createElement("button");
      b.className = "answer";
      b.textContent = a;
      b.onclick = () => checkAnswer(i);
      ansDiv.appendChild(b);
    });

    story.classList.remove("fade-out");
    story.classList.add("fade-in");
    setTimeout(() => story.classList.remove("fade-in"), 300);

  }, 300);
}

function checkAnswer(idx) {
  const ch = chapters[current];
  const buttons = document.querySelectorAll(".answer");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    btn.style.backgroundColor = (i === ch.correct) ? "#c8e6c9" : (i === idx ? "#ffcdd2" : "#f8bbd0");
  });

  if (idx === ch.correct) {
    correctAnswered = true;
    document.getElementById("next-btn").style.display = "block";
  } else {
    document.getElementById("retry-btn").classList.remove("hidden");
  }
}

function nextChapter() {
  if (!correctAnswered) return;
  current++;
  if (current < chapters.length) loadChapter();
  else showResult();
}

function retryChapter() {
  loadChapter(); // Recarrega o capítulo atual para nova tentativa
  document.getElementById("retry-btn").addEventListener("click", retryChapter);
}



function showResult() {
  document.getElementById("story").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  startConfetti();
  startHearts();
  typeMessage("Amor, você acertou tudo (como sempre 😍).\nE agora, chegou o momento de viver mais um capítulo dessa história linda.\nPrepare as malas, porque vamos para a Chapada dos Veadeiros!\nTe amo infinitamente ❤️");
}

function typeMessage(message) {
  let i = 0;
  function type() {
    if (i < message.length) {
      document.getElementById("typed-text").innerHTML += message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

function startHearts() {
  const hearts = document.getElementById("hearts");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    hearts.appendChild(heart);
    let pos = 100;
    const fall = setInterval(() => {
      pos--;
      heart.style.top = pos + "vh";
      if (pos <= 0) {
        clearInterval(fall);
        heart.remove();
      }
    }, 50);
  }, 300);
}

function startConfetti() {
  tsParticles.load("confetti-canvas", {
    particles: {
      number: { value: 100 },
      shape: { type: "circle" },
      color: { value: ["#ff4081", "#ffc107", "#03a9f4", "#4caf50"] },
      opacity: { value: 1 },
      size: { value: 5 },
      move: { enable: true, speed: 5, direction: "bottom" }
    }
  });
}

window.onload = loadChapter;