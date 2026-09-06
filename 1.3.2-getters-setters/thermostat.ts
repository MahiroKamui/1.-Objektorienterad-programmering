

export class Thermostat {
    private _temperature: number
    private _minTemperature: number
    private _maxTemperature: number

    get temperature(): number {
        return this._temperature
    }
    get minTemperature(): number {
        return this._minTemperature
    }
    get maxTemperature(): number {
        return this._maxTemperature
    }

    set temperature(temp: number) {
        if(temp < this._minTemperature || temp > this._maxTemperature || isNaN(temp)) {
            console.log(`Invalid input temperature: ${temp} \n`)
            console.log(`minTemperature: ${this._minTemperature} \n`)
            console.log(`maxTemperature: ${this._maxTemperature}`)
            return
        }
        this._temperature = temp
    }

    constructor(temperature: number, min: number, max: number) {
        this._temperature = temperature
        this._minTemperature = min
        this._maxTemperature = max
    }
}