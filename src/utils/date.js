import fecha from 'fecha'
import * as timeago from 'timeago.js'

export default {
  formatToChart (date) {
    const fechaDate = fecha.parse(date, 'YYYY-MM-DD')
    return fecha.format(fechaDate, 'MMMM YYYY')
  },
  formatDatetime (date) {
    const fechaDate = fecha.parse(date, 'YYYY-MM-DD HH:mm:ss')
    return fecha.format(fechaDate, 'HH:mm:ss DD/MM/YYYY')
  },
  timeago (date) {
    const formatedDate = fecha.parse(date, 'YYYY-MM-DD HH:mm:ss')
    return timeago.format(formatedDate, 'pt_BR')
  }
}
