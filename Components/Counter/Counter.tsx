import { countAction } from './Counter.atom';
import Center from './Center';
import SetNumber from './SetNumber';
import { PrimitiveAtom, useSetAtom } from 'jotai';

interface Props {
	label: string;
}

const Counter = ({ label }: Props) => {
	const changeCount = useSetAtom(countAction);

	return (
		<div className="grid grid-cols-5 gap-3 w-full h-96 bg-white  rounded-lg overflow-hidden shadow-xl">
			<SetNumber text="-" onClick={() => changeCount('decrease')} />
			<Center label={label} />
			<SetNumber text="+" onClick={() => changeCount('increase')} />
		</div>
	);
};

export default Counter;
