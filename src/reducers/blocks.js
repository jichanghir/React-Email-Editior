const defaultState = [
	{
		id: 1,
		columns: [11, 12]
	}
];

export default function(state = defaultState, action) {
	switch (action.type) {
		case 'ADD_BLOCK' : {
			let newState = [...state];
			newState.splice(action.meta.newIndex, 0, action.payload);
			
			return newState;
		}
			
		case 'SORTING_BLOCKS' : {
			let newState = [...state];
			const elemMass = newState.splice(action.payload.oldIndex, 1);
			newState.splice(action.payload.newIndex, 0, elemMass[0]);

			return newState;
		}

		default :
			return state;
	}
}