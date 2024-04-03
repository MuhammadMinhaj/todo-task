import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox } from '../checkbox';
import List from './List';
import { ListItem } from './list-item';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Core/List',
  component: List,
  subcomponents: { ListItem, Checkbox },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), className: 'w-[370px]' }
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem className=" group">
        L1
        <Checkbox id="l1" />
      </ListItem>
      <ListItem>
        L2
        <Checkbox id="l2" />
      </ListItem>
      <ListItem>
        L3
        <Checkbox id="l3" />
      </ListItem>
    </List>
  )
};
