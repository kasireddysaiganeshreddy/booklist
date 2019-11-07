
import React from 'react';
import BookList from '../containers/BookList'
import BookDetail from '../containers/BookDetail'
import DelBook from '../containers/DelBook'
import { connect } from 'react-redux'
import {addTodo} from '../action';

let Add = ({ dispatch }) => {
let input1,input2,input3
return (
    
<div>
<form
onSubmit={e => {
e.preventDefault()
if (!input1.value.trim()) {
return
}
dispatch(addTodo(input1.value,input2.value,input3.value,))
input1.value = '';
input2.value = '';
input3.value = '';
}}
>
<input
ref={node => {
input1 = node
}}
placeholder='title'
/>
<br/>
<input
ref={node => {
input2 = node
}}
placeholder='pages'
/>
<br/>
<input
ref={node => {
input3 = node
}}
placeholder='authorName'
/>
<br/>
<button type="submit">
Add
</button>
</form>
<BookList/>
<BookDetail/>
<DelBook/>
</div>

)
}
Add = connect()(Add)

export default Add