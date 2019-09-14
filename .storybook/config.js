import { configure } from '@storybook/react'
import '!style-loader!css-loader!sass-loader!../src/styles/styles.scss';

configure(() => {
  const req = require.context('../stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}, module)
