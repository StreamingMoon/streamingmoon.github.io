function stringToCodePoints(str) {
  return [...str].map((c) => c.codePointAt(0));
}
function codePointsToString(codePoints) {
  return String.fromCodePoint(...codePoints);
}
function calculateKey(code) {
  return Math.floor((code.length * Math.sin(code.length)) / 5);
}
function encode(code) {
  const key = calculateKey(code);
  const codePoints = stringToCodePoints(code);
  return codePoints.map((cp, i) => cp + ((i + 1) * key + i));
}
function decode(code) {
  const key = calculateKey(code);
  const codePoints = stringToCodePoints(code);
  return codePoints.map((cp, i) => cp - ((i + 1) * key + i));
}
function handleOperation(operation) {
  const input = document.getElementById("input").value;

  try {
    let result;
    if (operation === "encode") {
      const encoded = encode(input);
      result = codePointsToString(encoded);
    } else {
      const decoded = codePointsToString(decode(input));
      result = decoded;
    }
    document.getElementById("output").value = result;
  } catch (e) {
    alert("Failed!");
  }
}

function EnableTypeIn() {
  document.getElementById("Name").readOnly =
    !document.getElementById("Name").readOnly;
}

function SYC() {
  fetch("SYC.html")
    .then((r) => r.text())
    .then((t) => (document.body.innerHTML = t));
}
function MyPage() {
  location.assign("https://github.com/StreamingMoon");
}
function Doing() {
  location.assign("https://github.com/StreamingMoon/streamingmoon.github.io");
}
function Detail() {
  if (document.getElementById("Name").value === "SYC") {
    SYC();
  } else {
    fetch("detail.html")
      .then((r) => r.text())
      .then((t) => (document.body.innerHTML = t));
  }
}
function Back() {
  fetch("index.html")
    .then((r) => r.text())
    .then((t) => (document.body.innerHTML = t));
}
