import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button'
  }
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button'
  }
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    disabled: true
  }
}

// export const Large: Story = {
//   args: {
//     size: 'large',
//     children: 'Button'
//   }
// };

// export const Medium: Story = {
//   args: {
//     size: 'medium',
//     children: 'Button'
//   }
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     children: 'Button'
//   }
// };