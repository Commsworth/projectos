import React, { Component } from 'react'


// gray background
const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
}

const modalStyle = {
    backgroundColor: '#1B1B1B',
    top: 100,
    textAlign: "center",
    borderRadius: 5,
    maxWidth: 458,
    minHeight: 242,
    margin: '0 auto',
    padding: 30,
    position: "relative",
    boxShadow: '0 25 25 rgba(0, 0, 0, 0.25)'
};

const footerStyle = {
    display: "flex",
    justifyContent: "center"
};


 class Modal extends Component {
     onclose = (e) => {
         this.props.onclose && this.props.onclose(e)
     }
    render() {
        if(!this.props.show){
            return null
        }
        return (
            <div style={backdropStyle}>
                <div style={modalStyle}>

               {this.props.children}
               <div style={footerStyle}>
                   <button 
                   style={{
                       width: 100,
                        backgroundColor: "#0E82F8",
                        color: "white",
                        paddingRight: 14,
                        paddingLeft: 20,
                        marginRight: 8 ,
                        paddingTop: 10,
                        paddingBottom: 10,
                        border: "none",
                        borderRadius: 4,
                        width:152,
                        height: 46,
                        cursor: "pointer",
                        marginTop: 50,
                   }}
                   onClick={(e)=>{this.onclose(e)}}>
                       close
                   </button>
                </div>
               </div>
            </div>
        )
    }
}



export default Modal