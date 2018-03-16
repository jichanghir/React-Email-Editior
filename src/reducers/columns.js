const defaultState = [
	{
		id: 11,
		elements: [111, 112]
	},
	{
		id: 12,
		elements: [22]
	},
];

export default function(state = defaultState, action) {
	switch(action.type) {
		case 'ADD_COLUMN' :
			return [...state, action.payload];

		default :
			return state;
	}
}