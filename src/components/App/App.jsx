import { useState } from 'react';
import React from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import requestAxios from '../../API';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const perPage = 12;

  const onSearchPictures = keyword => {
    setIsLoadMore(false);
    setKeyword('');
    setIsLoader(true);
    setPage(1);

    requestAxios(keyword, 1, perPage)
      .then(data => {
        if (data.hits.length === 0) {
          Notify.info(
            `Sorry, there are no images matching your search query. Please try again.`
          );
          setIsLoader(false);
          return;
        }
        setItems(data.hits);
        setTotal(data.totalHits);
        setKeyword(keyword);
        if (data.totalHits > perPage) {
          setIsLoadMore(true);
          setPage(2);
        }
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoader(false));
  };

  const onSerchLoadMore = keyword => {
    setIsLoader(true);

    requestAxios(keyword, page, perPage)
      .then(data => {
        setItems([...items, ...data.hits]);
        setPage(page + 1);

        if (Math.ceil(total / perPage) === page) {
          Notify.info(
            `We're sorry, but you've reached the end of search results.`
          );
          setIsLoadMore(false);
        }
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoader(false));
  };

  return (
    <>
      <Searchbar onSubmit={onSearchPictures} />
      <ImageGallery galleryArray={items} />
      {isLoadMore && (
        <Button onClick={() => onSerchLoadMore(keyword, page, perPage)} />
      )}
      {isLoader && <Loader />}
    </>
  );
}