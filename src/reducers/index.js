import { combineReducers } from 'redux';

import blocks from './blocks';
import columns from './columns';
import elements from './elements';
import controlPanel from './controlPanel';

export default combineReducers({
	blocks,
	columns,
	elements,
	controlPanel
});