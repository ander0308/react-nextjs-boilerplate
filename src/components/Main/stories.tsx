import { Story, Meta } from '@storybook/react/types-6-0'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
    description: 'Description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Blabla',
  description: 'descrição do story Basic'
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'subscreve title default'
}

export const SemParams: Story = () => <Main />
