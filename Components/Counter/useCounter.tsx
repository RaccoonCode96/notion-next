// import {
// 	useRecoilState,
// 	useRecoilTransaction_UNSTABLE,
// 	useRecoilValue,
// } from 'recoil';
// import { countState, stepState } from './Counter.atom';

const useCounter = () => {
	// const increase = useRecoilTransaction_UNSTABLE(({ get, set }) => () => {
	// 	set(countState, get(countState) + get(stepState));
	// });
	// const decrease = useRecoilTransaction_UNSTABLE(({ get, set }) => () => {
	// 	set(countState, get(countState) - get(stepState));
	// });
	// const [step, setStep] = useRecoilState(stepState);
	// const count = useRecoilValue(countState);
	// return { increase, decrease, setStep, step, count };
};

export default useCounter;
