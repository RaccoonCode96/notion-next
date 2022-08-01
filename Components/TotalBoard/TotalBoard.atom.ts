import { atom } from 'jotai';
import { splitAtom } from 'jotai/utils';

export const totalCountState = atom(0);

export const countersAtom = atom([
	{ id: 1, count: 0, step: 1, label: 'A' },
	{ id: 2, count: 0, step: 1, label: 'B' },
	{ id: 3, count: 0, step: 1, label: 'C' },
]);

export const countersAtomAtoms = splitAtom(countersAtom);
