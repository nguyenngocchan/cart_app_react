import React, { Component } from 'react';
import {MSG_DELETE_PRODUCT_CART_SUCCESS} from './../constants/Message';
class CartItem extends Component {
  render() {
      var {item}=this.props;
    return (
        <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}</td>
            <td className="center-on-small-only">
                <span className="qty">{item.quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{this.showTotal(item.product.price,item.quantity)}</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item"
                    onClick={()=>this.onDelete(item.product.id)}
                    >
                    X
                </button>
            </td>
        </tr>
    );
  }
  onDelete=(id)=>{
    this.props.onDelete(id);
    this.props.onChangeMessage(MSG_DELETE_PRODUCT_CART_SUCCESS);
    
  }
  showTotal=(price,quantity)=>{
      return price*quantity;
  }
}

export default CartItem;
