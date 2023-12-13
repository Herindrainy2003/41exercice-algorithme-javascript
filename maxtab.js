
// maxtab = (tab) =>tab.reduce((a , b) => (a < b ) ? a : b) //si min//
maxtab = (tab) => tab.reduce((a , b) => (a > b ) ? a : b) //si max

console.log(maxtab([49000,6,78,34,56,900]))