let generateRandom = _ => {
  return (~~(Math.random() * 60)) + 1
}

let generateMegaSenaResult = (num = 6, returnAsString = false) => {
  let result = []
  
  while (result.length < num) {
    let number = generateRandom()
    
    if(result.indexOf(number) < 0) {
      result.push(number)
    }
  }

  result.sort((a, b) => {
    return a - b
  })

  return (returnAsString) ? result.join(', ') : result
}

module.exports = generateMegaSenaResult;
