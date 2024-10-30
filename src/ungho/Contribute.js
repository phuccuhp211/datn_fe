import React from 'react';
import styles from './Support.module.css';


const Contribute = () => {
    return (
      <div className={styles.containerContribute}>
        <h1>Đóng góp ý kiến</h1>
        <p>Bạn có ý kiến góp ý cho Hội để xây dựng, vận hành và phát triển? Mời bạn đóng góp ý kiến tại đây</p>
        <div className={styles.columContribute}>
            <div className={styles.formContribute}>
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
                <h2>Cac kenh nhan quyen gop</h2>
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
    );
}

export default Contribute;
