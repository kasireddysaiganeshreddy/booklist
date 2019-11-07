let Books = {
  Books: [
    {
      title: " The Good Parts",
      pages: 101,
      author: "david"
    },
    {
      title: "Harry Potter",
      pages: 393,
      author: "dawood"
    },
    {
      title: "The Dark Tower",
      pages: 851,
      author: "devil"
    },
    {
      title: "Eloquent Ruby",
      pages: 1223,
      author: "demon"
    }
  ]
}
export default function addBook(state = Books, action) {

  switch (action.type) {
    case "Add_Book":
 
    
      return Object.assign({}, state, {
        Books: [
          ...state.Books,
          {
            title: action.text1,
            pages: action.text2,
            author: action.text3
          }
        ]
      }

      );
      case "Delete_Book":
            let book=[];
            for(let i=0 ;i<state.Books.length;i++){
              if(state.Books[i].title!==action.del){
                book.push(state.Books[i]);
              }
              }
             return Object.assign({}, state, {
                      Books: book
                    }
                    );
    default:
      return state;
  }
}

