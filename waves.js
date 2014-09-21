var escapeRegexes,
    escapeKeys,
    amplitude = 36,
    frequency = Math.PI / 17,
    offset = 75,
    phase = 0,
    phase_increment = Math.PI / 36;

escapeRegexes = {
  "&amp;": /&/g,
  "&lt;": /</g,
  "&gt;": />/g,
  "&quot;": /"/g,
  "&#39;": /'/g,
};
escapeKeys = Object.keys(escapeRegexes);

function update() {
  var length = 0,
      x = 0,
      i, words, lines, word, text;

  document.getElementById("left").innerHTML = "";
  words = content.split(/\s/);
  lines = [];

  for (i = 0; i < words.length; i++) {
    if (!lines[x]) {
      lines[x] = '';
    }

    word = clean(words[i]) + '&nbsp;';
    lines[x] += word;

    length += word.length;
    if (length >= (offset + Math.sin(phase + x * frequency) * amplitude)) {
      x++;
      length = 0;
    }
  }

  text = lines.join('<br>');
  document.getElementById("left").innerHTML = text;
  document.getElementById("right").innerHTML = text;

  phase += phase_increment;
}

function clean(word) {
  escapeKeys.forEach(function (key) {
    word = word.replace(escapeRegexes[key], key);
  });
  return word;
}
