

export class GameCharacter {
    private _name: string
    private _health: number
    private _maxHealth: number

    get name() {
        return this._name
    }
    get health() {
        return this._health
    }
    get maxHealth() {
        return this._maxHealth
    }


    takeDamage(amount: number): void {
        if(amount <= 0) {
            console.log(`Amount must be greater than 0 \n amount entered: \u001b[33m ${amount} \x1b[0m`)
            return
        }

        this._health -= amount
        if(this._health < 0) {
            this._health = 0
        }
        console.log(`took ${amount} damage, health is now ${this._health} / ${this.maxHealth}`)
    }
    heal(amount: number): void {
        if(amount <= 0) {
            console.log(`Amount must be greater than 0 \n amount entered: \u001b[33m ${amount} \x1b[0m`)
            return
        }

        this._health += amount
        if(this._health > this.maxHealth) {
            this._health = this.maxHealth
        }
        console.log(`recovered ${amount} health, health is now ${this._health} / ${this.maxHealth}`)
    }
    isAlive(): boolean {
        return this._health > 0;
    }
    showInfo(): void {
        console.log(`player: ${this._name}`)
        console.log(`health: ${this._health} \n`)
    }

    constructor(name: string, maxHealth: number) {
        this._name = name
        this._maxHealth = maxHealth
        this._health = maxHealth
    }
}