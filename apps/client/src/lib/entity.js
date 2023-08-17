import { APP_API } from './constants';
import { fetchCreator } from './fetchCreator';

const buildUrl = (path) => `${APP_API}/${path || ''}`;

export const createOne = (path, body, handleErrors = true) => {
  const url = buildUrl(path);
  return fetchCreator(url, 'POST', handleErrors, body);
};

export const updateOne = (path, body, handleErrors = true) => {
  const url = buildUrl(path);
  return fetchCreator(url, 'PUT', handleErrors, body);
}

export const removeOne = (path, handleErrors = true) => {
  const url = buildUrl(path);
  return fetchCreator(url, 'DELETE', handleErrors);
}

export const getOne = (path, handleErrors = true) => {
  const url = buildUrl(path);
  return fetchCreator(url, 'GET', handleErrors);
}

export const getAll = (path, handleErrors = true) => {
  const url = buildUrl(path);
  return fetchCreator(url, 'GET', handleErrors);
}

export const request = (path, body, method = 'GET', handleErrors = true) => {
  const url = buildUrl(path);
  return fetchCreator(url, method, handleErrors, body);
}

