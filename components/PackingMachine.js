import Image from "next/image";
import Logo from "../public/images/continuous industrial fryer.jpg";

const styles = {
  product: `rounded-[10px] bg-white border border-solid border-[#e9e9e9] m-[10px] cursor-pointer w-[215px] shadow-[10px_10px_10px_#f6f6f6] hover:shadow-[10px_10px_10px_#eeeeee]`,
  productDetails: `flex justify-center items-center flex-col`,
  productImage: `flex justify-center items-center pt-[15px] pb-[15px] w-[178px] h-[192px] bg-white`,
  productInfo: ``,
  productName: ``,
  productButton: ``,
  buttonIcon: ``,
  buttonText: ``,
};

const PackingMachine = () => {
  return (
    <div className={styles.product}>
      <div className={styles.productDetails}>
        <div className={styles.productImage}>
          <Image src={Logo} alt="" width={178} height={192} />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productName}>
            <p>fewhifeifh</p>
          </div>
        </div>
      </div>
      <div className={styles.productButton}>
        <div className={styles.buttonIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bookmark"
            viewBox="0 0 16 16"
          >
            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
          </svg>
        </div>
        <div className={styles.buttonText}>
          <h4>SAVE</h4>
        </div>
      </div>
    </div>
  );
};

export default PackingMachine;
