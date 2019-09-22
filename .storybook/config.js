import {
  configure,
  addParameters,
  addDecorator
} from '@storybook/react'
import '!style-loader!css-loader!sass-loader!../src/styles/styles.scss'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import StoryRouter from 'storybook-react-router'

addDecorator(StoryRouter())

configure(() => {
  const atoms = require.context('../stories/atoms', true, /\.stories\.js$/)
  atoms.keys().forEach(filename => atoms(filename))

  const molecules = require.context('../stories/molecules', true, /\.stories\.js$/)
  molecules.keys().forEach(filename => molecules(filename))

  const organisms = require.context('../stories/organisms', true, /\.stories\.js$/)
  organisms.keys().forEach(filename => organisms(filename))

  const templates = require.context('../stories/templates', true, /\.stories\.js$/)
  templates.keys().forEach(filename => templates(filename))

  const pages = require.context('../stories/pages', true, /\.stories\.js$/)
  pages.keys().forEach(filename => pages(filename))

  addParameters({
    viewport: INITIAL_VIEWPORTS
  })
}, module)
