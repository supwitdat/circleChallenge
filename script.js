

function calculateDivWidth(){
  var numInput = Number(document.getElementById('radiusIn').value);
  var wrap = document.getElementById('circle_wrap');

      var diameter = numInput * 2;

      console.log(diameter);

      var circleDiv = document.createElement('div');
      circleDiv.style.width = diameter + 'px';
      circleDiv.style.height = diameter + 'px';
      circleDiv.style.borderRadius = "50%";
      circleDiv.style.backgroundColor = "purple";
      wrap.appendChild(circleDiv);

var area = Number(Math.PI * Math.pow(numInput, 2)).toFixed(2);
console.log(area);

      var message = document.createElement('h2');
      message.innerText = "The area of a circle with the radius of " + numInput + " is " + area + ".";
      document.body.appendChild(message);



}
