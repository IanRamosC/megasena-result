let generateRandom = _ => {
  return (~~(Math.random() * 60)) + 1
}

let generateMegaSenaResult = (num = 6) => {
  let result = []
  
  while (result.length < num) {
    let number = generateRandom()
    
    if(result.indexOf(number) < 0) {
      result.push(number)
    }
  }

  return result.sort((a, b) => {
    return a - b
  }).join(', ')
}

module.exports = generateMegaSenaResult;
