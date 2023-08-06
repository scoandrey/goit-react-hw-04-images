import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImage = async (page, q) => {
  const { data } = await axios.get(
    `/?q=${q}&page=${page}&key=38276773-cc10c978d0e26ae655aac3ef3&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
