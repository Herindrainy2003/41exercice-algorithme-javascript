lesLetrres = {0 : 'zero ' , 1 : 'un ' , 2 : 'deux ' ,3 : 'trois ' ,4 :'quatres ' , 5 : 'cinq ' , 6 : 'six ' , 7 : 'sept' , 8 : 'huit' , 9 : 'neuf' }

tolettres = (number) => (number).split('').map((n) => `${n} : ${lesLetrres[n]} , `).join('')

console.log(tolettres('1234567890'))