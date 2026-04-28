// assets/js/publication-filter.js
(function () {
  function initPublicationFilters() {
    var buttons = document.querySelectorAll('.filter-button');
    var cards = document.querySelectorAll('.publication-card');

    if (!buttons.length || !cards.length) {
      console.log('Filter elements missing');
      return;
    }

    console.log('Filter ready, cards count:', cards.length);

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Update active button style
        buttons.forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');

        var filter = btn.getAttribute('data-filter');
        console.log('Filtering by:', filter);

        cards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-author-type') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Highlight "All" button by default
    var allBtn = document.querySelector('.filter-button[data-filter="all"]');
    if (allBtn) {
      buttons.forEach(function (b) {
        b.classList.remove('active');
      });
      allBtn.classList.add('active');
    }
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublicationFilters);
  } else {
    initPublicationFilters();
  }
})();
