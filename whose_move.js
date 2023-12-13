function whose_move(name , response){
    ((response === true) ? (name === 'black' ? console.log('black') : console.log('white')) : (name === 'white' ? console.log('black') : console.log('white')))
}


whose_move("black",false) 
whose_move("white",true) 
whose_move("white",false) 