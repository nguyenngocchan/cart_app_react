import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import {actDeleteToCart, actChangeMessage} from './../actions/index';
import * as message from './../constants/Message'
class CartContainer extends Component {
  render() {
    var {cart}=this.props;
    return (
        <Cart>
            {this.ShowCartItem(cart)}
            {this.ShowCartResult(cart)}
        </Cart>
    )
  }
  ShowCartItem=(cart)=>{
      var result=<tr><td>{message.MSG_CART_EMPTY}</td></tr>;
      if(cart.length>0){
          result=cart.map((item,index)=>{
            return <CartItem key={index}
                    item={item}
                    onDelete={this.props.onDelete}
                    onChangeMessage={this.props.onChangeMessage}></CartItem>
          })
      }
      return result;
  }
  ShowCartResult=(cart)=>{
      var result='';
      if(cart.length>0){
          result=<CartResult cart={cart}/>
      }
      return result;

  }
}
const mapStateToProp=(state)=>{
    return{
        cart:state.cart
    }
}
const mapDispathToProps=(dispath,props)=>{
    return{
            onDelete:(id)=>{
            dispath(actDeleteToCart(id));
         },
         onChangeMessage:(message)=>{
             dispath(actChangeMessage(message));
         }
    }
}
export default connect(mapStateToProp,mapDispathToProps)(CartContainer);
