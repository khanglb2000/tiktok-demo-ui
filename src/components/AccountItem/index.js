import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6347565be1c472d11e05d40f34e815d6~c5_100x100.jpeg?x-expires=1671930000&x-signature=vp1p0IOxNcMrFLha0alqI6v1EG0%3D"
        alt="Kevin"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Tham Thiên Đế</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>thamthiende</span>
      </div>
    </div>
  );
}

export default AccountItem;
