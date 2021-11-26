export type TNavigation = {
	navigate: (name: string, params?: {}) => void,
	reset: ({index, routes}: TReset) => void,
}

type TReset ={
	index: number,
	routes: Array<TParams>
}

type TParams = {
	name: string,
	params?: {}
}

