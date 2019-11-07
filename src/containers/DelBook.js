import React from "react";
import { connect } from "react-redux";
class DelBook extends React.Component{
    render() {
     
        return(
            <div>
           
        </div>
        );
    }
}
function mapStateToProps(state){
    return {
        book: state.activeBook
      };
    }
export default connect(mapStateToProps)(DelBook);