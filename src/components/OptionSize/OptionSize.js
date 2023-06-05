import styles from './OptionSize.module.scss';

import PropTypes from 'prop-types';

import clsx from 'clsx';
import shortid from 'shortid';

const OptionSize = props => {

  return (
    <ul className={styles.choices}>
      {props.sizes.map(
        size =>
          <li key={shortid()}>
            <button
              onClick={props.onSizeClick}
              type="button"
              data-name={size.name}
              className={clsx(props.currentSize.name === size.name && styles.active)}
              key={shortid()}>{size.name}
            </button>
          </li>)}
    </ul>
  )
};

OptionSize.propTypes = {
  sizes: PropTypes.array,
  onSizeClick: PropTypes.func,
  currentSize: PropTypes.object
}

export default OptionSize;
