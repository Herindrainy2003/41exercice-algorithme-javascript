const colourAssociation = (array) => array.map(([c,asso])=>({[c]:asso}))
console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))