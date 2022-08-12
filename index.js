let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.shift() //remove the array itms fron the begining
console.log(largeCountries)
largeCountries.unshift("China")// add array item at the begining
console.log(largeCountries)
largeCountries.pop()   //remove the array itms fron the end
console.log(largeCountries)
largeCountries.push("Pakistan")// add array item at the end
console.log(largeCountries)
