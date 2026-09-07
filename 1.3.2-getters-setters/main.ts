import {Thermostat} from "./thermostat.ts";


const thermostat1: Thermostat = new Thermostat(35, 10, 50);
const thermostat2: Thermostat = new Thermostat(5, -30, 20);

[thermostat1, thermostat2].forEach(t => {
    console.log(`temp: ${t.temperature}`)
    console.log(`min: ${t.minTemperature}`)
    console.log(`max: ${t.maxTemperature} \n`)
})

thermostat1.temperature = 5
thermostat1.temperature = 55
