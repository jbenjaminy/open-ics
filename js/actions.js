var fetch = require('isomorphic-fetch');


// ON PAGE LOAD
var PAGE_LOAD = 'PAGE_LOAD';
var pageLoad = function() {
    return {
        type: PAGE_LOAD
    };
};

// POST NEW USER
var fetchAddToList = function(userObj) {
    return function(dispatch) {
        var url = 'http://localhost:8081/contacts';
        var request = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            body: JSON.stringify({
            	email: userObj.email,
            	firstName: userObj.firstName,
            	lastName: userObj.lastName,
            	occupation: userObj.occupation
                }
            )};
        return fetch(url, request)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var message = data.message;
            return dispatch(
                fetchAddToListSuccess(message)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchAddToListError(error)
            );
        });
    }
};

var FETCH_ADD_TO_LIST_SUCCESS = 'FETCH_ADD_TO_LIST_SUCCESS';
var fetchAddToListSuccess = function(message) {
    return {
        type: FETCH_ADD_TO_LIST_SUCCESS,
        message: message
    };
};

var FETCH_ADD_TO_LIST_ERROR = 'FETCH_ADD_TO_LIST_ERROR';
var fetchAddToListError = function(error) {
    return {
        type: FETCH_ADD_TO_LIST_ERROR,
        error: error
    };
};

exports.PAGE_LOAD = PAGE_LOAD;
exports.pageLoad = pageLoad;

exports.fetchAddToList = fetchAddToList;
exports.FETCH_ADD_TO_LIST_SUCCESS = FETCH_ADD_TO_LIST_SUCCESS;
exports.FETCH_ADD_TO_LIST_ERROR = FETCH_ADD_TO_LIST_ERROR;
exports.fetchAddToListSuccess = fetchAddToListSuccess;
exports.fetchAddToListError = fetchAddToListError;