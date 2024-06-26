console.time(); // Timer
const color = { // Colors
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    gray: '\x1b[90m',
    greenBright: '\x1b[92m',
}
const log = {
    log: (data) => { console.log(data) },
    head: (data) => { log.log(`\n${color.cyan}${data}\n\x1b[0m`); },
    fail: (data, num) => { log.log(`${color.red}${data}: ${color.yellow}${num}\x1b[0m`) },
    success: (data, num) => { log.log(`${color.green}${data}: ${color.greenBright}${num}\x1b[0m`) },
    reset: () => { console.log('\x1b[0m') },
    result: (data, num) => { log.log(`${data}: ${color.gray}${num}${color.reset}`) }
}
const data = {
    num: [-34,23,-24,56,56,43,37,12,-55,66,67,56,93,92,-3,91,44,43,54,90],
    str: 'Hello guys! How are you?',
    words: 
    [  
        'blues', 
        'pneumatic', 
        'kayak', 
        'screamed',
        'catawampus',
        'rotator', 
        'unwooled',
        'deified', 
    ],
    string: [
        '1234', 'abcd', '7890', 'xyz1',
        '4567', 'fghi', '890a', 'z234',
        '90ab', 'cdef', '1012', 'yz56',
        '56g7', 'hijk', '34ab', '90z1',
    ],
    vowels: ['a', 'e', 'i', 'o', 'u', 'y'],
}
function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


log.head('Basic arithmetics'); {
    console.log(23 + 54, 'Add: 23 + 54') 
    console.log(123 - 78, 'Subtract: 123 - 78') 
    console.log(4 * 7, 'Multiply: 4 * 7') 
    console.log(144 / 12, 'Divide: 144 / 12') 
}

log.head('Check if number is odd or even')
for (let i = 0; i < data.num.length; i++) {
    if(data.num[i] % 2 == 0){
        log.success('This number is even', data.num[i])
    } else {
        log.fail('This number is odd', data.num[i])
    } 
}

log.head('Check if number is prime or not')
for (let i = 0; i < data.num.length; i++) {
    let x = data.num[i];
    if(x < 2){
        log.fail('This number is not prime', x)
    } else {
        let isPrime = true;
        for(let j = 2, s = Math.sqrt(x); j <= s && isPrime; j++) {
            if(x % j === 0) {
                isPrime = false;
            }
        }
        if(isPrime) {
            log.success('This number is prime', x);
        } else {
            log.fail('This number is not prime', x);
        }
    }
}

log.head('Min and max number'); {
    let a = [12,43]
    let b = [172,52]
    let c = [7,7]
    let d = [a,b,c]
    for (let i = 0; i < d.length; i++) {
        let y = d[i];
        if(y[0] === y[1]) log.log('The numbers are equal')
        else if(y[0] > y[1]) { log.success('The max number is', y[0]); log.fail('The min number is', y[1]); }
        else if(y[0] < y[1]) { log.success('The max number is', y[1]); log.fail('The min number is', y[0]); }
    }
}

log.head('Basic statistics'); {
    let sum = 0;
    const arr = data.num.sort();
    const l = data.num.length;

    for (let i = 0; i < l; i++) {
        sum += data.num[i];
    }
    log.log(`The sum is: ${sum}`)
    log.log(`The average is: ${Math.floor(sum / data.num.length)}`)
    if(l % 2 === 1){
        log.log(`Median is: ${arr[l/2]}`)
    } else {
        log.log(`Median is: ${(arr[l/2] + arr[l/2 + 1]) / 2}`)
    }

    const f = [...new Set(arr)];
    let frequency = {}
    for (let i = 0; i < f.length; i++) {
        frequency[f[i]] = 1;
    }
    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] += 1;
    }
    let frequencyArr = Object.entries(frequency);
    let maxFrequency = [];
    for (let i = 0; i < frequencyArr.length; i++) {
        maxFrequency.push(frequencyArr[i][1])
    }
    maxFrequency.sort();
    maxFrequency = maxFrequency[maxFrequency.length - 1]
    for (let i = 0; i < frequencyArr.length; i++) {
        if (frequencyArr[i][1] === maxFrequency) {
            let mode = frequencyArr[i][0];
            log.log(`This number is mode: ${mode} of ${arr}`)
        } else continue;
    }
}

log.head('Reversing string'); {
    let original = data.str;
    const len = original.length;
    let reverse = '';
    for (let i = 0; i < len; i++) {
        reverse += original[len - i - 1];
    }
    log.log(`\"${reverse}\" is reverse of \"${original}\"`)
}

log.head('Find palindrome words'); {
    for (let i = 0; i < data.words.length; i++) {
        const word = data.words[i]
        if(word[0] === word[word.length - 1]){
            log.success('This number is palindrome', word)
        } else {
            log.fail('This number is not palindrome', word)
        }
    }
}

log.head('Make string uppercase and lowercase'); {
    log.log(`Original string is \"${data.str}\"`);
    log.log(`Uppercase string is \"${data.str.toUpperCase()}\"`);
    log.log(`Lowercase string is \"${data.str.toLowerCase()}\"`);
}

log.head('Capitalize first letter'); {
    let words = data.words;
    let result = [];
    for (let i = 0; i < words.length; i++) {
        result.push(words[i][0].toUpperCase())
    }
    for (let i = 0; i < words.length; i++) {
        console.log(words[i].replace(words[i][0], result[i]))
    }
}

log.head('Finding number of vowels and consonants'); {
    for (let i = 0; i < data.words.length; i++) {
        let word = data.words[i];
        let len = word.length;
        let vowel = 0;
        let consonant = 0;
        for (let j = 0; j < len; j++){
            let letter = word[j];
            if( data.vowels.indexOf(letter.toLowerCase()) !== -1 ) {
                vowel++;
            } else {
                consonant++;
            }
        }
        log.log(`This word has ${color.magenta}${vowel} vowels ${color.reset}and ${color.blue}${consonant} consonats. ${color.reset}(${word})\n`)
        log.log(`Without vowels: ${color.magenta}${word.replace(/[aeiou]/gi, '')}${color.reset}`)
        log.log(`Without consonants: ${color.blue}${word.replace(/[^aeiouAEIOU]/gi, '')}${color.reset}`)
    }
}

log.head('Finding if string contains only numbers or letters'); {
    const digits = /[\d]/gi;
    const letters = /[A-Za-z]/gi;
    const str = data.string;
    for (let i = 0; i < str.length; i++) {
        let text = str[i];
        if(text.match(digits) === null){
            log.success('This string contains only letter', text)
        } else if (text.match(letters) == null){
            log.success('This string contains only numbers', text)
        } else {
            log.fail('This string is mixed with numbers and letters', text)
        }
    }
}

log.head('Generating random numbers'); {
    for (let i = 0; i < 30; i++) {
       log.result('Random number ranged between 10 and 100', random(10,100))
    }
}

log.head('Generating random string'); {
    const lowercase = 'qwertyuiopasdfghjklzxcvbnm';
    const uppercase = lowercase.toUpperCase();
    const numbers = '0123456789';
    const special = '!@#$%^&*()-=_+{}[]:;"\',.<>/?\\|/*';
    const mixed = lowercase+uppercase+numbers+special;
    let result = '';
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 30; j++) {
            const char = random(0, mixed.length);
            result += mixed[char];
        }
        log.result('Generated string from random letters', result)
        result = '';
    }
}

log.head('Find factorials'); {
    for (let i = 0; i < 10; i++) {
        const depth = random(0, 15);
        let stage = 1;
        let result = 1;
        if(depth === 0){
            log.result('Factorial is', 1)
        } else {
            for (let j = 0; j < depth; j++) {
                if(stage === depth){
                    log.result('Factorial is', result)
                } else {
                    stage += 1;
                    result = result * stage;
                }
            }
        }
        result = 1;
    }
}

log.head('Checking for perfect squares'); {
    for (let i = 0; i < 20; i++) {
        const num = random(-10,10);
        if (num === 0){
            log.log(`${color.red}0 can\'t have square root!${color.reset}`);
        } else if (num < 0){
            const sqrt = Math.sqrt(Math.abs(num));
            if(sqrt % 1 === 0){
                log.success(`${color.magenta}Imaginary number:${color.green} The perfect square`, num + ` | ${color.magenta}Sqrt: ${sqrt}i${color.reset}`)
            } else {
                log.fail(`${color.magenta}Imaginary number:${color.green} Not perfect square`, num + ` | ${color.magenta}Sqrt: ${sqrt.toFixed(5)}i${color.reset}`)
            }
        } else if (num > 0){
            const sqrt = Math.sqrt(num);
            if(sqrt % 1 === 0){
                log.success('The perfect square', num + ` | Sqrt: ${sqrt}`)
            } else {
                log.fail('Not perfect square', num + ` | Sqrt: ${sqrt.toFixed(5)}`)
            }
        }    
    }
}

log.reset()
console.timeEnd()

