import {coinFlips, countFlips} from "./modules/coin.mjs"
import {minimalist} from "minimalist"
const argv = parseArgs(process.argv.slice(2))
const numFlips = argv["number"] || 1

var flips = coinFlips(numFlips)
var flipResults = countFlips(flips)
console.log(flips)
console.log(flipResults)
 