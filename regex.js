// const regex = RegExp()

const string1 = 'cat'
const string2 = '-------cat'
const string3 = 'cat'
const string4 = 'dogcat'

console.log(string2.match(/cat/))

const result1 = string3.match(/^[a-zA-Z0-9]+$/)
const result2 = string4.match(/^[a-zA-Z0-9]+$/)

console.log({result1, result2})

regex = RegExp("^[a-zA-Z0-9]+$")

console.log(regex.test(string1))
console.log(string4.search(/cat/))

let str = "Dogs are the best pets! Dogs rule! More on Dogs later!"
let regex2 = /dogs/i
let regex3 = /dogs/gi
let result3 = str.replace(regex2, "Cats")
result3 = result3.replace(regex3, "cats")
console.log(str)
console.log(result3)