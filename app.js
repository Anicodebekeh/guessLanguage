import {franc, francAll} from 'franc'
import langs from 'langs'

const input = process.argv[2]
const shortLang = franc(input)


if(shortLang === 'und'){
    console.log("try another sample text")
}else{
    const language = langs.where('3', shortLang)
    console.log(language.name)
}

// console.log(language)




