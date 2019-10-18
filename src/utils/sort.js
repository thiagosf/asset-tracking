export default {
  sortNumbers (values, direction) {
    return values
      .map(item => +item)
      .sort((a, b) => {
        if (direction === 'asc') {
          return a - b
        }
        return b - a
      })
  }
}
