import {flipACoin} from "./modules/coin.mjs"
import minimist from "minimist"
const argv = minimist(process.argv.slice(2))

const call = argv["call"] || "error"
if(call != "heads" && call != "tails"){
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}
var result = flipACoin(call) 
console.log(result)
 