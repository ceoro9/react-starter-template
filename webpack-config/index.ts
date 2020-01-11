import path from 'path';

export const ROOT_PROJECT_PATH = path.resolve(__dirname, '../');
export const NODE_MODULES_PATH = path.resolve(ROOT_PROJECT_PATH, 'node_modules/');
export const SRC_FOLDER_PATH   = path.resolve(ROOT_PROJECT_PATH, 'src/');
export const DIST_FOLDER_PATH  = path.resolve(ROOT_PROJECT_PATH, 'dist/');

const getEnv = () => process.env.NODE_ENV;

export const isDevelopmentEnv = () => {
  return getEnv() === 'development';
};

export const isProductionEnv = () => {
  return getEnv() === 'production';
}

export const isCiEnv = () => {
  return getEnv() === 'CI';
}
