// @flow

'use strict';
import type {Action} from './types';
import { checkHttpStatus, parseJSON } from './utils';
import jwtDecode from 'jwt-decode';
import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from './constants'

// import {replaceRoute} from '../actions/route';

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function loginUserSuccess(token, decodedToken) {
  // localStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function loginUserFailure(error) {
  // localStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: (error.response ? error.response.status : null),
      statusText: (error.response ? error.response.statusText : error.message)
    }
  }
}

const loginEndpointURL = "https://embassynetwork.com/api-token-auth/"

export function loginUser(email, password, redirect="/") {
    return function(dispatch) {
        dispatch(loginUserRequest());
        return fetch(loginEndpointURL, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({username: email, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    let decoded = jwtDecode(response.token);
                    dispatch(loginUserSuccess(response.token, decoded));
                    // dispatch(replaceRoute("home"));
                } catch (e) {
                    dispatch(loginUserFailure({
                        response: {
                            status: 403,
                            statusText: e.message
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginUserFailure(error));
            })
    }
}
