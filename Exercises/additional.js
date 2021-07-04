const getNameStatus = (status) => {
  console.log(status,666);
  return status ? status.name : 'not name';

}

const getByCode = (code) => {
  const ok = { code: 200, name: 'ok' };
  const notFound = { code: 404, name: 'not found' };
  const statuses = {200: ok, 404: notFound};
  if (code in statuses) return statuses[code];
  return null
}

let result = getByCode(404)

let status = getNameStatus(result)

console.log(result);
console.log(status,777);
