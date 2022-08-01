import { Provider, useAtom } from 'jotai';
import type { NextPage } from 'next';
import Counter from '../Components/Counter';
import TotalBoard from '../Components/TotalBoard';
import { countersAtomAtoms } from '../Components/TotalBoard/TotalBoard.atom';

interface HomeProps {
	database: any[];
}

const Home: NextPage<HomeProps> = ({ database }) => {
	const [counters, setCounters] = useAtom(countersAtomAtoms);
	return (
		<div className="w-full h-screen bg-slate-300">
			<div className="px-2 fixed h-12 text-3xl text-white font-bold bg-slate-600 w-full">
				ToDo App
			</div>
			<div className="pt-16 px-3">
				<div className=" flex gap-3">
					<Provider>
						<Counter label="A" />
					</Provider>
					<Provider>
						<Counter label="B" />
					</Provider>
					<Provider>
						<Counter label="C" />
					</Provider>
				</div>
				<TotalBoard />
			</div>
		</div>
	);
};

export default Home;
