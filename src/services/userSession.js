import { createStore } from 'redux'

/**
 * Nombres constantes de acciones
 */
const SET_ROLUSER = 'SET_ROLUSER';
const GET_ROLEUSER = 'GET_ROLEUSER';
const RESET_USER_STATE = 'RESET_USER_STATE';
const SET_USER_ID = 'SET_USER_ID';
const GET_USER_ID = 'GET__USER_ID';

/**
 * Estado global del usuario, utilizando react-redux
 */
const userLocalStorage = JSON.parse(localStorage.getItem('userState'));
let initialUserState;

/* Se verifica si ya existe una sesion para este usuario en el almacenamiento local */
if (userLocalStorage !== null) {
  initialUserState = userLocalStorage;
} else {
  initialUserState = {
    roleUser: '',
    idUser: '',
    isLogged: false
  }
  localStorage.setItem('userState',  JSON.stringify(initialUserState));
};

/**
 * Redux del usuario
 * @param userState Estado actual del usuario
 * @param  action Accion a ejecutar en el estado
 */
function userInformation(userState = initialUserState, action) {

  switch (action.type) {
    case SET_ROLUSER:
        userState = {
          ...userState,
            roleUser: action.roleUser
        }
        localStorage.setItem('userState', JSON.stringify(userState));
      return userState;

    case RESET_USER_STATE:
      userState = undefined;
      userState = initialUserState;
      localStorage.removeItem('userState');
      return userState;

    case GET_ROLEUSER:
      return userState.roleUser;

    case GET_USER_ID:
      return userState.idUser;

    case SET_USER_ID:
      userState = {
        ...userState,
          idUser: action.idUser
      }
      console.log("?????????", userState)
      localStorage.setItem('userState', JSON.stringify(userState));
      return userState;

    default:
      return userState
  }
}


/**
 * Metodo utilizado para modficar el rol del usuario logueado
 * @param roleUser
 */
export const setRoleUser = (roleUser) => {
  return {
    type: SET_ROLUSER,
    roleUser: roleUser
  }
}

/**
 * metodo utilizado para rstaurar los valores por defecto del estado del usuario
 */
export const resetUserState = () => {
  return {
    type: RESET_USER_STATE
  }
}

/**
 * Metodo usado para saber el rol del usuario logueado en el sistema
 */
export const getRoleUser= () => {
  return {
    type: GET_ROLEUSER
  }
}

export const getUserId= () => {
  return {
    type: GET_USER_ID
  }
}

export const setUserId = (idUser) => {
  return {
    type: SET_USER_ID,
    idUser: idUser
  }
}

/**
 * Inicializacion del store
 */
const store = createStore(userInformation);

export default store;
