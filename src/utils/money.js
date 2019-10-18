import numeral from 'numeral'

export default {
  format (value) {
    return numeral(+value).format('$0,0.00')
  }
}
