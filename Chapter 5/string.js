var str = 'something'  // string literal
var str2 = String('something') // string constructor

console.log(str,str2)

var n = 10
var str3 = n + ' '
console.log(str3)

var str4 = n.toString(n)
console.log(str4)


// Escape notation

var str5 = "This is a 'String'"
console.log(str5)

var str6 = 'This is a \'String\''
console.log(str6)

var str7 = 'This is a \n String'
console.log(str7)

var str8 = 'This is a \t String'
console.log(str8)

var str9 = 'This is a \\String'
console.log(str9)


// String Comparison

var  a = 'aaaaaaaz'
var b = 'aaaaaaaZ'
console.log(a < b)

console.log('001' == 1)


// String methods

var c = 'I am'
var d = 'Sajib'

var e = c.concat(' ',d)
console.log(e)

var f = e.substr(5,3)
console.log(f)

console.log(e.charAt(5))
console.log(e.startsWith('I am'))
console.log(e.endsWith('Sajib'))
console.log(c.toUpperCase())
console.log(d.toLowerCase())
console.log('     abc   '.trim())
console.log(e.split(' '))



//String Length

var str10 = 'sajib mahmud'

var length = 0
while(true){
  if(str10.charAt(length) === ''){
    break
  }else{
    length++
  }
}
console.log(length)

console.log(str10.length)
console.log('sajhcsadasasjdkas'.length)