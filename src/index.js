//First component
import React from 'react'; //This is not React
import ReactDom from 'react-dom';

//CSS
import './index.css';

//Setup vars
const books = [
  {
    id: 1,
    img: 'https://images.vexels.com/media/users/3/205462/isolated/lists/87b34912ed9f8d2900754c38220faac6-pila-de-ilustracion-de-libros.png',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
  },
  {
    id: 2,
    img: 'https://images.vexels.com/media/users/3/205464/isolated/lists/33d6bbfd7171189bd02d36b4e2befb6b-pila-de-libros-te-ilustracion.png',
    title: 'The Cafeteria',
    author: 'Someone Famous'
  },
  {
    id: 3,
    img: 'https://images.vexels.com/media/users/3/205191/isolated/lists/9515fbe7648c5450ffc4e0ce5e6a5427-ilustracion-de-taza-de-tetera-de-libros.png',
    title: 'Another brick on the wall',
    author: 'Pink Floyd'
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return (
          <Book key={book.id} {...book/*Spread operator*/}></Book>
        )
      })}
    </section>
  );
}

//Props Destructuring
const Book = ({ img, title, author } /*props*/) => {
  //const { img, title, author } = props;
  return (
    <article className='book'>
      <img
        src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}


//Inject this script to de index.html
ReactDom.render(<BookList />, document.getElementById('root'));

/**
 * Important things:
 * -You always have to close tags
 * -The name of a component must be in capital letter
 */

/**
  * JSX Rules:
  * -return single element
  * div / section / article or Fragment
  * use camelCase for html attribute
  * className instead of class
  * close every element
  * formatting
  */