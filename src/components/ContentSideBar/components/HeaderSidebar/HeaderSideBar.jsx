import styles from './styles.module.scss';

function HeaderSideBar({ title, icon }) {
  const { container } = styles;
  return (
    <div className={container}>
      {icon}
      <div>{title}</div>
    </div>
  );
}

export default HeaderSideBar;
