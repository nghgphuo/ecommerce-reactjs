import InputCustom from '@components/InputCommon2/Input';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import cls from 'classnames';
import { useDeferredValue } from 'react';

function Checkout() {
  const dataOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];

  const { container, title, coupon, leftBody, rightBody, row, row2Column } =
    styles;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm();

  console.log(errors);
  return (
    <div className={container}>
      <div className={leftBody}>
        <p className={coupon}>
          Have a coupon? <span>Click here to enter</span>
        </p>

        <p className={title}>BILLING DETAILS</p>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className={cls(row, row2Column)}>
            <InputCustom
              label={'First Name'}
              type={'text'}
              isRequired
              register={register('firstName', {
                required: true,
                maxLength: 25
              })}
            />
            <InputCustom
              label={'Last Name'}
              type={'text'}
              isRequired
              register={register('lastName', {
                required: true,
                maxLength: 25
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Company Name (optional)'}
              type={'text'}
              register={register('companyName')}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Country / Region'}
              dataOptions={dataOptions}
              isRequired
              register={register('country', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Street address'}
              type={'text'}
              isRequired
              register={register('street', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'apartment'}
              type={'text'}
              isShowlabel={false}
              register={register('apartment')}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Town / City'}
              type={'text'}
              isRequired
              register={register('city', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'State'}
              dataOptions={dataOptions}
              isRequired
              register={register('state', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Phone'}
              type={'text'}
              isRequired
              register={register('phone', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'ZIP code'}
              type={'text'}
              isRequired
              register={register('zipCode', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Email Address'}
              type={'text'}
              isRequired
              register={register('email', {
                required: true
              })}
            />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className={rightBody}></div>
    </div>
  );
}

export default Checkout;
