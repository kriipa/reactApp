let names = ["loki","shaym","subina"]

console.log(names.find(n => n !== "loki"))
console.log(names.filter(n => n !== "loki"))
console.log(names.map(n => `<h2>${n}</h2>`))

console.log(name.map(function (n){
    return ( `<h2> ${n} </h2>`)
}))
