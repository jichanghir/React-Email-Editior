export const addColumn = (id) => ({
	type: 'ADD_COLUMN',
	payload: {
		id,
		elements: []
	}
});