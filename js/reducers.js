var actions = require('./actions');

var reducer = function(state, action) {
	state = state || {};
	if (action.type === actions.PAGE_LOAD) {
		return Object.assign({}, {
			status: '',
			form: true
		});
	} else if (action.type === actions.FETCH_ADD_TO_LIST_SUCCESS) {
		return Object.assign({}, state, {
			status: action.message,
			form: false

		});
	} else if (action.type === actions.FETCH_ADD_TO_LIST_ERROR) {
		return Object.assign({}, state, {
			status: action.error
		});
	} else {
		return state;
	}
};

module.exports = reducer;