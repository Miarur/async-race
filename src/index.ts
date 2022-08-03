

const baseUrl = 'http://127.0.0.1:3000'; 
const path = {
  garage: '/garage',
  winners: '/winners'
};

type QueryParams = {
  key?: string,
  value?: string | number,
}

const generateQueryString = (queryParams: QueryParams[]) => queryParams.length
  ? `?${queryParams.map(item => `${item.key}=${item.value}`).join('&')}`
  : '';

const getCars = async(queryParams: QueryParams[]) => {
  const response = await fetch(`${baseUrl}${path.garage}${generateQueryString(queryParams)}`); 
  const cars = await response.json(); 
  console.log(cars);  
  console.log(`total count => ${Number(response.headers.get('X-Total-Count'))}`);
  return cars;
}

getCars([{key:'_page', value: 0}, {key: '_limit', value: 1}]);