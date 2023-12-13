longestWord = (s) => s.split(' ').reduce((a,w)=> w.length>=a.length ? w : a)

console.log(longestWord('une vie sans air'))

