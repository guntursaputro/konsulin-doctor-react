const numberSeparator = (number: number, separator = ".") => {
  if (typeof number !== 'number') return 0

  let str = number.toString()
  let str_split = str.split('.')

  let str_1 = str_split[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)

  if (str_split[1]) {
    return str_1 + ',' + str_split[1].substring(0, 2)
  }

  return str_1

}

export default numberSeparator