// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
// IPs should be considered valid if they consist of four octets, with values between 0 and 255, 
// inclusive.
// Input to the function is guaranteed to be a single string.


function isValidIP(str) {
    let isValid = true
    let addParts = str.split('.')
    addParts.length > 4 || addParts.length < 4 ? isValid = false : null            
    addParts.forEach(part => {
        part = part.replace(' ', 'A')
        parseInt(part[0]) == 0 && parseInt(part[1]) >= 0 ? isValid = false : null
        let pPart = parseInt(part)
        isNaN(pPart) ? isValid = false : null
        pPart > 255 || pPart < 0 ? isValid = false : null
        let sPart = part.split('')
        sPart.forEach(piece => {
            piece = parseInt(piece)
            isNaN(piece) ? isValid = false : null
        })
    })
    return isValid
}

console.log(isValidIP("0.0.0.0"), 'Answer: true');
console.log(isValidIP("12.255.56.1"), 'Answer: true');
console.log(isValidIP("137.255.156.100"), 'Answer: true');
console.log(isValidIP("1.1.1."), 'Answer: false');
console.log(isValidIP("01.02.03.04"), 'Answer: false');
console.log(isValidIP("asdfas.aasdfasdf.asdfasdf.asdfasdf"), 'Answer: false');
console.log(isValidIP(''), 'Answer: false');
console.log(isValidIP('abc.def.ghi.jkl'), 'Answer: false');
console.log(isValidIP('123.456.789.0'), 'Answer: false');
console.log(isValidIP('12.34.56'), 'Answer: false');
console.log(isValidIP('01.02.03.04'), 'Answer: false');
console.log(isValidIP('256.1.2.3'), 'Answer: false');
console.log(isValidIP('1.2.3.4.5'),'Answer: false');
console.log(isValidIP('123,45,67,89'), 'Answer: false');
console.log(isValidIP('1e0.1e1.1e2.2e2'), 'Answer: false');
console.log(isValidIP(' 1.2.3.4'), 'Answer: false');
console.log(isValidIP('1.2.3.4 '), 'Answer: false');
console.log(isValidIP('12.34.56.-7'), 'Answer: false');
console.log(isValidIP('1.2.3.4\n'), 'Answer: false');
console.log(isValidIP('\n1.2.3.4'), 'Answer: false');

