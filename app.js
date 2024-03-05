import {franc, francAll} from 'franc'
import langs from 'langs'
import colors from 'colors'

const input = process.argv[2]
const shortLang = franc(input)


if(shortLang === 'und'){
    console.log("try another sample text".red)
}else{
    const language = langs.where('3', shortLang)
    console.log(`our best guess is ${language.name.green}`)
}





