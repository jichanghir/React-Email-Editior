export const initNewElement = ({id, type}) => (dispatch) => {

	let data = {};

	// Текст
	type === 1 && (
		data = {
			text: 'text',
			color: '#000000',
			lineHeight: '1em',
			borderStyle: 'none',
			borderWidth: '0px',
			borderColor: '#ffffff',
			paddingLeft: '0px',
			paddingRight: '0px',
			paddingTop: '0px',
			paddingBottom: '0px'
		}
	);

	// Картинка
	type === 2 && (
		data = {
			// src: null, // todo: пока нет загрузчика картинок
			src: 'https://img-fotki.yandex.ru/get/6514/137106206.1d4/0_9e1c6_5df44d4_orig.jpg', // todo: mock src
			alt: '',
			link: '',
			align: 'center',
			width: '100%',
			borderRadius: '0px',
			paddingLeft: '0px',
			paddingRight: '0px',
			paddingTop: '0px',
			paddingBottom: '0px'
		}
	);

	// Кнопка
	type === 3 && (
		data = {
			href: '',
			align: 'center',
			width: '170px',
			height: '37px',
			backgroundColor: '#08c9b9',
			borderRadius: '3px',
			text: 'Read More',
			color: '#ffffff',
			fontSize: '17px',
			fontFamily: '',
			fontWeight: 'normal',
			paddingLeft: '0px',
			paddingRight: '0px',
			paddingTop: '0px',
			paddingBottom: '0px'
		}
	);

	// Разделитель
	type === 4 && (
		data = {
			height: '1px',
			color: '#cccccc',
			paddingLeft: '0px',
			paddingRight: '0px',
			paddingTop: '10px',
			paddingBottom: '10px'
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
			align: 'center',
			style: '1',
			width: '40px',
			innerPadding: '10',
			socials: [
				{
					type: 'vkontakte',
					srcs: {
						'1': 'https://s.digitalcontact.com/social/cl_cr_vkontakte.png'
					},
					link: ''
				},
				{
					type: 'facebook',
					srcs: {
						'1': 'https://s.digitalcontact.com/editor/assets/minimalist-basic/soc/cl_cr_facebook.png'
					},
					link: ''
				},
				{
					type: 'telegram',
					srcs: {
						'1': 'https://s.digitalcontact.com/editor/assets/minimalist-basic/soc/cl_cr_telegram.png'
					},
					link: ''
				}
			],
			paddingLeft: '0px',
			paddingRight: '0px',
			paddingTop: '10px',
			paddingBottom: '10px'
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
