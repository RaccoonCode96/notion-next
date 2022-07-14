import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
	text: string;
}

const SetNumber = ({ text, ...rest }: Props) => {
	return (
		<button {...rest} className="bg-gray-700 text-5xl rounded-lg text-white">
			{text}
		</button>
	);
};

export default SetNumber;
