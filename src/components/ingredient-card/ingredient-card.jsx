import { Counter, CurrencyIcon } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import { ingredientPropType } from '@utils/prop-types';

import styles from './ingredient-card.module.css';

export const IngredientCard = ({ ingredient, count = 0 }) => {
  return (
    <li className={styles.card}>
      {count > 0 && <Counter count={count} size="default" />}
      <img
        className={`${styles.image} pl-4 pr-4`}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <p className={`${styles.price} text text_type_digits-default mt-1 mb-1`}>
        {ingredient.price}
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${styles.name} text text_type_main-default`}>{ingredient.name}</p>
    </li>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientPropType,
  count: PropTypes.number,
};
