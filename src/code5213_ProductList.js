import React from 'react';
import LinkButton from './code5211_3';

const itemList = (items) => {
    return items.map(({name, url}) => {
        return (
            <li>
                <p>{name}</p>
                <LinkButton
                url={url}
                label="商品詳細" 
                />
            </li>
        )
    })
};

const ProductList = (props) => {
    return (
        <ul>
            {itemList(props.items)}
        </ul>
    )
};

export default ProductList;