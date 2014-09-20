var amplitude = 36;
var frequency = Math.PI / 17;
var offset = 75;
var phase = 0,
    phase_increment = Math.PI / 36;

function update() {
  document.getElementById("left").innerHTML = "";
  var length = 0,
      x = 0;
  var i;
  
  var words = content.split(' ');
  var lines = [];
  
  for (i = 0; i < words.length; i++) {
    if (!lines[x])
      lines[x] = '';
      
    var word = words[i] + '&nbsp;';
    lines[x] += word;
      
    length += word.length;
    if (length >= (offset + Math.sin(phase + x * frequency) * amplitude)) {
      x++;
      length = 0;
    }
  }
  
  var text = lines.join('<br>');
  document.getElementById("left").innerHTML = text;
  document.getElementById("right").innerHTML = text;
  
  phase += phase_increment;
}