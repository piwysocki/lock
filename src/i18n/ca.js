// This file was automatically translated.
// Feel free to submit a PR if you find a more accurate translation.

export default {
  error: {
    forgotPassword: {
      too_many_requests:
        "S'han exhaurit els intents per restablir la contrasenya. Espereu una estona i intenteu-ho de nou.",
      'lock.fallback': 'Hi ha hagut un error en canviar la contrasenya.',
      enterprise_email:
        "El domini del vostre correu electrònic forma part d'un proveïdor d'identitat empresarial. Per restablir la contrasenya, consulteu l'administrador de seguretat."
    },
    login: {
      blocked_user: "L'usuari està bloquejat.",
      invalid_user_password: 'Les credencials no són correctes.',
      'lock.fallback': 'Hi ha hagut un error en iniciar la sessió.',
      'lock.invalid_code': 'El codi és incorrecte.',
      'lock.invalid_email_password': "L'adreça o contrasenya no són correctes.",
      'lock.invalid_username_password': "El nom d'usuari o contrasenya no són correctes.",
      'lock.network':
        "No s'ha pogut accedir al servidor. Reviseu la vostra connexió i intenteu-ho de nou.",
      'lock.popup_closed': "S'ha tancat la finestra emergent. Intenteu-ho de nou.",
      'lock.unauthorized': "No hi teniu permís d'accés. Intenteu-ho de nou.",
      'lock.mfa_registration_required':
        'Cal fer una autenticació multifactorial però el vostre dispositiu no està registrat. Si us plau registreu-lo abans de continuar.',
      'lock.mfa_invalid_code': 'El codi és incorrecte. Intenteu-ho de nou.',
      password_change_required:
        'Cal que actualitzeu la vostra contrasenya, bé perquè és la primera vegada que entreu, o perquè la contrasenya ha caducat.',
      password_leaked:
        "S'ha bloquejat el vostre accés ja que s'ha filtrat la contrasenya a través un altre lloc web. Heu rebut un correu amb instruccions per poder restablir-hi l'accés.",
      too_many_attempts:
        "Hi ha hagut massa intents consecutius fallits d'inici de sessió, i se us ha bloquejat l'accés.",
      session_missing:
        "No s'ha pogut completar la vostra petició d'autenticació. Tanqueu tots els diàlegs oberts i intenteu-ho de nou.",
      'hrd.not_matching_email':
        'Si us plau, utilitzeu el correu electrònic corporatiu per iniciar sessió.',
      too_many_requests:
        'Ho sentim. Ara hi ha massa sol·licituds ara mateix. Torneu a carregar la pàgina i torneu-ho a provar. Si això persisteix, torneu-ho a provar més tard.',
      invalid_captcha: 'Resoleu la pregunta de desafiament per verificar que no sou un robot.',
      invalid_recaptcha: 'Seleccioneu la casella de verificació per verificar que no sou un robot.'
    },
    passwordless: {
      'bad.email': "L'adreça de correu no és vàlida",
      'bad.phone_number': 'El número de telèfon no és vàlid',
      'lock.fallback': 'Quelcom ha fet fallida',
      invalid_captcha: 'Resoleu la pregunta de desafiament per verificar que no sou un robot.',
      invalid_recaptcha: 'Seleccioneu la casella de verificació per verificar que no sou un robot.'
    },
    signUp: {
      invalid_password: 'La contrasenya no és vàlida.',
      'lock.fallback': 'Hi ha hagut un error durant el registre.',
      password_dictionary_error: 'La contrasenya és massa comú.',
      password_leaked: 'Aquesta combinació de credencials es va detectar en una violació de dades públiques en un altre lloc web. Abans de crear el vostre compte, utilitzeu una contrasenya diferent per mantenir-lo segur.',
      password_no_user_info_error: "La contrasenya es basa en les dades de l'usuari.",
      password_strength_error: 'La contrasenya és massa feble.',
      user_exists: 'Ja existeix aquest usuari.',
      username_exists: "Ja existeix aquest nom d'usuari.",
      social_signup_needs_terms_acception: 'Per continuar, accepteu les Condicions del servei.'
    }
  },
  success: {
    logIn: 'Sessió iniciada amb èxit.',
    forgotPassword: 'Se us ha enviat un email per a poder restablir la contrasenya.',
    magicLink: 'Se us ha enviat un enllaç per iniciar sessió<br />a %s.',
    signUp: 'Registre completat amb èxit.'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: 'No pot ser buit',
  blankEmailErrorHint: 'No pot ser buit',
  blankUsernameErrorHint: 'No pot ser buit',
  blankCaptchaErrorHint: 'No pot ser buit',
  codeInputPlaceholder: 'codi',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'o',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'o',
  emailInputPlaceholder: 'email@example.com',
  enterpriseLoginIntructions: 'Inicieu sessió amb les vostres credencials corporatives.',
  enterpriseActiveLoginInstructions:
    'Si us plau entreu les vostres credencials corporatives de %s.',
  failedLabel: 'Error!',
  forgotPasswordTitle: 'Restabliu la contrasenya',
  forgotPasswordAction: 'Heu oblidat la contrasenya?',
  forgotPasswordInstructions:
    'Indiqueu el vostre email. Us enviarem les instruccions per restablir-la.',
  forgotPasswordSubmitLabel: 'Enviar email',
  invalidErrorHint: '',
  invalidPasswordErrorHint: 'Invàlid',
  invalidEmailErrorHint: 'Invàlid',
  invalidUsernameErrorHint: 'Invàlid',
  lastLoginInstructions: "L'última vegada vàreu iniciar sessió amb",
  loginAtLabel: 'Iniciar a %s',
  loginLabel: 'Inici de sessió',
  loginSubmitLabel: 'Inicieu sessió',
  loginWithLabel: 'Iniciar amb %s',
  notYourAccountAction: 'No és el vostre compte?',
  passwordInputPlaceholder: 'la seva contrasenya',
  passwordStrength: {
    containsAtLeast: 'Conté almenys %d dels següents %d tipus de caràcters:',
    identicalChars: 'No més de %d caràcters idèntics junts (p. ex., "%s" no està permès)',
    nonEmpty: 'La contrasenya no pot estar buida',
    numbers: 'Xifres (del 0 al 9)',
    lengthAtLeast: 'Com a mínim de %d caràcters de longitud',
    lowerCase: 'Lletres minúscules (a-z)',
    shouldContain: 'Ha de contenir:',
    specialCharacters: 'Caràcters especials (p. ex. !@#$%^&*)',
    upperCase: 'Lletres majúscules (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Altrament, indiqueu el vostre email per iniciar sessió<br/>o registrar-vos',
  passwordlessEmailCodeInstructions: 'Se us ha enviat un email amb el codi a %s.',
  passwordlessEmailInstructions: 'Indiqueu el vostre email per iniciar sessió<br/>o registrar-vos',
  passwordlessSMSAlternativeInstructions:
    'Altrament, introduïu el vostre telèfon per iniciar sessió<br/>o registrar-vos',
  passwordlessSMSCodeInstructions: 'Se us ha enviat un SMS amb el codi a %s.',
  passwordlessSMSInstructions: 'Indiqueu el vostre telèfon per iniciar sessió<br/>o registrar-vos',
  phoneNumberInputPlaceholder: 'número de telèfon',
  resendCodeAction: 'No heu rebut el codi?',
  resendLabel: 'Reenvia',
  resendingLabel: 'Reenviant...',
  retryLabel: 'Reintenta',
  sentLabel: 'Enviat',
  signUpTitle: 'Registre',
  signUpLabel: 'Registre',
  signUpSubmitLabel: "Registra'm",
  signUpWithLabel: 'Registreu-vos amb %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: "Activat l'inici de sessió únic",
  submitLabel: 'Envia',
  unrecoverableError: 'Hi ha hagut un error.<br />Contacteu amb el suport tècnic.',
  usernameFormatErrorHint:
    'Utilitzeu %d-%d lletres, números i els següents caràcters: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'el seu usuari',
  usernameOrEmailInputPlaceholder: 'usuari/email',
  title: 'Auth0',
  welcome: 'Benvingut/da %s',
  windowsAuthInstructions: 'Esteu connectat des de la vostra xarxa corporativa&hellip;',
  windowsAuthLabel: 'Autenticació de Windows',
  mfaInputPlaceholder: 'Codi',
  mfaLoginTitle: 'Verificació en 2 passos',
  mfaLoginInstructions: 'Indiqueu el codi de verificació generat per la seva aplicació de mòbil.',
  mfaSubmitLabel: 'Inicia sessió',
  mfaCodeErrorHint: 'Utilitzeu %d xifres',
  showPassword: 'Ensenya la contrasenya',
  signUpTerms:
    "En inscriure's, accepteu les nostres condicions de servei i la nostra política de privadesa.",
  captchaCodeInputPlaceholder: 'Introduïu el codi anterior',
  captchaMathInputPlaceholder: 'Resoleu la fórmula mostrada anteriorment'
};
