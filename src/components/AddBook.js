import { useState } from 'react';


const AddBook = ({ onAdd }) => {

    const [bookName,setBookName ]       = useState('');
    const [author,setAuthor ]   = useState('');
    const [price,setPrice ]     = useState('');
    const [rating,setRating ]   = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!bookName) {
          alert('Please provide a Book Name')
          return
        }
        if (!author) {
            alert('Please provide a Author')
            return
        }
        if (!price) {
            alert('Please enter a Price')
            return
        }
        let isbn = Math.random().toString(36).substring(7);
        onAdd( { isbn, bookName, author, price, rating} )
    
        setBookName('')
        setAuthor('')
        setPrice('')
        setRating('')
      }

    return (
        <form class="login-form" onSubmit={onSubmit}>
            <div className="form-input-material">
               <label>Book Name</label>
                <input type="text" placeholder="Book Name" class="form-control-material" value={bookName} onChange= {(e) => setBookName(e.target.value)}/>
            </div>
            <div className="form-input-material">
                <label>Author</label>
                <input type="text" placeholder="Author" class="form-control-material" value={author} onChange= {(e) => setAuthor(e.target.value)}/>
            </div>
             <div className="form-input-material">
                <label>Price</label>
                <input type="text" placeholder="Price" class="form-control-material" value={price} onChange= {(e) => setPrice(e.target.value)}/>
            </div>
             <div className="form-input-material">
                <label>Rating</label>
                <input type="text" placeholder="Rating" class="form-control-material" value={rating} onChange= {(e) => setRating(e.target.value)}/>
            </div>
            <input type="submit" value="Save Book" className="btn btn-block"/>
        </form>
    )
}

export default AddBook;