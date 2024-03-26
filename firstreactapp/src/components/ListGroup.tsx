//import { Fragment } from 'react/jsx-runtime'; and add <Fragment> before and </Fragement> to close
// you can replace a div with fragment to not over use div

import { useState } from 'react';

// import { MouseEvent } from 'react';
function ListGroup() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  //Hook function that allowas us to tap in to built in features in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);
  return (
    // same as Fragment
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
