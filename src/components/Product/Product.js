import styles from './Product.module.scss';

import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const onSizeClick = e => {
    e.preventDefault();

    if(currentSize.name !== e.target.dataset.name) {
      props.sizes.map((size) => {
        if(size.name === e.target.dataset.name) {
          setCurrentSize(size);
        }
        return true;
      });
    }
  };

  const onColorClick = e => {
    e.preventDefault();

    if(currentColor !== e.target.dataset.color) {
      setCurrentColor(e.target.dataset.color);
    }
  };

  const onAddClick = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=========================');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize.name);
    console.log('Color: ', currentColor);
  };

  const getPrice = useMemo(() => parseInt(props.basePrice) + parseInt(currentSize.additionalPrice), [props.basePrice, currentSize.additionalPrice]);


  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>

        <ProductOptions
          sizes={props.sizes}
          colors={props.colors}
          currentSize={currentSize}
          currentColor={currentColor}
          onColorClick={onColorClick}
          onSizeClick={onSizeClick}
          onAddClick={onAddClick}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  basePrice: PropTypes.number,
  colors: PropTypes.array,
  sizes: PropTypes.array
}

export default Product;