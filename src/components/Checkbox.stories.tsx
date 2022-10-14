import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

// Propriedades globais para todas as variações
export default {
	title: "Components/Checkbox",
	component: Checkbox,
	args: {},
	argTypes: {},
	// Para adicionar o elemento em um contexto
	decorators: [
		(Story) => {
			return (
				<div className="flex items-center gap-2">
					{Story()}
					<Text>Lembrar-me de mim por 30 dias</Text>
				</div>
			);
		},
	],
} as Meta<CheckboxProps>;

// Passando propriedades
export const Default: StoryObj<CheckboxProps> = {};
