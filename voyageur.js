/**
 * cette algorithme peut definir les frais des places de voyageurs a chaque destination par 
 * exemple 
 * CalculeFrais('toliara' , 3) ->120000 ar (400000 ar / places)
 */

let Frais = {'toliara': 40000 , 'tananarivo' : 35000 ,'ihosy' : 10000 , 'Manakara' : 175000 }

 calculeFrais = (destination , places) =>{
    destination = destination.toLowerCase();
   return  (destination in Frais ?  Frais[destination] * places : `trouvez des autres cooperative`)
}

console.log(calculeFrais('ToLiara', 2))
console.log(calculeFrais('iHOsy', 4))
console.log(calculeFrais('mahajanga', 4))
