import { addColumn } from './columns';

export const addBlock = ({type, newIndex}) => (dispatch) => {

	// сначала инициализируем колонки, и добавляем их в state
	let columnsIds = [];
	for (var i = 0; i < +type; i++) {
		const id = Math.random();
		columnsIds.push(id);
		dispatch(addColumn(id));
	}

	// затем передаем id этих колонок в новый блок
	dispatch({
		type: 'ADD_BLOCK', 
		payload: {
			id: Math.random(),
			columns: columnsIds
		},
		meta: {
			newIndex // позиция в списке куда будет добавлен новый блок
		}
	});
};

export const sortingBlocks = ({oldIndex, newIndex}) => ({
	type: 'SORTING_BLOCKS',
	payload: {
		oldIndex,
        newIndex
	}
});