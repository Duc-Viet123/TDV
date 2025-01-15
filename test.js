x = 0.1
y = 0.2
result = Math.pow(x,y)

console.log(result)

randomValue = Math.random()
console.log(Math.round(randomValue*100))
console.log((x+y).toFixed(2) == 0.3)
console.log(x+y)
let time = Date.now()
console.log(time)
let now = new Date
console.log(now.toISOString())



let str = 'truong duc viet'
console.log(str)



let multipleLines = 'first line \nsecond line'
console.log(multipleLines)

let testStr = 'you are\' right'


let firstString = 'hello'
let secondString = 'world'
console.log(firstString+secondString)


let name = ' nguyen van a'
console.log('hello ${ name }')

let stringtest = 'HTML is hyper text'
let reg = /^HTML/

let r = reg.test(stringtest)
console.log(r)