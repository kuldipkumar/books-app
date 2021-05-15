import React from 'react'
import PropTypes from 'prop-types';


const Book = ({books}) => {
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
            { books.map( book => (
                <tr key={book.isbn} > 
                    <td>{book.bookName} </td>
                    <td>{book.author} </td>
                    <td>{book.price} </td>
                    <td>{book.rating} </td> 
                </tr>
            ))}
            </tbody>
        </table>
    )
}

Book.propTypes = {
    bookList: PropTypes.array,
}

Book.defaultProps = {
    bookList : [],
}

export default Book
