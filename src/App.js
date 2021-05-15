import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Book  from './components/Book';
import  Header  from './components/Header';
import  Footer  from './components/Footer';
import  AddBook  from './components/AddBook';
import axios from 'axios';



const getAllBooks = () => {

  return axios.get('http://127.0.0.1:50587/books')
          .then( res=> {
            console.log(res.data);
            return res.data;
          })
}

function App() {


  const [showAddBook, setShowAddBook] = useState(false)
  const [books, setBooks] = useState([])
  useEffect(() => { 
    const getBooks = async () => {
      const booksFromServer = await getAllBooks()
      console.log(booksFromServer);
      setBooks(booksFromServer)
    }
    getBooks()
  },[])


  /*const fetchBooks = async() => {
    const res = await fetch('http://127.0.0.1:62490/books')
    const data = await res.json();
    return data;
    }*/


  const addMyBook = async(book) => {
    console.log(JSON.stringify(book));
    const res = await fetch('http://127.0.0.1:50587/addBook',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(book)
    })
    //fetchBooks();
  }


  return (
    <Router>
    <div className="login-form">
      <Header title={'Welcome to BookStore'}/>
      <Route path="/" exact render={(props) =>(
         <>
         {showAddBook && <AddBook onAdd={addMyBook} />}
         {books.length > 0 ? (
           <Book
             books={books}
           />
         ) : (
           'No Books To Show'
         )}
       </>
      )}>
      </Route>
      <Footer title={'Hi'} onAdd={ ()=>setShowAddBook(!showAddBook) } showAdd={showAddBook}/>
      
    </div>
    </Router>
  );
}

export default App;
