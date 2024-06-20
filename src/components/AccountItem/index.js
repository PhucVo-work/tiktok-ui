import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles) 

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src = "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7310279064299208736~c5_300x300.webp?lk3s=a5d48078&nonce=4732&refresh_token=e2223dfa8218a95de80fe997fee3e543&x-expires=1719072000&x-signature=i9wTBGgw1rxr35Ii1D7eoquTkpA%3D&from=2782167160&shp=a5d48078&shcp=c1333099" alt ="vtv24 avtar" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <h4>Nguyễn Văn A</h4>   
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
     );
}

export default AccountItem