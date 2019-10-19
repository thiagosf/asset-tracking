export default {
  percentage (value, places = 2) {
    const formatedNumber = +(+value).toFixed(places)
    let signal = ''
    if (value > 0) {
      signal = '+'
    }
    return `${signal}${formatedNumber}%`
  }
}
