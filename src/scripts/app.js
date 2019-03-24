console.log('hello');

Array.from(document.querySelectorAll('.stars')).forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
    e.originalTarget.classList.add('full');
    var previousSibling = e.originalTarget.nextElementSibling;
    var nextSibling = e.originalTarget.previousElementSibling;
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
