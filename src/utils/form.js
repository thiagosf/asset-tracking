export default {
  getErrors (name, errors) {
    let output = []
    if (errors[name]) {
      output = errors[name]
    }
    return output
  }
}
