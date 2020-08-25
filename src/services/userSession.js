import { createStore } from 'redux'

/**
 * Nombres constantes de acciones
 */
const SET_ROLUSER = 'SET_ROLUSER';
const GET_ROLEUSER = 'GET_ROLEUSER';
const RESET_USER_STATE = 'RESET_USER_STATE';

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
  localStorage.setItem('userState',  {
    roleUser: '',
    idUser: '',
    isLogged: false
  });
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

/**
 * Inicializacion del store
 */
const store = createStore(userInformation);

export default store
