marvel_heros.push(dc_horos)
marvel_heros.concat(dc_horos)

const all_new_heros = [...marvel_heros, ...dc_heros]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

console.log(Array.from({name: "Hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 200

console.log(Array.of(score1, score2, score3))




