export const fetchCreator = (url, method = 'GET', handleErrors, body) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
    .then((res) => res.json())
    .catch((error) => (handleErrors ? { error } : Error(error.message)));
};
