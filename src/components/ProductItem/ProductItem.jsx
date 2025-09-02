import Button from '@components/Button/Button';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { CiHeart } from 'react-icons/ci';
import { LiaEyeSolid, LiaShoppingBagSolid } from 'react-icons/lia';
import { TfiReload } from 'react-icons/tfi';
import { OurShopContext } from '@contexts/OurShopProvider';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import cls from 'classnames';
import Cookies from 'js-cookie';
import { handleAddProductToCartCommon } from '@/utils/helper';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true,
  slideItem = false
}) {
  const [sizeChoose, setSizeChoose] = useState('');
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);

  const userId = Cookies.get('userId');
  const { setIsOpen, setType, handleGetListProductsCart, setDetailProduct } =
    useContext(SidebarContext);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleAddToCart = () => {
    handleAddProductToCartCommon(
      userId,
      setIsOpen,
      setType,
      toast,
      sizeChoose,
      details._id,
      1,
      setIsLoading,
      handleGetListProductsCart
    );
  };

  const handleShowDetailProductSideBar = () => {
    setIsOpen(true);
    setType('detail');
    setDetailProduct(details);
  };

  const handleNavigateToDetail = () => {
    const path = `/product/${details._id}`;
    console.log(path);
    navigate(path);
  };

  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);

  useEffect(() => {
    if (slideItem) setIsShowGrid(true);
  }, [slideItem]);

  return (
    <div
      className={isShowGrid ? '' : containerItem}
      style={{ cursor: 'pointer' }}
    >
      <div
        className={cls(boxImg, { [largImg]: !isShowGrid })}
        onClick={handleNavigateToDetail}
      >
        <img src={src} alt='' />
        <img src={prevSrc} alt='' className={showImgWhenHover} />

        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <LiaShoppingBagSolid
              style={{
                fontSize: '20px'
              }}
            />
          </div>
          <div className={boxIcon}>
            <CiHeart
              style={{
                fontSize: '25px'
              }}
            />
          </div>
          <div className={boxIcon}>
            <TfiReload
              style={{
                fontSize: '20px'
              }}
            />
          </div>
          <div className={boxIcon} onClick={handleShowDetailProductSideBar}>
            <LiaEyeSolid
              style={{
                fontSize: '23px'
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={isShowGrid ? '' : content}
        style={{
          marginTop: slideItem && '10px'
        }}
      >
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
            <Button
              content={isLoading ? <LoadingTextCommon /> : 'ADD TO CART'}
              onClick={handleAddToCart}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
