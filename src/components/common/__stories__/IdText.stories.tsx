import React from 'react';
import { Story, Meta } from '@storybook/react';
import IdText, { IdTextProps } from '../IdText';

export default {
  title: 'components/common/IdText',
  component: IdText,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<IdTextProps> = (args) => <IdText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'id',
};