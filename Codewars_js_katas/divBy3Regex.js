/* 

CODE from kata workspace below ---------------------
// Regular expression that matches binary inputs that are multiple of 3


// working tests: 1, 2, 5
var a = /^0*1(11)*0(00)*1(11)*0(00)*1(11)*0(00)*(1\1|0\2)*|^0*(11)+$/gm

// working tests: 1, 2, 3, 4
var b = /^0*1(11)*0(00)*1(11)*0(00)*1(11)*0(00)*(1\1|0\2)*|^0*(11)+(0(00)*)*|^0+$/

//  5/6 working tests, working index
var c = /^0*1(11)*0(00)*1(11)*0(00)*1(11)*0(00)*(1\1|0\2)*|^0*(11)+(0(00)*)*$|^0+$/

var d = /^0*(1|(?:11)+)0(00)*(1|(?:11)*)0(00)*(0\1|1\2)*|^0*(11)+(0(00)*)*$|^0+$/

var d2 = /^0*(1|(?:11)+)0(00)*(1|(?:11)*)0(00)*(0\1|1\2)*$|^0*(11)+(0(00)*)*$|^0+$/

var d3 = /^0*(((0*110*)|(1?(?:1+0)))*|(10+1)*)(?<=^[01]+)$/
-----------------------------------------------------------------------------------------
// States formula regex
var regex = /^(ab( ba (ab)?|(bc cb( bc cb|ba (ab)?)*))*)(?<! ba) ba$/gm
var test = 'abbc cbba ab ba'
var test2 = 'ab ba ba'
// console.log("ab ba ab ba abbc cbba abba ab ba ab ba abbc cb bc cb ba ab ba".match(regex));

//------------------------- Old invalid regexes -------------------------
var oldRegex = /^0*((0*110*)|(10(?=(1|0))(?:1+0|0)))*(?<!^100$)(?<=^[01]+$)$/
var oldRegexV2 = /^0*(1|(?:11)+)0(00)*(1|(?:11)*)0(00)*(0\1|1\2)*|^0*(11)+(0(00)*)*$|^0+$/

// Almost everything working, failed on 2 invalid matches
var oldRegexV3 = /^0*(((0*110*)|(1?(?:1+0)))*|(10+1)*)(?<=^[01]+)$/gm

// Better than V3, looks promising

// Not really good
var oldRegexV4 = /^(?:0*110*)?(?:(0*1(?=10*))|((?<=\1)10*)|((?<=\2)01+)|((?<=\3)1*0))*$/m

var oldRegexV5 = /(^0*(1+(?=(00)+)|1(?=1))1+(0+(?=11)|0(?=1))(1|(?:11)*)0*$)+|^0*(11)+(0(00)*)*$|^0+$/m

var oldRegexV6 = /^0*(((0*11)*(?<=\3)(?=(\3|\4|\6))|(((?<=\3)0(?=\4)|(?<=\3)1(?=\6))(?:1+0))|(?<=\5)(10+1)(?=(\6|\2)*))*)$/m

var oldRegexV7 = /^0*((((?:(?<=((?:\2)0*|^0*)))(?:1(1(?=(\3))|0(?=\7))))*|((?<=\3)0*(?=\3)|(?<=\3)10(?=\8))|((?<=\7)10+1(?=(\3|\7)*)))*)$/m

var oldRegex8 = /^0*((((?:(?<=((?:\4)0*|^0*)))(?:1(1(?=\4|$)|(0(?=\8|$)))))*|((?<=\3|\7)0*(?=\3|0*$)|((?<=\3)1+0(?=\3|\9)))|((?<=\8)(?:10*(?=\3|$)|01+0(?=(\8|$)))))*)$/m

var oldRegex9 = /^0*(((((?<=(?:\4)0*|^0*|\6)(?:(?<=\6)1$|1(?!$)))(?:(1(?:0*(?:$|)|(?=\4))|(01*0((?=\4|\6|\5))))))|((?<=\3|\7)0*(?=\3|0*$)|((?<=\3)1*01(?=\3|\9)))|((?<=\8)(?:10*(?=\3|$)|01+0(?=(\8|$)))))*)$/m
// PASTE REGEX BELOW TO TEST

// /^0*(((((?<=(?:\5)0*)1|(?<!\4)0*1)((?:(1(?:0*(?:(11$|(?=\4))+|)|(?=\4)))|((?:01*0)+((?=\6|\5)|\4))))))*)$/m

// !!!USE THIS VERSION, ALMOST ALL TESTS PASS: 
/^0*((((?:(?<=((?:\2)0*|^0*))|(?<=^0*))11(?=\7))*(?=(\3|\5))|(((?<=\3)0(?=\4)|(?<=\3)1(?=\6))(?:1+0))|(?<=\5)(10+1)(?=(\6|\2)*))*)$/m

-------------------------- Test suite --------------------------

// should match all
var vt1 = "000"
var vt2 = "101011111100100011"
var vt3 = "01110101"
var vt4 = "1001"
var vt5 = "11"
var vt6 = "110000000"
var vt7 = "111111"
var vt8 = "00110000000011"
var vt9 = "011"
var vt10 = "1100"
var vt11 = "1111"
var vt12 = "110110"
var vt13 = "101111000110000101001110"
var vt14 = "11111011101011"
var vt15 = "110"

var shouldBeTrue = [vt1, vt2, vt3, vt4, vt5, vt6, vt7, vt8, vt9, vt10, vt11, vt12, vt13, vt14, vt15]

var vf1 = "101111000110000101001111"
var vf2 = "100"
var vf3 = "111101011110000000"
var vf4 = "1010111111001001"
var vf5 = "010001010111"
var vf6 = " 0"
var vf7 = "11111"
var vf8 = "111"

var shouldBeFalse = [vf1, vf2, vf3, vf4, vf5, vf6, vf7, vf8]

let boolStringValid = x => `${x == x.match(latestVerRegex) ? "Correct" : "Wrong"}`
let boolStringInvalid = x => `${x != x.match(latestVerRegex) ? "Correct" : "Wrong"}`

function testValidandInvalid() {
    //should be true
    shouldBeTrue.forEach(v => console.log(`${boolStringValid(v)}; Input: ${v}; Match: ${v.match(latestVerRegex)};`))
    console.log("\n");
    //should be false
    shouldBeFalse.forEach(v => console.log(`${boolStringInvalid(v)}; Input: ${v} Match: ${v.match(latestVerRegex)};`))
}

testValidandInvalid()

// use this if you want to output to file, change myConsole to console in log calls
// const fs = require('fs')
// const myConsole = new console.Console(fs.createWriteStream('./output.txt'));

*/

var latestVerRegex = /^0*(((((?<=(?:\5)0*)1|(?<!\4)(?:0*1))((?:(1(?:0*(?:(11$|(?=\4))+|)|(?=\4)))|((?:01*0)+\4)0*))))*)$/m

let multipleOf3Regex = RegExp(latestVerRegex)
for (let i = 0; i <= 1000; i++) {
    let binary = Number(i).toString(2)
    let res = multipleOf3Regex.test(binary)
    if (i % 3 == 0) {
        console.log(`Number: ${i}; Binary: ${binary}; ${res}; Should be true`)
      if (!res) {
          break;
      }
    } else {
        console.log(`Number: ${i}; Binary: ${binary}; ${multipleOf3Regex.test(binary)}; Should be false`)
        if (res) {
            break;
        }
    }
}

