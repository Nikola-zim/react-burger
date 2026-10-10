import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { ingredientPropType } from '@utils/prop-types';

import styles from './burger-constructor.module.css';

// Пока нет логики сборки: показываем первую булку и несколько начинок из данных
const DEMO_FILLINGS_COUNT = 6;

export const BurgerConstructor = ({ ingredients }) => {
  const bun = useMemo(
    () => ingredients.find((item) => item.type === 'bun'),
    [ingredients]
  );
  const fillings = useMemo(
    () =>
      ingredients.filter((item) => item.type !== 'bun').slice(0, DEMO_FILLINGS_COUNT),
    [ingredients]
  );

  const totalPrice = useMemo(
    () =>
      (bun ? bun.price * 2 : 0) + fillings.reduce((sum, item) => sum + item.price, 0),
    [bun, fillings]
  );

  return (
    <section className={`${styles.burger_constructor} pt-25`}>
      {bun && (
        <div className="pl-8 pr-4">
          <ConstructorElement
            type="top"
            isLocked
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      )}
      <ul className={`${styles.fillings} custom-scroll mt-4 mb-4 pr-2`}>
        {fillings.map((item) => (
          <li key={item._id} className={styles.filling}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </li>
        ))}
      </ul>
      {bun && (
        <div className="pl-8 pr-4">
          <ConstructorElement
            type="bottom"
            isLocked
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      )}
      <div className={`${styles.footer} mt-10 pr-8`}>
        <p className={`${styles.total} text text_type_digits-medium mr-10`}>
          {totalPrice}
          <CurrencyIcon type="primary" />
        </p>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
};
