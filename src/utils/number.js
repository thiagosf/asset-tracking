export default {
  percentage (value, places = 2) {
    const formatedNumber = +(+value).toFixed(places)
    return `${formatedNumber}%`
  }
}
