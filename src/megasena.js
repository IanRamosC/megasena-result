let generateRandom = _ => {
  return (~~(Math.random() * 60)) + 1
}

let pad = num => {
  return (num < 10) ? Number('0' + num) : num
}

let generateMegaSenaResult = (num = 6, returnAsString = false) => {
  if (isNaN(num)) {
    throw new TypeError('The specified argument is not a number');
  }

  let result = []
  
  while (result.length < num) {
    let number = pad(generateRandom())
    
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
