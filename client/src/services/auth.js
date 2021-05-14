export const TOKEN_KEY = '&app-token';
export const ID_USUARIO = '&id-usuario';
export const NOME_USUARIO = '&nome-usuario';
export const TYPE_USUARIO = '&type-usuario';

export const login = token => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => localStorage.clear();

export const setIdUsuario = id => localStorage.setItem(ID_USUARIO, id);
export const getIdUsuario = () => localStorage.getItem(ID_USUARIO);

export const setNomeUsuario = nome => localStorage.setItem(NOME_USUARIO, nome);
export const getNomeUsuario = () => localStorage.getItem(NOME_USUARIO);

export const setTipoUsuario = tipo => localStorage.setItem(TYPE_USUARIO, tipo);
export const getTipoUsuario = tipo => localStorage.getItem(TYPE_USUARIO);
