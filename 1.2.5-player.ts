

class Player {
    name: string;
    health: number;
    score: number;

    takeDamage(amount: number) {
        this.health -= amount;
    }
    heal(amount: number) {
        this.health += amount;
    }
    addScore(points: number) {
        this.score += points;
    }
    showInfo() {
        console.log(`Player: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Score: ${this.score}`);
    }
    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.score = 0;
    }
}
const player1 = new Player('Alex');
player1.takeDamage(30);
player1.addScore(100);
player1.heal(10);
player1.takeDamage(25);
player1.addScore(50);
player1.showInfo();
console.log()
const player2 = new Player('Luna');
player2.takeDamage(27);
player2.addScore(94);
player2.heal(10);
player2.takeDamage(25);
player2.addScore(50);
player2.showInfo();