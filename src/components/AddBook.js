import React from 'react';
import { connect } from "react-redux";
import { Header } from './Header.js';
import {
addBook,
changeName,
changeAuther,
changeDesc,
changeQty
} from "../actions";
const AddBook = (props) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addBook({type:"ADD_BOOK"});
        alert("Book Details Saved Successfully");
    }
    const handleChange=(e) =>{
        switch(e.target.name){
            case "Name":
                props.changeName({type:"CHANGE_NAME",payload:e.target.value});
                break;
            case "Auther":
                props.changeAuther({type:"CHANGE_AUTHER",payload:e.target.value});
                break;
            case "Qty":
                props.changeQty({type:"CHANGE_QTY",payload:e.target.value});
                break;
            case "Desc":
                props.changeDesc({type:"CHANGE_DESC",payload:e.target.value});
                break;    
        }
    }
    return (
      <>
        <div className="row">
            <Header />
        </div>
        <div className="row formContainer">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="Name" value={props.name} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="auther">Auther</label>
              <input type="text" name="Auther" value={props.auther} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="qty">Inventory</label>
              <input type="text" name="Qty" value={props.qty} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <input type="text" name="Desc" value={props.desc} onChange={handleChange}/>
            </div>
            <input type="submit" value="SAVE" />
          </form>
        </div>
     </>   
    )
}

const mapStateToProps = state => {
  console.log("state",state);
    return {
      qty:state.qty,
      desc:state.desc,
      name:state.name,
      auther:state.auther
    }
  }
  const mapDispatchToProps = dispatch => {
      return {
    addBook:(payload) =>dispatch(addBook(payload)),
    changeName:(payload) =>dispatch(changeName(payload)),
    changeAuther:(payload) =>dispatch(changeAuther(payload)),
    changeDesc:(payload) =>dispatch(changeDesc(payload)),
    changeQty:(payload) =>dispatch(changeQty(payload)),
  }
}
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddBook)