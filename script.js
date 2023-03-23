const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-items').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Speakers JS

const button = document.querySelector('.btn0');

const cards = [
  {
    image: './image/image-1.png',
    speaker: 'Mahatma Gandhi',
    role: 'A Kickoff Champion',
    description:
      'Every good event deserves a good kickoff - and what better way to start things off on the right foot than with an amazing kickoff speaker.',
  },
  {
    image: './image/image-2.png',
    speaker: 'Martin Luther King',
    role: ' A Community Crusader ',
    description:
      'Every good event deserves a good kickoff - and what better way to start things off on the right foot than with an amazing kickoff speaker.',
  },
  {
    image: './image/image-3.png',
    speaker: 'Malcolm X.',
    role: 'A Motivation Master',
    description:
      'Every good event deserves a good kickoff - and what better way to start things off on the right foot than with an amazing kickoff speaker.',
  },
  {
    image: './image/image-4.png',
    speaker: 'Nelson Mandela.',
    role: 'An Industry Expert',
    description:
      'Every good event deserves a good kickoff - and what better way to start things off on the right foot than with an amazing kickoff speaker.',
  },
  {
    image: './image/image-5.png',
    speaker: ' E.P. Thompson',
    role: 'A Killer Keynote',
    description:
      'Every good event deserves a good kickoff - and what better way to start things off on the right foot than with an amazing kickoff speaker.',
  },
  {
    image: './image/image-6.png',
    speaker: 'Ai Weiwei',
    role: 'make an amazing impression',
    description:
      'Golda Onyia is a Business Development Associate from Amokwe Udi near Enugu.  She has been with Solar Sister since 2021.',
  },
];

button.addEventListener('click', () => {});

const speak = document.querySelector('#speak');
for (let i = 0; i < cards.length; i += 1) {
  speak.innerHTML += `
   <div class="spk-talk">
      <div class="spk-img">
          <img src="${cards[i].image}" alt="">
      </div>
      <div class="spk1">
          <h3>${cards[i].speaker}</h3>
          <hr class="spk0">
          <span class="spk-p">${cards[i].role}</span>
          <p>
              ${cards[i].description}
          </p>
      </div>
   </div>
  `;
}
