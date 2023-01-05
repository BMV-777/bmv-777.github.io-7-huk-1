import { useEffect, useState } from 'react';

export const Modal = () => {
  const [page, setPages] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  const handelSubmit = e => {
    e.preventDefault();
    setPages(1);
    setQuery(e.target.elements.query.value);
    setItems([]);
    e.target.reset();
  };

  const loadMore = () => {
    setPages(prevPage => prevPage + 1);
  };

  useEffect(() => {
    console.log(page);
    console.log(query);
    console.log('hi');
  }, [page, query]);

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      <button onClick={loadMore}>Load more</button>
    </div>
  );
};
