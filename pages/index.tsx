import { Provider } from 'jotai';
import type { NextPage } from 'next';
import Counter from '../Components/Counter';

interface HomeProps {
	database: any[];
}

const Home: NextPage<HomeProps> = ({ database }) => {
	return (
		<div className="w-full h-screen bg-slate-300">
			<div className="px-2 fixed h-12 text-3xl text-white font-bold bg-slate-600 w-full">
				ToDo App
			</div>
			<div className="pt-16 px-3 flex flex-col gap-3">
				<Provider>
					<Counter label="A" />
				</Provider>
				<Provider>
					<Counter label="B" />
				</Provider>
			</div>
		</div>
	);
};

export default Home;
