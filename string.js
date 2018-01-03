// toString 跟 valueOf 返回的都是自己
var str = 'abcdefg'
console.log(str.toString()) // -> 'abcdefg'
console.log(str.valueOf()) // -> 'abcdefg'


// charAt(index): 返回在指定位置的字符。
var charAtStr = 'abcdefg'
var charAtEle = charAtStr.charAt(3)
console.log(charAtEle)
// -> d


// charCodeAt(index): 返回指定位置的字符的 Unicode 编码。
var charCodeAtStr = 'abcdefg'
var charCodeAtEle = charCodeAtStr.charCodeAt(3)
console.log(charCodeAtEle)
// -> 100  (d 的 Unicode编码是 100)



// fromCharCode(n1, n2, ..., nX): 将 Unicode 编码转为一个字符  接受一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码。
var fromCharCode1 = String.fromCharCode(100)
var fromCharCode2 = String.fromCharCode(72,69,76,76,79)
console.log(fromCharCode1) // -> d
console.log(fromCharCode2) // -> HELLO



// string.indexOf(searchvalue,start): 返回某个指定的字符串值在字符串中首次出现的位置。如果没有找到匹配的字符串则返回 -1。
/*
    searchvalue: 必需。规定需检索的字符串值
    start:  可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索
*/
var indexOfStr = 'abcdbfg'
var indexOfEle1 = indexOfStr.indexOf('b')
var indexOfEle2 = indexOfStr.indexOf('b', 2)
console.log(indexOfEle1) // -> 1
console.log(indexOfEle2) // -> 4



// string.lastIndexOf(searchvalue,start): 返回一个指定的字符串值最后出现的位置，如果指定第二个参数 start，则在一个字符串中的指定位置从后向前搜索。
/*
    searchvalue: 必需。规定需检索的字符串值
    start: 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。
*/
var lastIndexOfStr = 'abcdbfg'
var lastIndexOfEle1 = lastIndexOfStr.lastIndexOf('b')
var lastIndexOfEle2 = lastIndexOfStr.lastIndexOf('b', 2)
console.log(lastIndexOfEle1) // -> 4
console.log(lastIndexOfEle2) // -> 1



// string.concat(string1, string2, ..., stringX): concat() 方法用于连接两个或多个字符串。该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串。
var concatStr1 = 'abcd'
var concatStr2 = 'efg'
var concatStr = concatStr1.concat(concatStr2)
console.log(concatStr)
// -> 'abcdefg'



// string.match(regexp): 在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
var matchStr = 'abcdbef'
var matchEle = matchStr.match(/b/gi)
console.log(matchEle)
// -> ["b", "b"]


// string.replace(searchvalue,newvalue): 在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
/*
    searchvalue: 必须。规定子字符串或要替换的模式的 RegExp 对象。 请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。
    newvalue: 必需。一个字符串值。规定了替换文本或生成替换文本的函数。
*/
var replaceStr1 = 'abcdafg'
var replaceEle1 = replaceStr1.replace(/a/g, 'z')
console.log(replaceEle1) // -> zbcdzfg


var replaceStr2 = 'a1b2c3d4'
var replaceEle2 = replaceStr2.replace(/\d/g, function(v){
    return Math.pow(v, 2)
})
console.log(replaceEle2) // -> a1b4c9d16



// search(searchvalue): 检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没有找到任何匹配的子串，则返回 -1。
var searchStr = 'Abcdaef'
searchStrEle = searchStr.search(/a/)
searchStrEle2 = searchStr.search(/a/i)
console.log(searchStrEle) // -> 4
console.log(searchStrEle2) // -> 0



// string.slice(start,end): 提取字符串的某个部分，并以新的字符串返回被提取的部分。
/*
    start:必须. 要抽取的片断的起始下标。第一个字符位置为 0
    end: 可选。 紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
*/
var sliceStr = 'abcdefg'
var sliceStrEle = sliceStr.slice(1, -1)
console.log(sliceStrEle)
// -> bcdef



// string.split(separator,limit): 把一个字符串分割成字符串数组。如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割
/*
    separator: 可选。字符串或正则表达式，从该参数指定的地方分割 string Object。
    limit: 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
*/
var splitStr = 'abcdecg'
var splitStrEle1 = splitStr.split('c')
var splitStrEle2 = splitStr.split('')
console.log(splitStrEle1) // -> ["ab", "de", "g"]
console.log(splitStrEle2) // -> ["a", "b", "c", "a", "e", "f", "g"]



// string.substr(start,length): 在字符串中抽取从 开始 下标开始的指定数目的字符。
/*
    start: 必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
    length: 可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
*/
var substrStr = 'abcdefg'
var substrStrEle = substrStr.substr(2, 2)
console.log(substrStrEle)
// -> cd



// string.substring(from, to): 用于提取字符串中介于两个指定下标之间的字符。返回的子串包括 开始 处的字符，但不包括 结束 处的字符。
/*
    from:必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。
    to: 可选。一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。
*/
var substringStr = 'abcdefg'
var substringStrEle = substringStr.substring(2, 4)
console.log(substringStrEle)
// -> cd



// toLowerCase(): 把字符串转换为小写。
var toLowerCaseStr = 'ABCDEFG'
var toLowerCaseStrEle = toLowerCaseStr.toLowerCase()
console.log(toLowerCaseStrEle)
// -> abcdefg


// toUpperCase(): 把字符串转换为大写
var toUpperCaseStr = 'abcdefg'
var toUpperCaseStrEle = toUpperCaseStr.toUpperCase()
console.log(toUpperCaseStrEle)
// -> ABCDEFG



// trim(): 去除字符串两边的空白
var trimStr = ' abcdefg '
var trimStrEle = trimStr.trim()
console.log(trimStrEle)
// ->abcdefg


// includes(searchvalue, start): 用来判断一个字符串是否包含一个指定的值，如果是返回 true，否则false
var includesStr = 'abcdefg'
var includesEle1 = includesStr.includes('a')
var includesEle2 = includesStr.includes('z')
console.log(includesEle1) // -> true
console.log(includesEle2) // -> false



// startsWith(searchvalue, start): 表示是否字符(串)位于string的头部位置, 如果是返回 true，否则false
var startsWithStr = 'abcdefg'
var startsWithStrEle1 = startsWithStr.startsWith('a')
var startsWithStrEle2 = startsWithStr.startsWith('b')
console.log(startsWithStrEle1) // -> true
console.log(startsWithStrEle2) // -> false



// endsWith(searchvalue, start): 表示是否字符(串)位于string的尾部位置, 如果是返回 true，否则false
var endsWithStr = 'abcdefg'
var endsWithStrEle1 = endsWithStr.endsWith('f')
var endsWithStrEle2 = endsWithStr.endsWith('g')
console.log(endsWithStrEle1) // -> false
console.log(endsWithStrEle2) // -> true



// repeat(num): 参数num为重复字符串的次数
var repeatStr = 'abc'
var repeatStrEle = repeatStr.repeat(2) //重复两次
console.log(repeatStrEle)
// -> abcabc



// ${}: 模板字符串 
var str1 = '陈冬'
var template = `我是${str1}`
console.log(template)
// -> 我是陈冬




/*--------------------------String HTML 包装方法-------------------------------*/

// anchor(name): 用于创建 HTML 锚。
var anchorStr = '我是锚点'
var anchorHtml = anchorStr.anchor('anchor_1')
console.log(anchorHtml)
// -> <a name="anchor_1">我是锚点</a>



// big(): 把字符串显示为大号字体
var bigStr = 'abcdefg'
var bigHtml = bigStr.big()
console.log(bigHtml)
// -> <big>abcdefg</big>


// blink(): 显示闪动字符串
var blinkStr = 'abcdefg'
var blinkHtml = blinkStr.blink()
console.log(blinkHtml)
// -> <blink>abcdefg</blink>



// bold(): 使用粗体显示字符串。
var boldStr = 'abcdefg'
var boldHtml = boldStr.bold()
console.log(boldHtml)
// -> <b>abcdefg</b>



// fixed(): 以打字机文本显示字符串。
var fixedStr = 'abcdefg'
var fixedHtml = fixedStr.fixed()
console.log(fixedHtml)
// -> <tt>abcdefg</tt>



// fontcolor(color): 使用指定的颜色来显示字符串。
var fontcolorStr = 'abcdefg'
var fontcolorHtml = fontcolorStr.fontcolor('red')
console.log(fontcolorHtml)
// -> <font color="red">abcdefg</font>



// fontsize(size): 使用指定的尺寸来显示字符串,  size 参数必须是从 1 至 7 的数字。
var fontsizeStr = 'abcdefg'
var fontsizeHtml = fontsizeStr.fontsize(3)
console.log(fontsizeHtml)
// -> <font size="3">abcdefg</font>


// italics(): 使用斜体显示字符串。
var italicsStr = 'abcdefg'
var italicsHtml = italicsStr.italics(3)
console.log(italicsHtml)
// -> <i>abcdefg</i>



// link(url): 将字符串显示为链接
var linkStr = 'abcdefg'
var linkHtml = linkStr.link('http://dzblog.cn')
console.log(linkHtml)
// -> <a href="http://dzblog.cn">abcdefg</a>



// small(url): 使用小字号来显示字符串。
var smallStr = 'abcdefg'
var smallHtml = smallStr.small('http://dzblog.cn')
console.log(smallHtml)
// -> <small>abcdefg</small>



// strike(url): 用于显示加删除线的字符串
var strikeStr = 'abcdefg'
var strikeHtml = strikeStr.strike('http://dzblog.cn')
console.log(strikeHtml)
// -> <strike>abcdefg</strike>


// sub(url):  把字符串显示为下标
var subStr = 'abcdefg'
var subHtml = subStr.sub('http://dzblog.cn')
console.log(subHtml)
// -> <sub>abcdefg</sub>



// sup(url):  把字符串显示为上标
var supStr = 'abcdefg'
var supHtml = supStr.sup('http://dzblog.cn')
console.log(supHtml)
// -> <sup>abcdefg</sup>


