let generateRandom = _ => {
  return (~~(Math.random() * 60)) + 1
}

let generateMegaSenaResult = (num = 6, returnAsString = false) => {
  if (isNaN(num)) {
    throw new TypeError('The specified argument is not a number')
  }

  let result = []
    , _num = Math.min(num, 60)
  
  while (result.length < _num) {
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
