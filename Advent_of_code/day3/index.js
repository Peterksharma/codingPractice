// import { batteryBank } from "./data.js"

let batteryBank = [
    "987654321111111",
    "811111111111119",
    "234234234234278",
    "818181911112111"
]


let batteryVoltage = []

let voltageTotal = 0

//Function that steps through the Bank
function loopThroughBanks() {
    for (let i = 0; i < batteryBank.length; i++) {
        console.log("Battery Bank: ", i)
        findBatteryVoltage(batteryBank[i])
    }
}

function findBatteryVoltage(bank) {

    let highestVoltageCell = 0
    let highestPosition = 0
    let secondHighestVoltageCell = 0

    for(let i = 0; i < bank.length; i++) {
        //Find the highest voltage
        if(bank[i] > highestVoltageCell && i+1 < bank.length) {
            highestVoltageCell = bank[i]
            highestPosition = i
        }
    }

    //Find the second highest voltage
    for(let j = highestPosition+1; j < bank.length; j++) {
        if (bank[j] > secondHighestVoltageCell) {
            secondHighestVoltageCell = bank[j]
        }
    }

    batteryVoltage.push(parseInt(highestVoltageCell + secondHighestVoltageCell))
    console.log("Highest Voltage Cell Value: ", highestVoltageCell, "Second Highest Cell Value", secondHighestVoltageCell)
}

function condenseVoltages() {
    let totalVolts = 0
    for (let i = 0; i < batteryVoltage.length; i++) {
        totalVolts = totalVolts + batteryVoltage[i]
    }
    console.log("Total Volate: ", totalVolts)
}

//Entry Point
function main() {
    loopThroughBanks()
    console.log(batteryVoltage)
    condenseVoltages()
}

//Start the program
main()