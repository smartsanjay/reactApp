import * as ACTION_TYPES from "../constants/action_type"
const initialState={
    book:[
      {
        "name": "Eloquent JavaScript, Second Edition",
        "author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",
        "qty": 472,
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."
      },
      {
        "name": "Learning JavaScript Design Patterns",
        "author": "Addy Osmani",
        "published": "2012-07-01T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "qty": 254,
        "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
      },
      {
        "name": "Speaking JavaScript",
        "subname": "An In-Depth Guide for Programmers",
        "author": "Axel Rauschmayer",
        "published": "2014-02-01T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "qty": 460,
        "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position."
      },
      {
        "name": "Programming JavaScript Applications",
        "author": "Eric Elliott",
        "published": "2014-07-01T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "qty": 254,
        "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows."
      },
      {
        "name": "Understanding ECMAScript 6",
        "author": "Nicholas C. Zakas",
        "published": "2016-09-03T00:00:00.000Z",
        "publisher": "No Starch Press",
        "qty": 352,
        "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript."
      },
      
    ],
    search:"",
    auther:"",
    desc:"",
    name:"",
    qty:""
}

const rootReducer = (state = initialState, action) => {
  if(action.type=="HANDLE_SUCCESS"){
    switch (action.id) {
      case ACTION_TYPES.ADD_BOOK:
        return {
          ...state,
          book: [...state.book, {
            name: state.name,
            desc: state.desc,
            author:state.auther,
            qty:state.qty
          }]
        }
        break;  
      case ACTION_TYPES.LIST_BOOKS:
        return state.book;
        break;
    case ACTION_TYPES.SEARCH_BOOKS: 

        return {
          ...state,
          search:action.payload
        }
        break;
    case ACTION_TYPES.CHANGE_QTY:
        return Object.assign({},state,{qty:action.payload});
    break;
    case ACTION_TYPES.CHANGE_DESC:
        return Object.assign({},state,{desc:action.payload});
    break;
    case ACTION_TYPES.CHANGE_NAME:
        return Object.assign({},state,{name:action.payload});
    break;
    case ACTION_TYPES.CHANGE_AUTHER:
        return Object.assign({},state,{auther:action.payload});
    break;    
    case ACTION_TYPES.RESET:
        return Object.assign({},state, {
            name: "",
            desc: "",
            auther:"",
            qty:""
          });
    break;      
    default:
        return state
    }
  }else{
    return state
  }
  }
   
  export default rootReducer