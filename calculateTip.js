// function calculateTip(number , notes){
//     switch(notes){
//         case( 'excellent'):
//             return Math.round(number * 20 / 100)
        
//         case('Great'):
//             return Math.round(number * 15 / 100)
            
//         case('Poor'):
//             return Math.round(number * 5 / 100)
           
//         case('Good'):
//             return Math.round(number * 10 / 100)
            
//         case('Terrible'):
//             return Math.round(number * 0 / 100)
           
//         default :
//             return `rating not recosigned`
//         }
//     }
const TIPS = {"terrible":0.0, "poor":0.05, "good":0.1, "great":0.15,"excellent":0.2};

const calculateTip = (amount, rating) => {
rating = rating.toLowerCase();

return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";

};


console.log(calculateTip(20, "excellent")) 
console.log(calculateTip(26.95, "Good"))
console.log(calculateTip(20, "hi")) 
    
