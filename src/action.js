export function selectBook(book){

    return{
        type:'BOOK_SELECTED',
        payload:book
    };
}
export function addTodo(text1,text2,text3){
    
    return{
        type:'Add_Book',
        text1,
        text2,text3
    };
}
export function deleteBook(del){
console.log(del);
    return{
        type:'Delete_Book',
        del
    };
}