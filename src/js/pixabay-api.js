import axios from 'axios';

async function getDataFromAPI(search) {
  const API_KEY = '39362116-97c7d5619fee8bb7db7b12f12';
  const imageType = 'photo';
  const photoOrientation = 'horizontal';
  const safeSearch = true;

  const params = {
    key: API_KEY,
    q: search,
    image_type: imageType,
    orientation: photoOrientation,
    safesearch: safeSearch,
  };

try{
  const response = await axios.get('https://pixabay.com/api/', { params });
  return response.data
} 
catch(error) {
console.log(error.message)

}
 
}

export { getDataFromAPI };
