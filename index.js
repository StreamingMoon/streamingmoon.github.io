(function() {
    const targetSequence = ['s', 'y', 'c'];
    let currentPosition = 0;

    function handleKeyPress(event) {
        // 检查是否匹配当前需要的字符
        if (event.key.toLowerCase() === targetSequence[currentPosition]) {
            currentPosition++;
            // 当完全匹配序列时触发
            if (currentPosition === targetSequence.length) {
                SYC();
                currentPosition = 0; // 重置检测
            }
        } else {
            currentPosition = 0; // 输入错误时重置
        }
    }
    // 添加事件监听
    document.addEventListener('keydown', handleKeyPress);
})();

// 字符串转码点数组
function stringToCodePoints(str) {
    return [...str].map(c => c.codePointAt(0));
}

// 码点数组转字符串
function codePointsToString(codePoints) {
    return String.fromCodePoint(...codePoints);
}

// 计算密钥
function calculateKey(code) {
    return Math.floor(code.length * Math.sin(code.length) / 5);
}

// 编码函数
function encode(code) {
    const key = calculateKey(code);
    const codePoints = stringToCodePoints(code);
    return codePoints.map((cp, i) =>
        cp + ((i + 1) * key + i)
    );
}

// 解码函数
function decode(code) {
    const key = calculateKey(code);
    const codePoints = stringToCodePoints(code);
    return codePoints.map((cp, i) =>
        cp - ((i + 1) * key + i)
    );
}

// 处理操作
function handleOperation(operation) {
    const input = document.getElementById('input').value;

    try {
        let result;
        if (operation === 'encode') {
            const encoded = encode(input);
            result = codePointsToString(encoded);
        } else {
            const decoded = codePointsToString(decode(input));
            result = decoded;
        }
        document.getElementById('output').value = result;
    } catch (e) {
        alert('操作失败：无效的输入');
    }
}

function SYC()
{
    fetch('SYC.html').then(r=>r.text()).then(t=>document.body.innerHTML=t)
}

function MyPage()
{
    location.assign("https://github.com/StreamingMoon")
}

function Doing()
{
    location.assign("https://github.com/StreamingMoon/GameOfLife")
}

function Detail()
{
    fetch('detail.html').then(r=>r.text()).then(t=>document.body.innerHTML=t)
}

function Back()
{
    fetch('index.html').then(r=>r.text()).then(t=>document.body.innerHTML=t)

}