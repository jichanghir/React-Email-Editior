export const addColumn = (id) => ({
	type: 'ADD_COLUMN',
	payload: {
		id,
		elements: []
	}
});

export const startSortingElements = ({fromColumnId, elemId}) => ({
	type: 'START_SORTING_ELEMENTS', 
	payload: {
		fromColumnId,
		elemId
	}
});

export const endSortingElements = ({toColumnId, elemId, newIndex}) => ({
	type: 'END_SORTING_ELEMENTS', 
	payload: {
		toColumnId,
		elemId,
		newIndex
	}
});