import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from '@krgaa/react-developer-burger-ui-components';

import styles from './app-header.module.css';

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.menu} pt-4 pb-4`}>
        <ul className={styles.list}>
          <li>
            <a href="/" className={`${styles.link} pt-4 pr-5 pb-4 pl-5`}>
              <BurgerIcon type="primary" />
              <span className="text text_type_main-default ml-2">Конструктор</span>
            </a>
          </li>
          <li className="ml-2">
            <a href="/feed" className={`${styles.link} pt-4 pr-5 pb-4 pl-5`}>
              <ListIcon type="secondary" />
              <span className="text text_type_main-default text_color_inactive ml-2">
                Лента заказов
              </span>
            </a>
          </li>
        </ul>
        <a href="/" className={styles.logo} aria-label="Stellar Burgers">
          <Logo />
        </a>
        <a
          href="/profile"
          className={`${styles.link} ${styles.link_position_last} pt-4 pr-5 pb-4 pl-5`}
        >
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive ml-2">
            Личный кабинет
          </span>
        </a>
      </nav>
    </header>
  );
};
