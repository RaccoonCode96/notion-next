import { useRecoilState, useRecoilValue } from 'recoil';
import { countState, stepState } from './Counter.atom';
import useCounter from './useCounter';
interface Props {
	label: string;
}
const Center = ({ label }: Props) => {
	// const { count, step } = useRecoilValue(counterState);
	return (
		<div className="col-span-3 px-2 bg-gray-500 rounded-lg text-white text-center text-6xl flex items-center justify-center">
			<div>
				<Step />
				<Number />
			</div>
		</div>
	);
};
const Step = () => {
	// const [step, setStep] = useRecoilState(stepState);
	// const { step, setStep } = useCounter();
	const [step, setStep] = useRecoilState(stepState);

	return (
		<div className="flex gap-2 text-lg">
			<span>Step</span>
			<input
				className="w-12 text-black"
				type="number"
				value={step}
				onChange={(e) => setStep(parseInt(e.target.value))}
			/>
		</div>
	);
};

const Number = () => {
	// const { count } = useCounter();
	// const count = useRecoilValue(countState);
	const count = useRecoilValue(countState);

	return <div>{count}</div>;
};

export default Center;
