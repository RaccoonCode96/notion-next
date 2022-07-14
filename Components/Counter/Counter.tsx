import {
	useRecoilTransaction_UNSTABLE,
	useRecoilValue,
	useSetRecoilState,
} from 'recoil';
import { countState, levelState, stepState } from './Counter.atom';
import Center from './Center';
import SetNumber from './SetNumber';
import useCounter from './useCounter';

interface Props {
	label: string;
}

const Counter = ({ label }: Props) => {
	// const { increase, decrease } = useCounter();
	const increase = useRecoilTransaction_UNSTABLE(({ get, set }) => () => {
		set(countState, get(countState) + get(stepState));
	});
	const decrease = useRecoilTransaction_UNSTABLE(({ get, set }) => () => {
		set(countState, get(countState) - get(stepState));
	});
	// const setCount = useSetRecoilState(countState);
	// const step = useRecoilValue(stepState);
	// const setLevel = useSetRecoilState(levelState);
	return (
		<div className="grid grid-cols-5 gap-3 w-full h-96 bg-white  rounded-lg overflow-hidden shadow-xl">
			<SetNumber text="-" onClick={() => decrease()} />
			<Center label={label} />
			<SetNumber text="+" onClick={() => increase()} />
		</div>
	);
};

export default Counter;
