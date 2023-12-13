let countLower = (phrase)=>{
   let Lower_word = ['a','o','e','i','y','u']
   let word = phrase.split('')
   let mot = []
   word.forEach(element => {
        // (element in Lower_word ? mot.push(element) : null)
        (Lower_word.includes(element) ?  mot.push(element)  : null)  
   });
   console.log(mot.length)
}

countLower('ceci est un ')