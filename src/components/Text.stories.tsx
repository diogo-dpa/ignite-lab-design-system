import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

// Propriedades globais para todas as variações
export default {
	title: "Components/Text",
	component: Text,
	args: {
		children: "Lorem ipsum",
		size: "md",
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			control: {
				type: "inline-radio",
			},
		},
	},
} as Meta<TextProps>;

// Passando propriedades
export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
	args: {
		size: "sm",
	},
};

export const Large: StoryObj<TextProps> = {
	args: {
		size: "lg",
	},
};

export const CustomComponent: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: <p>Text with p tag</p>,
	},
	argTypes: {
		// Não mostra o children da tabela de propriedades
		children: {
			table: {
				disable: true,
			},
		},
		asChild: {
			table: {
				disable: true,
			},
		},
	},
};
