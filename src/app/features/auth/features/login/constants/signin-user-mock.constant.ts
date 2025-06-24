import { SigninUser } from "../interfaces";

export const SIGNIN_USER_MOCK: SigninUser[] = [
    { username: 'user123', password: 'Password1!' },
    { username: 'coder_gal', password: 'SecurePass2#' },
    { username: 'dev_master', password: 'MySecretPwd3$' },
    { username: 'test_account', password: 'WeakPassword4%' },
    { username: 'admin_user', password: 'AdminPass5^' }
];

export const SIGNIN_USER_INVALID_CREDENTIALS = 'Usuario o contraseña incorrectos. Por favor, verifica tus credenciales e intenta nuevamente.';