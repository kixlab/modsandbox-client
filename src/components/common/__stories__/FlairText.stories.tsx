import React from 'react';
import { Story, Meta } from '@storybook/react';
import FlairText, { FlairTextProps } from '../FlairText';

export default {
  title: 'components/common/FlairText',
  component: FlairText,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<FlairTextProps> = (args) => <FlairText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'flair',
};
