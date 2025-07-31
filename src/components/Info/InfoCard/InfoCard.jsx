import styles from '../styles.module.scss';
import TruckIcon from '@icons/svgs/truckIcon.svg';

function InfoCard({ content, description, src }) {
  const { containerCard, containerContent, title, des } = styles;
  return (
    <div className={containerCard}>
      <img width={40} height={41} src={src} alt='TruckIcon' />
      <div className={containerContent}>
        <span className={title}>{content}</span>
        <span className={des}>{description}</span>
      </div>
    </div>
  );
}
export default InfoCard;

// { title, description, src }
