document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menuModal = document.getElementById('menu-modal');
  const closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', function () {
    menuModal.classList.toggle('modal-open');
  });
  closeMenu.addEventListener('click', function () {
    menuModal.classList.remove('modal-open');
  });

  window.toggleMenu = function (id) {
    const menuItem = document.getElementById(id);
    const arrow = document.getElementById('arrow-' + id);
    menuItem.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
  };
});

document.querySelectorAll('.dropdown').forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    dropdown.querySelector('.dropdown-content').classList.toggle('hidden');
    dropdown.querySelector('.itemText img').classList.toggle('rotate-180');
  });
});

function toggleMenu(id) {
  var item = document.getElementById(id);
  var arrow = document.getElementById('arrow-' + id);

  if (item.classList.contains('hidden')) {
    item.classList.remove('hidden');
    arrow.classList.add('rotate-180');
  } else {
    item.classList.add('hidden');
    arrow.classList.remove('rotate-180');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.community-cards-container');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');

  let scrollAmount = 0;

  function updateScrollStep() {
    const containerWidth = container.clientWidth * 1.05;
    return containerWidth;
  }

  nextBtn.addEventListener('click', function () {
    const scrollStep = updateScrollStep();
    scrollAmount += scrollStep;
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });

  prevBtn.addEventListener('click', function () {
    const scrollStep = updateScrollStep();
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });

  window.addEventListener('resize', function () {
    scrollAmount = container.scrollLeft;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.team-cards-container');
  const nextBtn = document.getElementById('next-btn-team');
  const prevBtn = document.getElementById('prev-btn-team');

  let scrollAmount = 0;

  nextBtn.addEventListener('click', function () {
    const scrollStep = window.innerWidth * 0.98;
    scrollAmount += scrollStep;
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });

  prevBtn.addEventListener('click', function () {
    const scrollStep = window.innerWidth * 0.98;
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });
});
