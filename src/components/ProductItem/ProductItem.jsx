import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useState, useEffect } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isNotHomePage = false
}) {
  const [sizeChoose, setSizeChoose] = useState('');
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);

  const {
    boxImg,
    showImgWhenHover,
    showFncWhenHover,
    boxIcon,
    title,
    priceCl,
    boxSize,
    size,
    textCenter,
    boxBtn,
    isActiveSize,
    btnClear
  } = styles;

  const { size: sizes } = details;

  const handleChooseSize = () => {
    setSizeChoose(size);
  };

  const handleClearSize = () => {
    setSizeChoose('');
  };

  useEffect(() => {
    if (!isNotHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isNotHomePage, ourShopStore?.isShowGrid]);

  return (
    <div>
      <div className={boxImg}>
        <img src={src} alt='' />
        <img src={prevSrc} alt='' className={showImgWhenHover} />

        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <img src={cartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={reLoadIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={eyeIcon} alt='' />
          </div>
        </div>
      </div>
      {isNotHomePage && (
        <div className={boxSize}>
          {sizes.map((item, index) => {
            return (
              <div
                key={index}
                className={cls(size, {
                  [isActiveSize]: sizeChoose === item.name
                })}
                onClick={() => handleChooseSize(item.name)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      )}

      {sizeChoose && (
        <div className={btnClear} onClick={handleClearSize()}>
          clear
        </div>
      )}
      <div className={cls(title, { [textCenter]: isNotHomePage })}>{name}</div>
      <div className={cls(priceCl, { [textCenter]: isNotHomePage })}>
        Brand 01
      </div>
      <div className={cls(priceCl, { [textCenter]: isNotHomePage })}>
        ${price}
      </div>

      {isNotHomePage && (
        <div className={boxBtn}>
          <Button content={'ADD TO CART'} />
        </div>
      )}
    </div>
  );
}

export default ProductItem;
