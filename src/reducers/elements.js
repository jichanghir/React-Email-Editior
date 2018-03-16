const defaultState = [
	{
		id: 111,
		content: 'element 111'
	},
	{
		id: 112,
		content: 'element 112'
	},
	{
		id: 22,
		content: 'element 22'
	},
];


export default function(state = defaultState, action) {
	switch(action.type) {
		case 'ADD_ELEMENT' :
			return [...state, action.payload];

		default :
			return state;
	}
}