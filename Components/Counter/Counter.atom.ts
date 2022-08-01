import { atom } from 'jotai';
import { focusAtom } from 'jotai/optics';

export interface Counter {
	id: number;
	label: string;
	count: number;
	step: number;
}

export const counterState = atom({
	count: 0,
	step: 1,
});
export const countState = focusAtom(counterState, (optic) =>
	optic.prop('count')
);
export const stepState = focusAtom(counterState, (optic) => optic.prop('step'));

export const countAction = atom(
	null,
	(get, set, update: 'increase' | 'decrease') => {
		switch (update) {
			case 'increase': {
				set(countState, get(counterState).count + get(counterState).step);
				break;
			}
			case 'decrease': {
				set(countState, get(counterState).count - get(counterState).step);
				break;
			}
		}
	}
);

const useCounter = () => {};
