function MyPage()
{
    location.assign("https://github.com/StreamingMoon")
}

function Doing()
{
    location.assign("https://github.com/StreamingMoon/ForceSystem_byStreamingMoon")
}


function Detail()
{
    document.body.innerHTML = "";
    document.write('<!DOCTYPE html><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="stylesheet" type="text/css" href="./index.css"><title>StreamingMoon\'s Page</title></head><body bgcolor="#010409"><div align="center"><img id="Avatar" src="./HoshinoAi_Eye.jpg" /></div><div align="center"><h1>StreamingMoon</h1></div><div align="center">A human.</div><div align="center"><button onclick="Back()">Go Back</button></div></body><script type="text/javascript" src="./index.js"></script></html>');
}

function Back()
{
    document.body.innerHTML = "";
    document.write('<!DOCTYPE html><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="stylesheet" type="text/css" href="./index.css"><title>StreamingMoon\'s Page</title></head><body bgcolor="#010409"><div align="center"><img id="Avatar" src="./HoshinoAi_Eye.jpg" /></div><div align="center"><h1>StreamingMoon</h1></div><div align="center"><button onclick="MyPage()">My Homepage</button></div>    <div align="center"><button onclick="Doing()">What I\'m Doing</button></div><div align="center"><button onclick="Detail()">About Me</button></div></body><script type="text/javascript" src="./index.js"></script></html>');
}