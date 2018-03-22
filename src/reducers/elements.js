const defaultState = [
	{
		id: 111,
		type: 4,
		data: { 
			text: 'Разделитель'
		}
	},
	{
		id: 112,
		type: 3,
		data: { 
			text: 'Кнопка'
		}
	},
	{
		id: 22,
		type: 1,
		data: { 
			text: 'Текст'
		}
	},
];


export default function(state = defaultState, action) {
	switch(action.type) {
		case 'INIT_NEW_ELEMENT' : {
			return [...state, action.payload];
		}

		default :
			return state;
	}
}