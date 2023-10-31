import type { Meta, StoryObj } from '@storybook/react'
import { Icons } from './Icons'

const meta = {
  title: 'Example/Icons',
  component: Icons
  // parameters: {
  //   layout: 'centered'
  // }
  // tags: ['autodocs']
} satisfies Meta<typeof Icons>

export default meta
type Story = StoryObj<typeof meta>

export const IconsAll: Story = {
  args: {
    color: 'gray-500',
    size: 24,
    strokeWidth: 1.5
  }
}
