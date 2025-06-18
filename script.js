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
  title: "A Viagem Que Sonhamos e Fizemos",
  text: "O tempo foi passando e colecionei momentos incríveis ao seu lado. Como a nossa primeira viagem de casal, à Chapada dos Veadeiros — um lugar mágico, cheio de trilhas, natureza e amor. E teve aquela noite especial… um jantar maravilhoso, clima perfeito. Sempre lembro disso com carinho.",
  question: "Onde foi o jantar incrível naquela noite especial?",
  answers: ["Na Mata Restaurante", "Luar da Vila", "Cantinho das Delícias", "Vendinha 1961"],
  correct: 3
},
{
  title: "O Jeito Mais Nosso de Ser",
  text: "Adoramos ficar deitados, no maior conforto e fofocando… nossa intimidade é única.",
  question: "O que mais gostamos de fazer juntos no dia a dia?",
  answers: ["Sair pra dançar", "Fazer trilha", "Fofocar e ficar deitados", "Estudar juntos"],
  correct: 2 
  },
{ 
  title: "Risos, Hamburguer e Liberdade",
  text: "Hambúrguer, passeios, compras… simples e perfeito com você.",
  question: "Qual desses programas é a nossa cara?",
  answers: ["Ir pra balada", "Comer hambúrguer e passear", "Ir ao teatro", "Maratonar séries de terror"],
  correct: 1 
},
{ 
  title: "Superando Juntos",
  text: "Faculdade, trabalho, correria… seguimos firmes, juntos, construindo o nosso futuro.",
  question: "Qual desafio enfrentamos juntos com força e amor?",
  answers: ["Ficar longe um do outro", "Concluir a escola", "Rotina de estudos e trabalho", "Enfrentar um intercâmbio"],
  correct: 2 
},
{
  title: "Nosso Lar dos Sonhos",
  text: "Casa com quintal, um golden retriever, e uma cozinha incrível pra suas receitas — e a geladeira dos seus sonhos.",
  question: "Como é o lar que sonhamos?",
  answers: ["Apartamento pequeno", "Casa com quintal e golden retriever", "Cobertura luxuosa", "Motorhome"],
  correct: 1 
},
{ 
  title: "Daqui a 10 Anos",
  text: "Te vejo: nutricionista, eu programador. Estáveis, felizes, com sonhos se realizando… nossa história continua!",
  question: "Como você imagina nosso futuro?",
  answers: ["Ricos e famosos", "Cuidando de um sítio", "Estáveis, com nossas carreiras e sonhos", "Morando fora do país"],
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