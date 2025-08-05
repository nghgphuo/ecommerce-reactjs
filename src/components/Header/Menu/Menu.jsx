import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';
import { useState } from 'react';
import classNames from 'classnames';

function Menu({ content, href }) {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { userInfo, handleLogOut } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const handleClickShowLogin = () => {
    if (content === 'Sign in' && !userInfo) {
      setIsOpen(true);
      setType('Login');
    }
  };

  const handleRenderText = () => {
    if (content === 'Sign in' && userInfo) {
      return `Hello ${userInfo?.username}`;
    } else {
      return content;
    }
  };

  const handleHover = () => {
    if (content === 'Sign in' && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  return (
    <div
      className={menu}
      onMouseEnter={handleHover}
      onClick={handleClickShowLogin}
    >
      {handleRenderText(content)};
      {isShowSubMenu && (
        <div
          onMouseLeave={() => isShowSubMenu(false)}
          className={subMenu}
          onClick={handleLogOut}
        >
          LOG OUT
        </div>
      )}
    </div>
  );
}

export default Menu;
