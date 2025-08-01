import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function ProductItem({ src, prevSrc, name, price }) {
  const {
    boxImg,
    showImgWhenHover,
    showFncWhenHover,
    boxIcon,
    title,
    priceCl
  } = styles;
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
      <div className={title}>{name}</div>
      <div className={priceCl}>${price}</div>
    </div>
  );
}

export default ProductItem;
