export const initNewElement = ({id, type}) => ({
	type: 'INIT_NEW_ELEMENT',
	payload: {
		id,
		type
	}
});



// export const sortElement = ({fromColumnId, toColumnId, elemId}) => (dispatch) => {

// 	// затем передаем id этих колонок в новый блок
// 	dispatch({
// 		type: 'ADD_BLOCK', 
// 		payload: {
// 			id: Math.random(),
// 			columns: columnsIds
// 		},
// 		meta: {
// 			newIndex // позиция в списке куда будет добавлен новый блок
// 		}
// 	});
// };
