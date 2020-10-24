// a simple TeX-input example
var mjAPI = require("mathjax-node");
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
mjAPI.start();

var yourMath = '\sqrt{\frac{asdasd}{asdsadsad}}';
var equation = JSON.stringify('\\' + yourMath);
const str = equation.replace(/\\/g, '\\\\');
equation = JSON.parse(str);
equation = equation.replace(/\\\\/g, '\\');
console.log(equation);
mjAPI.typeset({
  math: equation,
  format: "TeX", // or "inline-TeX", "MathML"
  mml:true,      // or svg:true, or html:true
}, function (data) {
  if (!data.errors) {console.log(data.mml)}
  // will produce:
  // <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  //   <mi>E</mi>
  //   <mo>=</mo>
  //   <mi>m</mi>
  //   <msup>
  //     <mi>c</mi>
  //     <mn>2</mn>
  //   </msup>
  // </math>
});