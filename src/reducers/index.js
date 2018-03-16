import { combineReducers } from 'redux';

import blocks from './blocks';
import columns from './columns';
import elements from './elements';

export default combineReducers({
	blocks,
	columns,
	elements
});