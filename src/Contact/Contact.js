import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
      <div>
<div className={styles.linkWeb}>
    <div className={styles.link}>
        <a href='/'>Trang chu </a> -- <a href='/sanpham'>San pham</a>
    </div>
</div>


<div className={styles.containerContribute}>
      
        
        <div className={styles.columContribute}>
            <div className={styles.formContribute}>
            <h1>Đóng góp ý kiến</h1>
            <hr></hr>
               <div className={styles.nameContribute}>
               <div className={styles.NameContribute}>
                    <label>Họ</label><br/>
                    <input placeholder='nhap ho cua ban'></input>
                </div>
                <div className={styles.NameContribute}>
                    <label>Họ</label><br/>
                    <input placeholder='nhap ho cua ban'></input>
                </div>
               </div>
               <div className={styles.emailContribute}>
                    <label>Họ</label><br/>
                    <input placeholder='nhap ho cua ban'></input>
                </div>
                <div className={styles.textareaContribute}>
                    <label>Họ</label><br/>
                    <textarea placeholder='nhap ho cua ban'></textarea>
                </div>
                <div className={styles.btnContribute}>
                    <button>Gui tin nhan</button>
                </div>
            </div>
            <div className={styles.donateContribute}>
                <h1>Thông tin liên hệ</h1>
                <hr></hr>
                <div className={styles.donateContributee}>
                    <p>Hot line: 0334857779</p>
                    <p>Hot line: 0334857779</p>
                    <p>Hot line: 0334857779</p>
                </div>
               
               <div className={styles.contactDonate}>
                <h2>Các kênh nhận quyên góp</h2>
               <div className={styles.formDonate}>
                    <div className={styles.formBank}>
                        <div className={styles.imgDonate}><img src='../image/gioithieu2.png'></img></div>
                       <div className={styles.bankDotate}>
                       <div className={styles.bank} >
                       <p><strong>Luong Bao Minh</strong></p>
                       <p>0334857779</p>
                       </div>
                       </div>
                    </div>


                    <div className={styles.formBank}>
                        <div className={styles.imgDonate}><img src='../image/gioithieu2.png'></img></div>
                       <div className={styles.bankDotate}>
                       <div className={styles.bank} >
                       <p><strong>Luong Bao Minh</strong></p>
                       <p>0334857779</p>
                       </div>
                       </div>
                    </div>


                    <div className={styles.formBank}>
                        <div className={styles.imgDonate}><img src='../image/gioithieu2.png'></img></div>
                       <div className={styles.bankDotate}>
                       <div className={styles.bank} >
                       <p><strong>Luong Bao Minh</strong></p>
                       <p>0334857779</p>
                       </div>
                       </div>
                    </div>

                  
                </div>
               </div>
            </div>
        </div>

      </div>

      </div>
    );
}

export default Contact;
