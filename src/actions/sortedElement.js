export const setSortedElement = (elemID) => dispatch => {

	dispatch({
		type: 'SET_SORTED_ELEMENT',
		payload: {
			elemID
		}
	});
	
};