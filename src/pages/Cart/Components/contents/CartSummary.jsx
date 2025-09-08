import React from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import cls from 'classnames';
import { useContext } from 'react';
import { SidebarContext } from '@/contexts/SidebarProvider';
import LoadingCart from '@/pages/Cart/components/Loading';
import { StepperContext } from '@/contexts/StepperProvider';
import { handleTotalPrice } from '@/utils/helper';

const CartSummary = () => {
  const {
    containerSummary,
    title,
    boxTotal,
    price,
    subTotal,
    totals,
    space,

    containerRight
  } = styles;

  const { listProductCart, isLoading } = useContext(SidebarContext);

  const { setCurrentStep } = useContext(StepperContext);

  const total = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  const handleProcessCheckout = () => {
    setCurrentStep(2);
  };

  return (
    <div className={containerRight}>
      <div className={containerSummary}>
        <div className={title}>CART TOTALS</div>

        <div className={cls(boxTotal, subTotal)}>
          <div>Subtotal</div>
          <div className={price}>${total.toFixed(2)}</div>
        </div>

        <div className={cls(boxTotal, totals)}>
          <div>TOTAL</div>
          <div>${total.toFixed(2)}</div>
        </div>

        <Button
          content={'PROCEED TO CHECKOUT'}
          onClick={handleProcessCheckout}
        />
        <div className={space} />
        <Button content={'CONTINUE SHOPPING'} isPrimary={false} />

        {isLoading && <LoadingCart />}
        <PaymentMethods />
      </div>
    </div>
  );
};

export default CartSummary;
