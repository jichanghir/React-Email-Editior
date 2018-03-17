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

		case 'START_SORTING_ELEMENTS' : 
			return state.map((column) => {
				if (column.id === action.payload.fromColumnId) {
					const elements = column.elements.filter((elementId) => elementId !== action.payload.elemId);
					return {
						...column,
						elements
					}
				}
				else return column;
				
			});

		case 'END_SORTING_ELEMENTS' : 
			return state.map((column) => {
				if (column.id === action.payload.toColumnId) {

					let newElements = [...column.elements];
					newElements.splice(action.payload.newIndex, 0, action.payload.elemId);

					return {
						...column,
						elements: newElements
					}
				}
				else return column;
			});

		default :
			return state;
	}
}