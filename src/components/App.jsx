import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getImage } from './api';

axios.defaults.baseURL = 'https://pixabay.com/api';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [q, setQ] = useState('');
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getImage(page, q);

        setShowLoadMoreButton(page < Math.ceil(data.totalHits / 12));

        setImages(prevState => [...prevState, ...data.hits]);
      } catch (e) {
        console.log(`Ошибка получения данных: ${e}`);
      } finally {
        setIsLoading(false);
      }
    };
    q !== '' && getData();
  }, [q, page]);

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
        showLoadMoreButton && <Button onClick={() => setPage(page + 1)} />
      )}
    </div>
  );
};
export default App;
