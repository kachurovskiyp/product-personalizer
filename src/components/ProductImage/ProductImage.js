import styles from './ProductImage.module.scss'
import PropTypes from 'prop-types';

const ProductImage = props => {

  return (
    <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`} />
      </div>
  );
};

ProductImage.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
}

export default ProductImage;
