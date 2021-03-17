//First component
import React from 'react'; //This is not React
import ReactDom from 'react-dom';

//CSS
import './index.css';

//Setup vars
const firstBook = {
  img: 'https://images.vexels.com/media/users/3/205462/isolated/lists/87b34912ed9f8d2900754c38220faac6-pila-de-ilustracion-de-libros.png',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
};

const secondBook = {
  img: 'https://images.vexels.com/media/users/3/205464/isolated/lists/33d6bbfd7171189bd02d36b4e2befb6b-pila-de-libros-te-ilustracion.png',
  title: 'The Cafeteria',
  author: 'Someone Famous'
};

/*To create a component. We capitalize the first letter to 
* make React know it is an special component
*/
//This is a stateless functional component
//Always return JSX
/*function Greeting() {
  return (
    <div onClick className=''>
      <h4>This is Maria and this is my first component</h4>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
        <img src="" alt="" />
        <input type="text" name='' id='' />
      </ul>
    </div>
  );
}*/


/* Esta manera de crear un componente es un poco messy

const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'hello world')
  );
}*/


//Nested Components, React Tools
/*function Greeting() {
  return (
    <div>
      <h1>Hello World</h1>
      <Person />
      <p>This is my message</p>
      <Message />
    </div>
  );
}*/

/*const Person = () => <h2>My name is Maria</h2>;
const Message = () => {
  return <p>This is my other message</p>
}*/

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        A atque placeat, facere aliquid
        ex animi amet quibusdam rerum cumque! Voluptas?
        </p>

      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
/*
const Book = () => {
  return <article className='book'>
    <BookImage></BookImage>
    <Title />
    <Author />
  </article>
}

const BookImage = () => <img src="https://iesochoadeolza.educacion.navarra.es/web/
wp-content/uploads/2016/01/libros.png" alt="Book" />;

const Title = () => <h1>I Love You to the Moon and Back</h1>;
//The first {} in the style attribute is for Js, but the second is for object in JS
const Author = () => (
  <h4 style={{
    color: '#617d98', fontSize: '0.75rem',
    marginTop: '0.25rem'
  }}>
    Amelia Hepworth
  </h4>
);
*/

//ANOTHER WAY OF DOING ABOVE

/*const Book = (props) => {
  return (
    <article className='book'>
      <img
        src={props.img} alt="book" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
}*/

//Props Destructuring
const Book = (/*{ img, title, author, children }*/ props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className='book'>
      <img
        src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
}


//Inject this script to de index.html
//ReactDom.render(<Greeting />, document.getElementById('root'));
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