import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Text',
  text: 'text',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Text',
  text: 'text',
  theme: TextTheme.ERROR,
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
  title: 'Text',
}

export const onlyText = Template.bind({})
onlyText.args = {
  text: 'text',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Text',
  text: 'text',
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
  title: 'Text',
}

onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
  text: 'text',
}

onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
