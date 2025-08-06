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
  isHomePage = true
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
    content,
    containerItem,
    leftBtn,
    largImg,
    isActiveSize,
    btnClear
  } = styles;

  const { size: sizes } = details;

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearSize = () => {
    setSizeChoose('');
  };

  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);

  return (
    <div className={isShowGrid ? '' : containerItem}>
      <div className={cls(boxImg, { [largImg]: !isShowGrid })}>
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
      <div className={isShowGrid ? '' : content}>
        {!isHomePage && (
          <div className={boxSize}>
            {sizes.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cls(size, {
                    [isActiveSize]: sizeChoose === item.name
                  })}
                  onClick={() =>
                    sizeChoose === item.name
                      ? handleClearSize()
                      : handleChooseSize(item.name)
                  }
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
        {/* {sizeChoose && (
          <div className={btnClear} onClick={() => handleClearSize()}>
            clear
          </div>
        )} */}
        <div className={cls(title, { [textCenter]: !isHomePage })}>{name}</div>
        <div
          className={cls(priceCl, { [textCenter]: !isHomePage })}
          style={{
            color: '#888'
          }}
        >
          Brand 01
        </div>
        {/* toto */}
        <div
          className={cls(priceCl, { [textCenter]: !isHomePage })}
          style={{
            color: isHomePage ? '#333' : '#888'
          }}
        >
          ${price}
        </div>

        {!isHomePage && (
          <div className={cls(boxBtn, { [leftBtn]: !isShowGrid })}>
            <Button content={'ADD TO CART'} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
