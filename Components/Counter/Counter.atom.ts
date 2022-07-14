import {
	atom,
	atomFamily,
	DefaultValue,
	selector,
	useRecoilTransaction_UNSTABLE,
} from 'recoil';

export const countState = atom({
	key: 'countState',
	default: 0,
});

export const stepState = atom({
	key: 'stepState',
	default: 1,
});

export const levelState = selector({
	key: 'levelState',
	get: ({ get }) => 'increase',
	set: ({ set, get }, newValue) => {
		const step = get(stepState);
		const count = get(countState);
		let level = 0;
		switch (newValue) {
			case 'increase': {
				level = count + step;
				break;
			}
			case 'decrease': {
				level = count - step;
				break;
			}
		}
		set(countState, level);
	},
});
