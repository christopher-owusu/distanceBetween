const subLength = (str, char) => {
    let firstIndex = str.indexOf(char)
    let lastIndex = str.lastIndexOf(char)
    let distance = lastIndex - (firstIndex - 1)
    let count = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++
      }
    }
    if (count !== 2) {
      return 0
    } else if(count === 1) {
      return 0
    }
    return distance
  }

console.log(subLength('cock', 'c'));