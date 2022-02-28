function attack(i){
    var bossHealth = Math.round(Math.random() * 10);
    var playerHealth = Math.round(Math.random() * 10);

    if (model.gameOver == true) {
        return;
    }
    
    
    // player 
    if (playerHealth <= 5) {
        model.boss[i].health -= model.player[i].damage
    } else if (playerHealth >= 7) {
        model.boss[i].health -= model.player[i].damage * 3
    }


    // Boss
    if (bossHealth <= 7) {
        model.player[i].health -= model.boss[i].damage
    } else if (bossHealth >= 9) {
        model.player[i].health -= model.boss[i].damage * 5
    }


    if (model.player[i].health <= 0 || model.boss[i].health <= 0 ) {
        model.gameOver = true;
    }

    if (model.player[i].health <= 0) {
        alert ('You lost!');
    }

    if (model.boss[i].health <= 0) {
        alert ('You won!');
    }

    if (model.boss[i].health <=0 && model.player[i].health <= 0){
        alert ('uavgjort');
    }
    show();
}

function reset(i) {
    model.gameOver = false;
    model.boss[i].health = 500;
    model.player[i].health = 100;
    show();
}

 