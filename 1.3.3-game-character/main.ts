import {GameCharacter} from "./game-character.ts";

const player = new GameCharacter('Luna', 30)
const player2 = new GameCharacter('Vanilj', 75)

player.takeDamage(250)
player.takeDamage(28)
player.heal(26) // int säker om man sku laga så att int man kan heal om playern har 0 hp but whateevr
player.heal(2000)
console.log(player.isAlive())
player.takeDamage(250)
console.log(player.isAlive())
player.showInfo()

player2.takeDamage(45)
player2.takeDamage(28)
player2.heal(26) //
player2.heal(2000)
console.log(player2.isAlive())
player2.takeDamage(250)
console.log(player2.isAlive())
player2.showInfo()