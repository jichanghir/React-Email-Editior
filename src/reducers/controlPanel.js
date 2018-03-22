const defaultState = {
	selectedCategory: 'structure'
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_CATEGORY' : {
			return {
				...state,
				selectedCategory: action.payload.selectedCategory
			}
		}

		default : 
			return state;	
	}
};