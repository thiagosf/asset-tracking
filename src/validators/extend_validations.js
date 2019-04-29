import v8n from 'v8n'
import isemail from 'isemail'

v8n.extend({
  validEmail: () => {
    return value => isemail.validate(value)
  }
})
