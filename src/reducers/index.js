import { combineReducers } from 'redux';

import blocks from './blocks';
import columns from './columns';
import elements from './elements';
import sortedElement from './sortedElement';

export default combineReducers({
	blocks,
	columns,
	elements,
	sortedElement
});