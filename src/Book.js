//Shortcut: rfce

import React from 'react'

const Book = ({ img, title, author } /*props*/) => {

    //attribute, eventHandler
    //onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
    }
    const complexExample = (author) => {
        console.log(author);
    }
    return (
        <article className='book' onMouseOver={() => {
            console.log(title);
        }}>
            <img
                src={img} alt="book" />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Example</button>
            <button type='button' onClick={() => complexExample(author)/*If we don't add the () => it will run when we open de app  */}>More complex example</button>
        </article>
    );
}

export default Book
