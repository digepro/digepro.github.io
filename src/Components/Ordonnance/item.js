import React from 'react'

class Item extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
           
        }
    }

    render()
    {
        return(
            <div className="item">
                <center><h4>{this.props.name}</h4></center>
                <div className="listeBoutons">
                    <button className="boutonItem" onClick={this.props.substract}><i class="fas fa-minus"></i></button>
                    <h5>Quantité: {this.props.quantity}</h5>
                    <button className="boutonItem" onClick={this.props.add}><i class="fas fa-plus"></i></button>
                </div>
            </div>
        );
    }
}

export default Item;