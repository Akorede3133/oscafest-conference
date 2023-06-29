const speakersContainer = document.querySelector('.featured--speakers--container');
const seeMoreBtn = document.querySelector('.see--more-btn');
const seeMoreBtnPara = document.querySelector('.see--more-btn p');
const hamburgerBtn = document.querySelector('.header--hamburger');
const navContainer = document.querySelector('.header--nav--container');
const headerLogo = document.querySelector('.header--logo');
const headerSocial = document.querySelector('.header--social');
const headerHeroSection = document.querySelector('.header--hero--section');
const closeIcon = document.querySelector('.nav--close--icon');
let seeMore = false;
let speakerToBeDisplayed = [];
const checkForWindowsWidth = () => window.innerWidth < 768;
const createSpeakerElements = () => {
  speakersContainer.innerHTML = '';
  const speakerElement = speakerToBeDisplayed.map((speaker) => {
    const card = `<article class="featured--speakers-card">
            <div class="speakers--img">
                <img src=images/${speaker.image} alt="">
            </div>
            <div class="speaker--description">
                <h4>${speaker.name}</h4>
                <h5>${speaker.job}</h5>
                <p>${speaker.desc}</p>
            </div>
        </article>`;
    return card;
  }).join('');
  speakersContainer.insertAdjacentHTML('beforeend', speakerElement);
};
const speakersDetails = [
  {
    name: 'yochai benkler',
    job: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'speaker_1.png',
  },
  {
    name: 'SohYeong Noh',
    job: 'Director of Art Centre Nabi and a board member of CC Korea',
    desc: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: 'speaker_2.png',
  },
  {
    name: 'Lila tretikov',
    job: 'Executive Director of the Wikimedia Foundation',
    desc: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    image: 'speaker_3.png',
  },
  {
    name: 'Kilnam Chon',
    job: 'British disability activist',
    desc: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    image: 'speaker_4.png',
  },
  {
    name: 'Julia Leda',
    job: 'President of Young Pirates of Europe',
    desc: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    image: 'speaker_5.png',
  },
  {
    name: 'Ryan Merkley',
    job: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    desc: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    image: 'speaker_6.png',
  },
];

window.addEventListener('resize', () => {
  speakerToBeDisplayed = checkForWindowsWidth() ? speakersDetails.slice(0, 2) : speakersDetails;
  createSpeakerElements();
});

seeMoreBtn.addEventListener('click', () => {
  seeMore = !seeMore;
  speakerToBeDisplayed = seeMore ? speakersDetails : speakersDetails.slice(0, 2);
  seeMoreBtnPara.textContent = seeMore ? 'less' : 'more';
  createSpeakerElements();
});
window.addEventListener('DOMContentLoaded', () => {
  speakerToBeDisplayed = checkForWindowsWidth() ? speakersDetails.slice(0, 2) : speakersDetails;
  createSpeakerElements();
});
hamburgerBtn.addEventListener('click', () => {
  navContainer.classList.add('show--header--nav--container');
  headerLogo.classList.add('blur--header--logo');
  headerSocial.classList.add('blur--header--social');
  hamburgerBtn.classList.add('blur--header--hamburger');
  headerHeroSection.classList.add('blur--header--hero--section');
});
closeIcon.addEventListener('click', () => {
  navContainer.classList.remove('show--header--nav--container');
  headerLogo.classList.remove('blur--header--logo');
  headerSocial.classList.remove('blur--header--social');
  hamburgerBtn.classList.remove('blur--header--hamburger');
  headerHeroSection.classList.remove('blur--header--hero--section')
})