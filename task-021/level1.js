console.time();

function log(title,data) {console.log(`\u001b[32m${title}\u001b[30m: ${data}\u001b[0m`);}
{
    const array = [14,23,17,63,82,33,23,46];
    log('Original array',`[${array}]`)
    log('Lenght',array.length)
    log('First element',array[0])
    log('Middle element',array[Math.floor(array.length/2)])
    log('Last element',array[array.length-1])
} 
console.log(''); 
{
    const mixedDataTypes = [14, 'hello', true, undefined, null, {a:1}, [1,2]];
    log('Mixed Data Types',`[${
        mixedDataTypes.map(elem => {
            if(elem === undefined) return 'undefined';
            if(typeof elem === 'object') return JSON.stringify(elem);
            return elem
        })
    }]`)
    log('Length',mixedDataTypes.length)
}
console.log('');
{
    const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
    console.log(`${companies.map(elem => ' ' + elem)} are big Tech companies`)
    log('Number of companies is',companies.length)
    const middle = Math.ceil(companies.length/2)
    const last = companies.length - 1
    log('First company',companies[0])
    log('Middle company',companies[middle])
    log('Last company',companies[last]); console.log('')
    companies.forEach(e => console.log(e)); console.log('')
    companies.forEach(e => console.log(e.toUpperCase())); console.log('')
    const target = 'Netflix'
    if(companies.filter(e => e === target)){ console.log(`${target} not found.\n`)}
    for (let i = 0; i < companies.length; i++) {
        const word = companies[i]
        let sum = 0;
        for (let j = 0; j < word.length; j++) {
            const letter = word[j]
            if(letter === 'o' || letter === 'O') sum += 1;
        }
        if(sum > 1) console.log(`${word} has more than 1 letter 'o'`);
    }
    console.log(`\nSorted array is: [${companies.sort()}]`);
    console.log(`Reversed array is: [${companies.reverse()}]`);
    {
        let arr = [...companies];
        for (let i = 0; i < 3; i++) {
            arr.pop()
        }
        log('Last 3 elements were removed',arr);
    }
    {
        let arr = [...companies];
        for (let i = 0; i < 3; i++) {
            arr.shift()
        }
        log('First 3 elements were removed',arr+'\n');
    }
    { let arr = [...companies]; arr.pop(); log('First company removed', arr)}
    { let arr = [...companies]; arr.shift(); log('Last company removed', arr)}
    { let arr = [...companies]; 
        log('Middle company removed', arr.filter(e => e !== arr[middle])+'\n') 
    }
    while(companies.length > 0) {
        companies.pop();
    }
    console.log('All array is cleared');
    console.log(companies);
}

console.log('');
console.timeEnd();