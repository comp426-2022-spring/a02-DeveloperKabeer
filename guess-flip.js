import {flipACoin} from "./modules/coin.mjs"
import minimist from "minimist"
const argv = minimist(process.argv.slice(2))

const call = argv["call"] || "error"
if(call != "heads" && call != "tails"){
    console.error("bad input")
    process.exit(1)
}
var result = flipACoin(call) 
console.log(result)
 