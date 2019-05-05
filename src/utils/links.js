import routes from '../routes'

export default {
  get (name) {
    const link = routes.routes.find(item => item.name === name)
    if (link) {
      return link.path
    }
  }
}
