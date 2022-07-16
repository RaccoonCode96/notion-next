import { atom } from 'jotai';

export const countState = atom(0);
export const stepState = atom(1);
export const countAction = atom(
	null,
	(get, set, update: 'increase' | 'decrease') => {
		switch (update) {
			case 'increase': {
				set(countState, get(countState) + get(stepState));
				break;
			}
			case 'decrease': {
				set(countState, get(countState) - get(stepState));
				break;
			}
		}
	}
);
