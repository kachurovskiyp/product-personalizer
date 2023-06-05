import styles from './OptionColor.module.scss';

import PropTypes from 'prop-types';

import clsx from 'clsx';
import shortid from 'shortid';

const OptionColor = props => {
  const upperFirstLetter = str => str[0].toUpperCase() + str.slice(1);

  return (
    <ul className={styles.choices}>
      {props.colors.map((color) => {
        return (<li key={shortid()}>
          <button
            onClick={props.onColorClick}
            type="button"
            data-color={color}
            className={clsx(
              styles[`color${upperFirstLetter(color)}`],
              props.currentColor === color && styles.active)}
          />
        </li>)
      })}
    </ul>
  )
};

OptionColor.propTypes = {
  colors: PropTypes.array,
  onColorClick: PropTypes.func,
  currentColor: PropTypes.string
}

export default OptionColor;
