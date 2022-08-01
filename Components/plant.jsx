import { useEffect, useRef } from 'react';
import PlantUmlEncoder from 'plantuml-encoder';

export default function PlantUml({ children }) {
	const ref = useRef(null);
	useEffect(() => {
		ref.current.src = `http://www.plantuml.com/plantuml/img/${PlantUmlEncoder.encode(
			children
		)}`;
	}, []);
	return <img src="" alt="loading" ref={ref} />;
}
