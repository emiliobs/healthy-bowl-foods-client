import React from 'react';  

interface Product
{
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
}

interface productCardProps
{
    product: Product;
}

const ProductCard: React.FC<productCardProps> = ({ product }) => {
    return(
        <div className='product-card'>
            <h3>{product.name}</h3>
            <p className='prodcut-price'>£{product.price.toFixed(2)}</p>
            <p className='prodcut-status'>{product.isAvailable ? 'In stock' : 'Out of stock'}</p>
        </div>
    );
};

export default ProductCard;