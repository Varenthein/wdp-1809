console.log('hello');

Array.from(document.querySelectorAll('.stars')).forEach(function (starLink) {
  starLink.addEventListener('click', function (clickEvent) {
    clickEvent.preventDefault();
    clickEvent.target.classList.add('full');
    var previousSibling = clickEvent.target.nextElementSibling;
    var nextSibling = clickEvent.target.previousElementSibling;
    // Direction jest ustawione na rtl wiec next jest tak naprawde previous ;) (i odwrotnie)
    while (previousSibling) {
      previousSibling.classList.add('full');
      previousSibling.classList.remove('voted');
      previousSibling = previousSibling.nextElementSibling;
    }
    // Petle wywolujemy dwa razy zeby usunac klase w przypadku nowego glosowania
    while (nextSibling) {
      nextSibling.classList.remove('full');
      nextSibling = nextSibling.previousElementSibling;
    }
  });
});
