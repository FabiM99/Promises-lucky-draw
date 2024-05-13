
  
function luckyDraw(player){
    return new Promise((resolve, reject) =>{
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() =>{
            win ? resolve(`${player} won a prize in the draw!`) : reject (new Error(`${player} lost the draw`))
        })
    })
}

luckyDraw("Joe")
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error.message);
  });

luckyDraw("Caroline")
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error.message);
  });

luckyDraw("Sabrina")
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error.message);
  });