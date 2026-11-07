const events = [
  {id:'cafe-bengaluru',name:'Cafe Bengaluru',category:'food',categoryLabel:'Food & drink',date:'2026-11-21',time:'5:30 PM – 9:00 PM',venue:'Cafe Bengaluru, Saheed Nagar',location:'Bhubaneswar',price:'₹899',imageUrl:'https://lh3.googleusercontent.com/pRY820SqVjkrNiKVqHRpAX5Q-IkBaUilzabm9ajmFJeVAx2TJCcD_MpCITTYnTBCtXVRelRfcFXu85mXS4PhiRaWxQlFKOrSfleUdcWK=w1600-rw',alt:'Cafe Bengaluru in Saheed Nagar, Bhubaneswar',description:'A sample evening gathering at Cafe Bengaluru in Saheed Nagar, Bhubaneswar.',specialty:'South Indian favorites including dosa, idli, and filter coffee.',ambience:'A relaxed neighborhood restaurant for coffee, casual meals, and catching up.'},
  {id:'yeti-himalayan-kitchen',name:'Yeti – The Himalayan Kitchen',category:'food',categoryLabel:'Food & drink',date:'2026-11-23',time:'8:00 AM – 11:00 AM',venue:'Yeti – The Himalayan Kitchen, Jharpada',location:'Bhubaneswar',price:'₹499',imageUrl:'https://yetithehimalayankitchen.com/wp-content/uploads/2024/03/FINAL-YETI-HIGH-RES-RENDERS-1.webp',alt:'Yeti The Himalayan Kitchen official venue image',description:'A sample morning gathering at Yeti – The Himalayan Kitchen in Bhubaneswar.',specialty:'Momos, thukpa, and Nepalese, Tibetan, Bhutanese, and Northeastern dishes.',ambience:'Warm wood, greenery, woven lighting, and Himalayan-inspired decor.'},
  {id:'table-for-more',name:'Jugaad Jn',category:'food',categoryLabel:'Food & drink',date:'2026-11-29',time:'7:00 PM – 10:00 PM',venue:'Jugaad Jn, KIIT Road, Patia',location:'Bhubaneswar',price:'₹1,299',imageUrl:'https://jugaadjn.com/images/gallery/1.png',alt:'Jugaad Jn food and venue gallery photo',description:'A casual dinner gathering at Jugaad Jn. Come solo or bring someone — there is always room for one more around the table.',specialty:'Vegetarian comfort food, with dishes such as parathas, rice bowls, and chaat.',ambience:'Casual, colorful, and easygoing, with a friendly neighborhood feel.'},
  {id:'clay-and-chai',name:'Lola Cafe',category:'creative',categoryLabel:'Creative',date:'2026-12-06',time:'11:00 AM – 1:30 PM',venue:'Lola Cafe, Bomikhal',location:'Bhubaneswar',price:'₹749',imageUrl:'https://lolacafe.studio/assets/facade-wide.jpg',alt:'Lola Cafe facade in Bomikhal, Bhubaneswar',description:'A relaxed pottery workshop for first-timers and clay lovers, with endless chai at Lola Cafe in Bomikhal.',specialty:'Cafe favorites, baked treats, and coffee.',ambience:'A compact neighborhood cafe above the street, with a bright, contemporary feel.'},
  {id:'indie-in-the-park',name:'Three Chariots Coffee',category:'music',categoryLabel:'Music & live',date:'2026-12-12',time:'4:00 PM – 8:30 PM',venue:'Three Chariots Coffee, Kalinga Nagar',location:'Bhubaneswar',price:'₹599',imageUrl:'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600%2Ch_468/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/13/528c611d-683f-495b-8471-fa53f55721f1_image5bc94feaf531b44a98cfff8908ac536cb.PNG',alt:'Three Chariots Coffee interior in Kalinga Nagar, Bhubaneswar',description:'Bring a friend and enjoy local indie sounds for an easygoing evening at this Kalinga Nagar coffee house.',specialty:'Artisanal coffee, continental plates, and desserts.',ambience:'Bright and calm, with books, greenery, and a laptop-friendly seating area.'},
  {id:'flowers-and-friends',name:'Bocca Cafe',category:'creative',categoryLabel:'Creative',date:'2026-12-19',time:'10:30 AM – 12:30 PM',venue:'Bocca Cafe, Master Canteen',location:'Bhubaneswar',price:'₹899',imageUrl:'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_468/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/5/8/eb1e97eb-f354-4551-831c-c3f09e4405e3_AF1QipOdhdZBl4THnkbmxTo6pKLGp53hYNFHXPEQyzDs680w680h510eda2db60265d466f9f3bd2128f0ab1fb.JPG',alt:'Bocca Cafe interior at Master Canteen, Bhubaneswar',description:'Learn seasonal flower arranging, meet lovely people, then take home a little piece of joy for your table.',specialty:'Coffee, cafe meals, and a varied all-day menu.',ambience:'A creative community cafe with a bookstore and coworking-friendly tables.'},
  {id:'coffee-and-conversations',name:'Kruti Coffee',category:'food',categoryLabel:'Food & drink',date:'2027-01-10',time:'9:00 AM – 11:00 AM',venue:'Kruti Coffee, IRC Village',location:'Bhubaneswar',price:'₹349',imageUrl:'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600%2Ch_468/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/7/24/d055b32b-2ec5-4ccb-a217-0c8297763865_image25c50bdd856c04ad88a8e06b5b86f750a.JPG',alt:'Kruti Coffee interior in IRC Village, Bhubaneswar',description:'Sample specialty roasts, meet a small group of curious strangers, and see where the conversation takes you.',specialty:'Specialty coffee, including carefully brewed single-origin options.',ambience:'A modern roastery cafe with warm wood, greenery, and a relaxed coffee-bar atmosphere.'},
  {id:'morning-by-the-water',name:'Cafe 16',category:'wellness',categoryLabel:'Wellness',date:'2027-01-17',time:'7:00 AM – 9:30 AM',venue:'Cafe 16, Satya Nagar',location:'Bhubaneswar',price:'₹299',imageUrl:'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600%2Ch_468/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/2/7343092e-3dea-4e84-a0d0-adf87a919105_image96cdbe3871afa4340a7e09612c9edd129.JPG',alt:'Cafe 16 reading nook in Satya Nagar, Bhubaneswar',description:'Ease into the weekend with a mindful moment, a relaxed cafe breakfast, and a good book in the cozy reading nook.',specialty:'Continental cafe food, desserts, and coffee.',ambience:'A homey cafe with a reading nook, greenery, and relaxed indoor and outdoor seating.'},
  {id:'stories-on-stage',name:'Mamma Mia Cafe',category:'creative',categoryLabel:'Creative',date:'2027-01-24',time:'6:00 PM – 8:30 PM',venue:'Mamma Mia Cafe, Mayfair Lagoon',location:'Jayadev Vihar, Bhubaneswar',price:'₹399',imageUrl:'https://img4.restaurantguru.com/w550/h367/rf80-design-Mamma-Mia-Cafe-2026-05-3.jpg',alt:'Mamma Mia Cafe interior at Mayfair Lagoon, Bhubaneswar',description:'An evening of true stories, told live and without a script. Come listen, laugh, and leave feeling more connected.',specialty:'Italian and Mexican cafe dishes, cakes, and bakery treats.',ambience:'A relaxed cafe and bakery in the Mayfair Lagoon complex.'}
];

const grid = document.querySelector('#event-grid');
const searchInput = document.querySelector('#event-search');
const filterButtons = [...document.querySelectorAll('.filter-chip')];
const countLabel = document.querySelector('#results-count');
const emptyState = document.querySelector('#empty-state');
const registerDialog = document.querySelector('#register-dialog');
const eventDialog = document.querySelector('#event-dialog');
let activeCategory = 'all';
let soonestFirst = true;

const dateBits = date => {
  const d = new Date(`${date}T12:00:00`);
  return {day: d.getDate(), month: d.toLocaleDateString('en-IN', {month:'short'}).toUpperCase(), full: d.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'})};
};
const photo = (event, width=800) => event.imageUrl || `https://images.unsplash.com/${event.image}?auto=format&fit=crop&w=${width}&q=85`;

function renderEvents() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = events.filter(event => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    const matchesQuery = `${event.name} ${event.categoryLabel} ${event.venue} ${event.location} ${event.description}`.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  }).sort((a,b) => (new Date(a.date) - new Date(b.date)) * (soonestFirst ? 1 : -1));

  countLabel.textContent = query || activeCategory !== 'all' ? `${filtered.length} ${filtered.length === 1 ? 'EVENT' : 'EVENTS'} TO EXPLORE` : 'A FEW THINGS WE THINK YOU’LL LOVE';
  emptyState.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(event => {
    return `<article class="event-card" tabindex="0" role="button" aria-label="Book ${event.name}" data-event="${event.id}">
      <div class="card-image"><img src="${photo(event,720)}" alt="${event.alt}" loading="lazy"><span class="card-category">${event.categoryLabel}</span><span class="card-book-now">Book now <span aria-hidden="true">↗</span></span></div>
      <div class="card-body"><h3>${event.name}</h3><p>${event.description}</p><div class="card-footer"><span><strong>${event.venue.split(',')[0]}</strong> · ${event.location.split(',')[0]}</span><span class="card-arrow" aria-hidden="true">↗</span></div></div>
    </article>`;
  }).join('');
}

function fillEventOptions(selectedId) {
  const select = document.querySelector('#selected-event');
  select.innerHTML = '<option value="">Choose your event</option>' + events.map(event => `<option value="${event.id}">${event.name} — ${dateBits(event.date).full}</option>`).join('');
  if (selectedId) select.value = selectedId;
}

function openEvent(id) {
  const event = events.find(item => item.id === id);
  if (!event) return;
  const date = dateBits(event.date);
  document.querySelector('#dialog-content').innerHTML = `<div class="dialog-hero"><img src="${photo(event,1200)}" alt="${event.alt}"></div><div class="dialog-body"><div class="eyebrow"><span class="eyebrow-line"></span> ${event.categoryLabel.toUpperCase()}</div><h2 id="dialog-title">${event.name}</h2><p class="dialog-description">${event.description}</p><div class="dialog-facts"><span><strong>WHEN</strong>${date.full}</span><span><strong>TIME</strong>${event.time}</span><span><strong>WHERE</strong>${event.venue}, ${event.location}</span><span><strong>YOUR SPOT</strong>${event.price}</span></div><section class="place-profile" aria-labelledby="place-heading"><div class="eyebrow"><span class="eyebrow-line"></span> GET TO KNOW THE PLACE</div><h3 id="place-heading">A little about <span>${event.venue.split(',')[0]}</span></h3><div class="place-profile-grid"><div><strong>THE SPECIALTY</strong><p>${event.specialty}</p></div><div><strong>THE AMBIENCE</strong><p>${event.ambience}</p></div></div></section><section class="place-reviews" aria-labelledby="reviews-heading"><div class="reviews-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> LOCAL REVIEWS</div><h3 id="reviews-heading">Reviews <span class="review-count" id="review-count"></span></h3></div><p class="review-average" id="review-average"></p></div><div class="review-list" id="review-list"></div><form class="place-review-form" id="place-review-form" data-place="${event.id}"><h4>Been here? Leave a review.</h4><p>Your review is saved only in this browser. Other visitors will not see it.</p><div class="review-form-row"><label for="review-rating">Your rating</label><select id="review-rating" name="rating" required><option value="">Choose stars</option><option value="5">★★★★★ — Loved it</option><option value="4">★★★★☆ — Really good</option><option value="3">★★★☆☆ — It was nice</option><option value="2">★★☆☆☆ — Could be better</option><option value="1">★☆☆☆☆ — Not for me</option></select></div><label for="review-name">Name <span>(optional)</span></label><input id="review-name" name="name" maxlength="40" placeholder="How should we show your name?"><label for="review-text">Your review</label><textarea id="review-text" name="review" rows="3" minlength="12" maxlength="500" placeholder="Share what you liked about the place..." required></textarea><div class="review-submit-row"><small>12–500 characters</small><button class="button button-dark" type="submit">Post review <span>↗</span></button></div><small class="review-status" id="review-status" aria-live="polite"></small></form></section><button class="button button-dark reserve-from-details" data-register="${event.id}">Save me a spot <span>↗</span></button></div>`;
  renderPlaceReviews(event.id);
  eventDialog.showModal();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function getPlaceReviews(placeId) {
  try {
    const saved = JSON.parse(localStorage.getItem('gatherPlaceReviews') || '{}');
    return Array.isArray(saved[placeId]) ? saved[placeId] : [];
  } catch {
    return [];
  }
}

function renderPlaceReviews(placeId) {
  const reviews = getPlaceReviews(placeId);
  const average = reviews.length ? reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0) / reviews.length : 0;
  document.querySelector('#review-count').textContent = `(${reviews.length})`;
  document.querySelector('#review-average').innerHTML = reviews.length ? `<strong>★ ${average.toFixed(1)}</strong><span> browser review${reviews.length === 1 ? '' : 's'}</span>` : '<span>Be the first to review</span>';
  document.querySelector('#review-list').innerHTML = reviews.length ? [...reviews].reverse().map(review => `<article class="guest-review"><div class="guest-review-top"><strong>${escapeHtml(review.name || 'A guest')}</strong><span class="guest-stars" aria-label="${Number(review.rating)} out of 5 stars">${'★'.repeat(Number(review.rating))}${'☆'.repeat(5 - Number(review.rating))}</span></div><p>${escapeHtml(review.review)}</p><small>${new Date(review.createdAt).toLocaleDateString()}</small></article>`).join('') : '<p class="no-reviews">No reviews saved in this browser yet. Add the first one.</p>';
}

function openRegistration(id) {
  fillEventOptions(id);
  document.querySelector('#registration-form').hidden = false;
  document.querySelector('#success-state').hidden = true;
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  document.querySelectorAll('#registration-form input, #registration-form select').forEach(el => el.removeAttribute('aria-invalid'));
  registerDialog.showModal();
}

grid.addEventListener('click', event => {
  const card = event.target.closest('[data-event]');
  if (card) openEvent(card.dataset.event);
});
grid.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-event]')) {
    event.preventDefault(); openEvent(event.target.dataset.event);
  }
});
searchInput.addEventListener('input', renderEvents);
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeCategory = button.dataset.category;
  filterButtons.forEach(item => item.classList.toggle('active', item === button));
  renderEvents();
}));
document.querySelector('#sort-button').addEventListener('click', event => {
  soonestFirst = !soonestFirst;
  event.currentTarget.innerHTML = `${soonestFirst ? 'Soonest first' : 'Latest first'} <span>⌄</span>`;
  renderEvents();
});
document.querySelector('#clear-filters').addEventListener('click', () => {
  searchInput.value = ''; activeCategory = 'all';
  filterButtons.forEach(button => button.classList.toggle('active', button.dataset.category === 'all'));
  renderEvents();
});
document.querySelector('#dialog-content').addEventListener('click', event => {
  const button = event.target.closest('[data-register]');
  if (button) { eventDialog.close(); openRegistration(button.dataset.register); }
});
document.querySelector('#dialog-content').addEventListener('submit', event => {
  const form = event.target.closest('#place-review-form');
  if (!form) return;
  event.preventDefault();
  if (!form.reportValidity()) return;
  const review = Object.fromEntries(new FormData(form));
  const reviews = getPlaceReviews(form.dataset.place);
  reviews.push({name:review.name.trim().slice(0,40),rating:Number(review.rating),review:review.review.trim().slice(0,500),createdAt:new Date().toISOString()});
  try {
    const allReviews = JSON.parse(localStorage.getItem('gatherPlaceReviews') || '{}');
    allReviews[form.dataset.place] = reviews;
    localStorage.setItem('gatherPlaceReviews', JSON.stringify(allReviews));
    renderPlaceReviews(form.dataset.place);
    form.reset();
    document.querySelector('#review-status').textContent = 'Your review is saved in this browser.';
  } catch {
    const status = document.querySelector('#review-status');
    status.textContent = 'This browser could not save your review. Check that local storage is enabled.';
  }
});
document.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
[eventDialog, registerDialog].forEach(dialog => dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
}));

const registrationForm = document.querySelector('#registration-form');
registrationForm.addEventListener('submit', event => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(registrationForm));
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!events.some(item => item.id === values.event)) errors.event = 'Please choose an event.';
  Object.entries(errors).forEach(([field, message]) => {
    const input = registrationForm.elements[field];
    input.setAttribute('aria-invalid', 'true');
    registrationForm.querySelector(`[data-error="${field}"]`).textContent = message;
  });
  if (Object.keys(errors).length) {
    registrationForm.querySelector('[aria-invalid="true"]').focus();
    return;
  }
  const existing = JSON.parse(localStorage.getItem('gatherRegistrations') || '[]');
  existing.push({...values, submittedAt: new Date().toISOString()});
  localStorage.setItem('gatherRegistrations', JSON.stringify(existing));
  registrationForm.hidden = true;
  document.querySelector('#success-state').hidden = false;
});
registrationForm.addEventListener('input', event => {
  if (event.target.hasAttribute('aria-invalid')) {
    event.target.removeAttribute('aria-invalid');
    const error = registrationForm.querySelector(`[data-error="${event.target.name}"]`);
    if (error) error.textContent = '';
  }
});
document.querySelector('#done-button').addEventListener('click', () => registerDialog.close());
document.querySelector('#newsletter-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.querySelector('#newsletter-email').value.trim();
  const subscribers = JSON.parse(localStorage.getItem('gatherSubscribers') || '[]');
  if (!subscribers.includes(email)) subscribers.push(email);
  localStorage.setItem('gatherSubscribers', JSON.stringify(subscribers));
  document.querySelector('#newsletter-status').textContent = 'You’re on the list. Keep an eye on your inbox!';
  event.currentTarget.reset();
});
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  document.querySelector('.main-nav').classList.toggle('open', open);
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded','false'); document.querySelector('.main-nav').classList.remove('open');
}));

renderEvents();
