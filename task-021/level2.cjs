{ 
    const countries = require('./json/countries.json')
    const languages = require('./json/tech.json')
    console.log(`There are total ${countries.length} in the world.`)
    countries.forEach((e,i) => console.log(`${i+1} - ` + e))
    console.log(`\nThe list of ${languages.length} programming languages.`)
    languages.forEach((e,i) => console.log(`${i+1} - ` + e))
}
{
    const textOriginal = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
    const text = ' ' + textOriginal + ' '
    let spaces = []
    let words = []
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        if(letter === ' ') spaces.push(i) 
    }
    let index = -1;
    for (let i = 0; i < text.length; i++) {
        const letter = text[i]
        if(letter === ' '){ 
            index += 1;
            if(spaces[index+1] === undefined) continue
            else {
                let nextSpace = spaces[index+1];
                words.push(text.substring(i,nextSpace).replace(' ',''))
            }
        }
    }
    console.log(`Original text: ${text}`);
    console.log('Text splitted into array of words:');
    console.log(words);
}
{
    const readline = require('node:readline');
    const card = ['Milk', 'Honey', 'Tea']
    const products = ['Egg', 'Cheese', 'Bread', 'Apple', 'Carrot'] 
    console.log(`All products: ${products.concat(card)}`);
    console.log('Your card:');
    card.forEach((e,i) => console.log(`${i+1} - ${e}`))
    function showProducts(){
        console.log('\nAvalible products:\n0 - exit');
        products.forEach((elem, i) => console.log(`${i+1} - ${elem}`))
    }
    function prompt(){
        showProducts()
        const select = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        select.question('\nWhich product you want add your card? (enter the index)\n', i => {
        const product = products[i-1];
        if(product === undefined) { 
            if (i == 0) {select.close(); return}
            else console.log('\nInvalid index');
            select.close()
            prompt()
        } else {
            select.close()
            const action = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            })
            console.log(`\n1 - exit\n2 - add\n`)
            action.question('\nWhich action you want to perform?', act => {
                if (act === "1") {
                    action.close()
                    prompt()
                } else if (act === "2") {
                    card.push(product)
                    products.splice(products.indexOf(product), 1)
                } else {
                    console.log('Invalid option\n');
                }
                action.close();
                console.log('\nYour card:');
                card.forEach((e,i) => console.log(`${i+1} - ${e}`))
                console.log('\n');
                prompt()
            })
        }; 
    })}
    prompt()
}