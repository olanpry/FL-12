function Fighter(obj) {
    let health = obj.hp;
    let HP = obj.hp;
    let winsCount = 0,
        lossesCount = 0;

    function attackFunc(def) {
        let attackResult = 100 * Math.random() > def.getStrength()+ def.getAgility();
        if (attackResult) {
            def.dealDamaged(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${def.getName()}`);
        }else{
            console.log(`${this.getName()} attack missed`)
        }
        return attackResult
    }

    return {
        getName: () => obj.name,
        getDamage: () => obj.damage,
        getStrength: () => obj.strength,
        getAgility: () => obj.agility,
        getHealth: () => HP,
        attack: attackFunc,
        logCombatHistory: () => {
            return {
                Name: obj.name,
                Wins: winsCount,
                Losses: lossesCount
            }
        },
        heal: (healthpoint) => {
            HP = HP + healthpoint <= health ? HP + healthpoint : health;
            return HP
        },
        dealDamaged: (xx) => {
            HP = HP - xx > 0 ? HP - xx : 0;
            return HP
        },
        addWin: () => winsCount++,
        addLoss: () => lossesCount++
    }
}

function battle(f1, f2) {
    let i = 1;
    let fighter = {};
    let defender = {};
    if (!f1.getHealth()) {
        console.log(f1.getName() + 'is dead and cannot fight');
        return
    } else if (!f2.getHealth()) {
        console.log(f2.getName() + 'is dead and cannot fight');
        return
    }
    while (f1.getHealth() > 0 && f2.getHealth() > 0) {
        if (i % 2 === 1) {
            fighter = f1;
            defender = f2;
        } else {
            fighter = f2;
            defender = f1
        }
        fighter.attack(defender);
        i++;
    }

    let winner,
        losser;

    if (f1.getHealth() === 0) {
        winner = f2;
        losser = f1;
    } else {
        winner = f1;
        losser = f2;
    }
    console.log(winner.getName() + ' is a winner!');
    winner.addWin();
    losser.addLoss();
}