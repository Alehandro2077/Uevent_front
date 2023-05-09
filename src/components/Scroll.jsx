import { Button } from 'bootstrap';
import React from 'react';
import '../App.css';
import { useState } from 'react';


const itemsPerPage = 5; // количество элементов, которые должны отображаться на каждой странице

const Scroll = ({ setCurrentPage, currentPage, eventsItem, setCurrentEvents }) => {

  // const [items, setItems] = useState([
  //   { id: 1, text: '1' },
  //   { id: 2, text: '2' },
  //   { id: 3, text: '3' },
  //   { id: 4, text: '4' },
  //   { id: 5, text: '5' },
  //   { id: 6, text: '6' },
  //   { id: 7, text: '7' },
  //   { id: 8, text: '8' },
  //   { id: 9, text: '9' },
  //   { id: 10, text: '10' },
  //   { id: 11, text: '11' },
  //   { id: 12, text: '12' },
  //   { id: 13, text: '13' },
  //   { id: 14, text: '14' },
  //   { id: 15, text: '15' },
  //   { id: 16, text: '16' },
  //   { id: 17, text: '17' },
  //   { id: 18, text: '18' },
  //   { id: 19, text: '19' },
  //   { id: 20, text: '20' },
  // ]);
  // вычисляем индекс первого и последнего элемента для текущей страницы
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  // отображаем только элементы текущей страницы
  const currentItems = eventsItem.slice(firstIndex, lastIndex);
  // вычисляем количество страниц
  const totalPages = Math.ceil(eventsItem.length / itemsPerPage);
  // генерируем кнопки страниц
  const pageButtons = [];
  React.useEffect(() => {
    setCurrentEvents(currentItems);
  }, [currentPage]);
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <input
        type='button'
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? 'active' : ''}
        value={i}
      />
    );
  }
  return (
    <>
      <div className="col-md-5 offset-md-5">
        <div className="Scroll">
          {currentItems.map((item) => (
            <div class="col-md-1" >
              <input key={item.id} type="button" value={item.text} />
            </div>
          ))}
        </div>

        <div class="col-md-5 offset-md-1 ">
          <div class="Scroll ">
            <div class="row ">
              {pageButtons}
            </div>
          </div>
        </div>

      </div>

    </>
  )

}
export default Scroll;