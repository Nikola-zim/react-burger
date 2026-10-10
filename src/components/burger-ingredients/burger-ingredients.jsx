import { Tab } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useMemo, useRef, useState } from 'react';

import { IngredientCard } from '@components/ingredient-card/ingredient-card';
import { ingredientPropType } from '@utils/prop-types';

import styles from './burger-ingredients.module.css';

const categories = [
  { type: 'bun', title: 'Булки' },
  { type: 'sauce', title: 'Соусы' },
  { type: 'main', title: 'Начинки' },
];

// Временные счётчики для демонстрации, пока нет логики добавления в конструктор
const demoCounts = {
  '60666c42cc7b410027a1a9b1': 1,
  '60666c42cc7b410027a1a9b4': 2,
};

export const BurgerIngredients = ({ ingredients }) => {
  const [currentTab, setCurrentTab] = useState('bun');
  const sectionRefs = useRef({});

  const groups = useMemo(
    () =>
      categories.map((category) => ({
        ...category,
        items: ingredients.filter((item) => item.type === category.type),
      })),
    [ingredients]
  );

  const handleTabClick = (type) => {
    setCurrentTab(type);
    sectionRefs.current[type]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.burger_ingredients}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <nav className={styles.menu}>
        {categories.map(({ type, title }) => (
          <Tab
            key={type}
            value={type}
            active={currentTab === type}
            onClick={handleTabClick}
          >
            {title}
          </Tab>
        ))}
      </nav>
      <div className={`${styles.scroll} custom-scroll mt-10`}>
        {groups.map(({ type, title, items }) => (
          <section
            key={type}
            className={styles.category}
            ref={(element) => {
              sectionRefs.current[type] = element;
            }}
          >
            <h2 className="text text_type_main-medium">{title}</h2>
            <ul className={`${styles.list} pt-6 pr-4 pb-10 pl-4`}>
              {items.map((item) => (
                <IngredientCard
                  key={item._id}
                  ingredient={item}
                  count={demoCounts[item._id]}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
};
