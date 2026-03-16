import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'tertiary',
                'ghost',
                'danger-primary',
                'danger-tertiary',
                'danger-ghost',
            ],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
        },
        icon: {
            control: 'text',
            description: 'Material Symbol string (e.g. "add", "arrow_forward")',
        },
        iconPosition: {
            control: 'radio',
            options: ['leading', 'trailing'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'lg',
        icon: 'add',
        iconPosition: 'trailing',
        disabled: false,
        skeleton: false,
        iconOnly: false,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Button variant="primary" icon="add">Primary</Button>
            <Button variant="secondary" icon="add">Secondary</Button>
            <Button variant="tertiary" icon="add">Tertiary</Button>
            <Button variant="ghost" icon="add">Ghost</Button>
            <Button variant="danger-primary" icon="add">Danger Primary</Button>
            <Button variant="danger-tertiary" icon="add">Danger Tertiary</Button>
            <Button variant="danger-ghost" icon="add">Danger Ghost</Button>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Button size="xs" icon="add">Extra Small</Button>
            <Button size="sm" icon="add">Small</Button>
            <Button size="md" icon="add">Medium</Button>
            <Button size="lg" icon="add">Large</Button>
        </div>
    ),
};

export const IconOnly: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="primary" icon="add" iconOnly aria-label="Add" />
            <Button variant="secondary" icon="add" iconOnly aria-label="Add" />
            <Button variant="tertiary" icon="add" iconOnly aria-label="Add" />
            <Button variant="ghost" icon="add" iconOnly aria-label="Add" />
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="primary" icon="add">Enabled</Button>
            <Button variant="primary" icon="add" disabled>Disabled</Button>
            <Button skeleton size="lg">Skeleton state</Button>
        </div>
    ),
};
