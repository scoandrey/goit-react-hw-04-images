import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import React from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { getImage } from './api';

axios.defaults.baseURL = 'https://pixabay.com/api';

const App = () => {
  const alert = useAlert();
  const [images, setImages] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [showLoadMoreButton, setShowLoadMoreButton] = React.useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await getImage(page, q);

      page < Math.ceil(data.totalHits / 12)
        ? setShowLoadMoreButton(true)
        : setShowLoadMoreButton(false);

      setImages([...images, ...data.hits]);
      setPage(page + 1);
    } catch (e) {
      
      alert.error(`Ошибка получения данных: ${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    q !== '' && getData().then();
    // eslint-disable-next-line
  }, [q]);

  const onSubmit = query => {
    if (q === query) {
      return;
    }

    setImages([]);
    setPage(1);
    setQ(query);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} />
      {isLoading ? (
        <Loader />
      ) : (
        showLoadMoreButton && <Button onClick={getData} />
      )}
    </div>
  );
};
export default App;