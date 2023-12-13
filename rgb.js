var color2grey = function (image) {
    return image.map(c=>c.map(k=>{g = Math.round((k[0]+k[1]+k[2])/3); return [g,g,g]}))
    }

let tab = [
    [[123, 231, 12], [56, 43, 124]],
    [[78, 152, 76], [64, 132, 200]]
  
    ]

console.log(color2grey(tab))