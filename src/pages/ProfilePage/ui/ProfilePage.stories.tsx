import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import ProfilePage from './ProfilePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ProfilePage>

type AllProps = Record<string, any>

const Template: ComponentStory<typeof ProfilePage> = (args: AllProps) => (
  <ProfilePage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
