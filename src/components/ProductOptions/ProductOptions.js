import styles from './ProductOptions.module.scss';

import PropTypes from 'prop-types';

import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';

const ProductOptions = props => {

  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize sizes={props.sizes} onSizeClick={props.onSizeClick} currentSize={props.currentSize} />
      </div>

      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor colors={props.colors} onColorClick={props.onColorClick} currentColor={props.currentColor} />
      </div>

      <Button className={styles.button} onClick={props.onAddClick}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

OptionColor.propTypes = {
  sizes: PropTypes.array,
  colors: PropTypes.array,
  currentSize: PropTypes.object,
  currentColor: PropTypes.string,
  onColorClick: PropTypes.func,
  onSizeClick: PropTypes.func,
  onAddClick: PropTypes.func
}

export default ProductOptions;