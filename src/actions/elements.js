export const initNewElement = ({id, type}) => (dispatch) => {

	let data = {};

	// Текст
	type === 1 && (
		data = {
			text: 'text'
		}
	);

	// Картинка
	type === 2 && (
		data = {
			text: 'Картинка'
		}
	);

	// Кнопка
	type === 3 && (
		data = {
			text: 'Кнопка'
		}
	);

	// Разделитель
	type === 4 && (
		data = { 
			text: 'Разделитель'
		}
	);

	// Видео
	type === 5 && (
		data = {
			text: 'Видео'
		}
	);

	// Соц сети
	type === 6 && (
		data = {
			text: 'Соц сети'
		}
	);

	dispatch({
		type: 'INIT_NEW_ELEMENT',
		payload: {
			id,
			type,
			data
		}
	});
};



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
