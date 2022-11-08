export enum PLATFORMS {
  Apple = 'apple',
  Android = 'android'
}

export enum NetworkStatus {
  SUCCESS = 200,
  NOT_FOUND = 404,
  UNAUTHORITHED = 401,
  FORBIDDEN = 403,
  CONFLICT = 409,
  INTERNAL = 500
}

export enum FileTypes {
  PNG = 'png',
  JPEG = 'jpeg',
  JPG = 'jpg'
}

export enum MimeTypes {
  IMAGE = 'image',
  TEXT = 'text'
}

export enum ErrorMessages {
  ERROR = 'Error',
  OCCURED_ERROR = 'Occured error',
  REGISTRATION_ERROR = 'Registration error',
  FAILURE_AUTH_ERROR = 'Authentification is failed',
  PARSING_ERROR = 'Parsing Error',
  UNAUTHORITHED_ERROR = 'User is not authorized',
  NETWORK_ERROR = 'Network error'
}

export enum KeysCodes {
  ENTER = 'Enter',
  BACKSPACE = 'Backspace'
}

export enum FileInputSizes {
  MB = 'MB',
  KB = 'KB'
}

export enum Colors {
  BLACK = 'black',
  WHITE = 'white'
}

export enum InputTypes {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
  NUMBER = 'number',
  COLOR = 'color',
  DATE = 'date'
}
