const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<title>Node.js CI/CD App</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(135deg,#1e3c72,#2a5298,#6dd5ed);
    overflow:hidden;
}

.container{
    width:90%;
    max-width:900px;
    padding:50px;
    border-radius:25px;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
    text-align:center;
    color:white;
    animation: float 3s ease-in-out infinite;
}

@keyframes float{
    0%{
        transform:translateY(0px);
    }
    50%{
        transform:translateY(-10px);
    }
    100%{
        transform:translateY(0px);
    }
}

h1{
    font-size:60px;
    margin-bottom:20px;
    background: linear-gradient(to right,#ffecd2,#fcb69f);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}

p{
    font-size:22px;
    line-height:1.8;
    margin-bottom:30px;
}

.badges{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:20px;
    margin-top:20px;
}

.badge{
    padding:15px 30px;
    border-radius:50px;
    background: rgba(255,255,255,0.15);
    border:1px solid rgba(255,255,255,0.3);
    font-size:18px;
    transition:0.3s;
    cursor:pointer;
}

.badge:hover{
    transform:scale(1.1);
    background:#ffffff;
    color:#2a5298;
}

.footer{
    margin-top:40px;
    font-size:16px;
    opacity:0.8;
}

.circle{
    position:absolute;
    border-radius:50%;
    background:rgba(255,255,255,0.1);
    animation: move 10s linear infinite;
}

.circle:nth-child(1){
    width:200px;
    height:200px;
    top:-50px;
    left:-50px;
}

.circle:nth-child(2){
    width:300px;
    height:300px;
    bottom:-100px;
    right:-100px;
}

@keyframes move{
    0%{
        transform:translateY(0px) rotate(0deg);
    }
    100%{
        transform:translateY(-30px) rotate(360deg);
    }
}
</style>
</head>

<body>

<div class="circle"></div>
<div class="circle"></div>

<div class="container">

    <h1>🚀 Node.js CI/CD</h1>

    <p>
        Successfully deployed your Node.js application on cloud using
        GitHub Actions + PM2 + AWS EC2
    </p>

    <div class="badges">
        <div class="badge">⚡ Node.js</div>
        <div class="badge">🔥 Express.js</div>
        <div class="badge">☁ AWS EC2</div>
        <div class="badge">🔄 CI/CD</div>
        <div class="badge">🚀 GitHub Actions</div>
    </div>

    <div class="footer">
        Deployed Successfully ❤️
    </div>

</div>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
