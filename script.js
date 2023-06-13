document.getElementById("fvForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var principal = parseFloat(document.getElementById("principal").value);
  var interest = parseFloat(document.getElementById("interest").value);
  var years = parseFloat(document.getElementById("years").value);

  var futureValue = calculateFutureValue(principal, interest, years);

  document.getElementById("result").innerHTML =
    "Future Value: " + futureValue.toFixed(2);
});

function calculateFutureValue(principal, interest, years) {
  var rate = interest / 100;
  var futureValue = principal * Math.pow(1 + rate, years);
  return futureValue;
}
