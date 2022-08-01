import { useAtomValue } from 'jotai';
import { totalCountState } from './TotalBoard.atom';

const TotalBoard = () => {
	const totalCount = useAtomValue(totalCountState);
	return (
		<div className="bg-white mt-3 rounded-md">
			<h1>TotalCount : {totalCount}</h1>
		</div>
	);
};

export default TotalBoard;
