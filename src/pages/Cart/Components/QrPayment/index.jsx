import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import cls from 'classnames';
function QrPayment() {
  const { container, right, title, flex, des, left, total } = styles;
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const id = params.get('id');
  const totalAmount = params.get('totalAmount');

  const qrCodeImage = `https://qr.sepay.vn/img?acc=VQRQACJYV7290&bank=MBBank&amount=${totalAmount}&des=${id}`;

  return (
    <div className={container}>
      <div className={left}>
        <h4>Quét mã QR để thanh toán</h4>
        <img src={qrCodeImage} alt='QR Code' />
        <p>Sử dụng ứng dụng ngân hàng của bạn để quét mã QR</p>
      </div>

      <div>
        <h3>Chi tiết thanh toán</h3>
        <div className={right}>
          <div className={cls(title, flex)}>
            <div>
              <img
                src='data:image/png;base64,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'
                alt='Logo TP Bank'
              />
            </div>
            <div>
              <p>MB BANK</p>
              <p>Chuyển khoản ngân hàng</p>
            </div>
          </div>

          <div>
            <div className={cls(flex, des)}>Chủ tài khoản:</div>
            <div>NGUYEN HOANG PHUOC</div>
          </div>

          <div className={cls(flex, des)}>
            <div>Số tài khoản:</div>
            <div>0000000123456</div>
          </div>

          <div className={cls(flex, des)}>
            <div>Số tiền:</div>
            <div>{totalAmount} VND</div>
          </div>

          <div className={cls(flex, des)}>
            <div>Nội dung chuyển khoản:</div>
            <div>{id}</div>
          </div>

          <div className={cls(total, flex)}>
            <div>TOTAL:</div>
            <div>{totalAmount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrPayment;
