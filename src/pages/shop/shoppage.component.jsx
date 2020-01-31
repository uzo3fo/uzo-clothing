import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection.component'

export class ShopPage extends Component {
    constructor(props){
        super();
        this.state={
            collections:SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {
                  collections.map(({ id, ...otherCollections})=>(
                    <PreviewCollection key={id} {...otherCollections} />
                  ))
                }
            </div>
        )
    }
}

export default ShopPage
