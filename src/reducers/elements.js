const defaultState = [];

export default function(state = defaultState, action) {
	switch(action.type) {
		case 'INIT_NEW_ELEMENT' : {
			return [...state, action.payload];
		}

		default :
			return state;
	}
}
