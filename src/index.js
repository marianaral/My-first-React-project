//First component
import React from 'react'; //This is not React
import ReactDom from 'react-dom';

//CSS
import './index.css';

//Js
import { books } from './books';
import Book from './Book';
import { greeting } from './testing/testing';

function BookList() {
  console.log(greeting);
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

//Inject this script to de index.html
ReactDom.render(<BookList />, document.getElementById('root'));

/**
 * Important things:
 * -You always have to close tags
 * -The name of a component must be in capital letter
 * -Events in React are written in camelCase
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