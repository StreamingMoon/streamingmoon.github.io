function stringToCodePoints(str) {
    return [...str].map((c) => c.codePointAt(0));
}
function codePointsToString(codePoints) {
    return String.fromCodePoint(...codePoints);
}
function calculateKey(code,i) {
    return Math.floor(i*Array.from(code).length*(i-1))%10000;
}
function encode(code) {
    const codePoints = stringToCodePoints(code);
    codePoints_encoded = [...codePoints];
    for(let i = 0; i < codePoints.length; i++)
    {
        if(i>0)
        {
            const key = calculateKey(code,codePoints_encoded[i-1]**2);
            codePoints_encoded[i]=codePoints[i]+key;
        }
        else
        {
            const key = 1;
            codePoints_encoded[i]=codePoints[i]+key;
        }

    }
    return codePoints_encoded;
}
function decode(code) {
    const codePoints = stringToCodePoints(code);
    codePoints_decoded = [...codePoints];
    for(let i = 0; i <codePoints.length; i++)
    {
        if(i>0)
        {
            const key = calculateKey(code,codePoints[i-1]**2);
            codePoints_decoded[i]=codePoints[i]-key;
        }
        else
        {
            const key = 1;
            codePoints_decoded[i]=codePoints[i]-key;
        }
    }
    return codePoints_decoded;
}
function handleOperation(operation) {
    const input = document.getElementById("input").value;

    try {
    let result;
    if (operation === "encode") {
        const encoded = encode(input);
        result = codePointsToString(encoded);
    } else {
        const decoded = decode(input);
        result = codePointsToString(decoded);
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
