import { initNewElement } from './elements';

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

export const addElement = ({toColumnId, newIndex, type}) => (dispatch) => {
	// сначала инициализируем элемент, и добавляем его в state
	const id = Math.random();
	dispatch(initNewElement({id, type}));
};