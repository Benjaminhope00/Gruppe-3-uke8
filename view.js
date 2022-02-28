show();
function show() {
let html = ``;
for (let i = 0; i < model.boss.length; i++) {
    html += `



    </div>

    <div class="boss">
    <div>Health: ${model.boss[i].health}</div>
    <img src="${model.boss[i].name}" class="bossSize">

    </div>

    
    <div class="player">
    <div>Health: ${model.player[i].health}</div>
    <img src="${model.player[i].name}" class="playerSize"</div><br><br><br><br><br><br><br><br><br><br><br>
    <img onclick="reset(${i})" class="Reset" src="https://bit.ly/34V3srn">    
    </div>

  


    <img onclick="attack(${i})" class="attack" src="https://bit.ly/3h9y5M5">




`;
}




document.getElementById('app').innerHTML = html;
}
