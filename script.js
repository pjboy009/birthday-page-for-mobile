const memories = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1634535462955-91cf1a97122e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    date: "The Beginning",
    title: "The First Sparkle",
    note: "Every story has a first page. Ours began with a smile that lit up an entire room — yours. From that moment, the world felt softer, brighter, kinder."
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1541385496969-a3edfa5a94ed?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    date: "Golden Hour",
    title: "Sunset & Whispers",
    note: "We chased a sunset and the sky painted itself for you. I remember the way you laughed at something silly I said — that laugh is my favorite song."
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1699726256380-d1e393507b4b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    date: "Wanderlust",
    title: "Adventures with You",
    note: "Some places become unforgettable because of who you see them with. With you, every city is home and every road is the right one."
  },
  {
    id: "4",
    image: "https://images.pexels.com/photos/20183432/pexels-photo-20183432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    date: "Quiet Nights",
    title: "Silhouettes & Stars",
    note: "The world went silent and there was only us. Your hand in mine, the horizon endless. Some moments are too perfect for words — this was one."
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1634535462955-91cf1a97122e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    date: "Celebrations",
    title: "Cake & Confetti",
    note: "Every candle you blow out, I make the same wish — that the universe keeps being kind to you, just like you are kind to everyone around you."
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1541385496969-a3edfa5a94ed?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    date: "Little Things",
    title: "Coffee & Conversations",
    note: "Morning coffee, late-night talks, songs on repeat. The little things became the biggest things because they were all with you."
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1699726256380-d1e393507b4b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    date: "Forever",
    title: "Promises in Polaroids",
    note: "If I could freeze a moment forever, it would be this one. Your eyes, your smile, the warmth of being seen. Thank you for being you."
  },
  {
    id: "8",
    image: "https://images.pexels.com/photos/20183432/pexels-photo-20183432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    date: "Today",
    title: "Happy Birthday, Priyanka",
    note: "Today the stars align a little brighter — because you exist. Here's to you, to us, and to every beautiful moment still waiting to be lived."
  }
];

const screens = document.querySelectorAll(".screen");
const carousel = document.getElementById("memoryCarousel");
const flipCard = document.getElementById("flipCard");

function openScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => {
    openScreen(button.dataset.open);
  });
});

function buildGallery() {
  carousel.innerHTML = memories.map(memory => `
    <article class="polaroid-card" data-memory="${memory.id}">
      <div class="photo-frame">
        <img src="${memory.image}" alt="${memory.title}">
        <div class="photo-shade"></div>
        <span class="date-chip">${memory.date}</span>
      </div>
      <h3 class="caption-title">${memory.title}</h3>
      <p class="caption-hint">☝ tap to unfold</p>
    </article>
  `).join("");

  document.querySelectorAll(".polaroid-card").forEach(card => {
    card.addEventListener("click", () => {
      const memory = memories.find(item => item.id === card.dataset.memory);
      openMemory(memory);
    });
  });
}

function openMemory(memory) {
  document.getElementById("memoryDate").textContent = memory.date;
  document.getElementById("memoryTitle").textContent = memory.title;
  document.getElementById("memoryImage").src = memory.image;
  document.getElementById("frontCaption").textContent = memory.title;
  document.getElementById("backDate").textContent = memory.date;
  document.getElementById("memoryNote").textContent = memory.note;

  const index = memories.findIndex(item => item.id === memory.id) + 1;
  document.getElementById("memoryCounter").textContent = `A moment with you · ${index} of ${memories.length}`;

  flipCard.classList.remove("flipped");
  openScreen("memory");
}

flipCard.addEventListener("click", () => {
  flipCard.classList.toggle("flipped");
});

function createParticles() {
  const particleLayers = document.querySelectorAll(".particles");
  const symbols = ["♥", "✦", "★", "✧"];
  const colors = ["#D4AF37", "#E0BFB8", "#9E4770", "#F8F0E3"];

  particleLayers.forEach(layer => {
    layer.innerHTML = "";

    for (let i = 0; i < 14; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.textContent = symbols[i % symbols.length];

      const size = 14 + Math.random() * 18;
      const left = Math.random() * 100;
      const duration = 6 + Math.random() * 5;
      const delay = Math.random() * 6;
      const drift = (Math.random() - 0.5) * 80;

      particle.style.left = `${left}%`;
      particle.style.fontSize = `${size}px`;
      particle.style.color = colors[i % colors.length];
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.setProperty("--drift", `${drift}px`);

      layer.appendChild(particle);
    }
  });
}

buildGallery();
createParticles();
