const defaultState = {
	sortedElementID: null
};

export default function(state = defaultState, action) {
	switch(action.type) {
		case 'SET_SORTED_ELEMENT' :
			return {
				sortedElementID: action.payload.elemID
			}

		case 'DELETE_SORTED_ELEMENT' : 
			return {
				ortedElementID: null
			}

		default :
			return state;
	}
}