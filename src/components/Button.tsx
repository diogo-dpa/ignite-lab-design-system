import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
	children: ReactNode;
	asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
	// O Slot pega todas as propriedades e repassa para o 1º componente do children
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={clsx(
				"py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
			)}
		>
			{children}
		</Comp>
	);
}
