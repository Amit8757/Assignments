window.addEventListener('DOMContentLoaded', function() {
  var paragraph = document.getElementById('paragraph');
  var words = paragraph.innerText.split(' ');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > 8) {
      var span = document.createElement('span');
      span.classList.add('highlight');
      span.innerText = word;
      words[i] = span.outerHTML;
    }
  }

  paragraph.innerHTML = words.join(' ');
});
