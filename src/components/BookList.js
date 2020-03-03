import React from 'react'
import { connect } from "react-redux";
import {searchBook} from "../actions";
import { Header } from './Header.js';

const BookList = (props) =>{
    
    const bookDetails =() =>{
        let books=props.books;
        if(props.search){
            books=props.books.filter((item)=> {
                return item.name.toLowerCase().includes(props.search);
              });

        }
        console.log("book",books,props.search);
        return books.map((book)=>{
            return <li>
                <h3>{book.name}</h3>
                <h6>{book.author}</h6>
                <div className="details">
                {book.qty} LEFT
                </div>
            </li>
        })
    }
    const handleSearch=(e) =>{
        props.searchBook({type:"SEARCH_BOOKS",payload:e.target.value});
    }
    return (
        <>    
            <div className="row">
                <Header />
            </div>
            <div className="row">

                <div className="DetailSection">
                    <div className="searchContainer">
                    <input type="text" value={props.search} placeholder="Search" onChange={handleSearch} />
                    </div>
                    {
                    props.books.length>0 ?
                    (<div><ul>{bookDetails()}</ul></div>):(<p>"No Books Available"</p>)
                    }
                </div>
            </div> 
        </>   
    )
}
    const mapStateToProps = state => ({
    books:state.book,
    search:state.search
  })
  const mapDispatchToProps = dispatch => {
    return {
    searchBook:(payload) =>dispatch(searchBook(payload)),
    }
}  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookList)

