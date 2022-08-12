let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomFighter1 = Math.floor(Math.random() * fighters.length)
    let randomFighter2 = Math.floor(Math.random() * fighters.length)
    let fighterA = fighters[randomFighter1]
    let fighterB = fighters[randomFighter2]
    stageEl.textContent = fighterA + " vs " + fighterB

})

// console.log(fighters.length)

