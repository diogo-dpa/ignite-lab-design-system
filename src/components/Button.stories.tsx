import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

// Propriedades globais para todas as variações
export default {
	title: "Components/Button",
	component: Button,
	args: {
		children: "Create account",
	},
	argTypes: {},
} as Meta<ButtonProps>;

// Passando propriedades
export const Default: StoryObj<ButtonProps> = {};
