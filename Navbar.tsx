import { ConnectWallet, useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { TOKEN_CONTRACT_ADDRESS } from "../constants/contracts";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    // Get the user's address
    const address = useAddress();

    // Get instance of the token contract
    // Get the user's token balance with address
    const { contract: tokenContract } = useContract(TOKEN_CONTRACT_ADDRESS);
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);

    // Truncate the number to 6 decimal places
    const truncateNumber = (num: string) => {
        return num.slice(0, 13);
    }

    return (
        <div className={styles.navContainer}>
        <nav className={styles.nav}>

        <div className={styles.navLeft}>        
          <h1 className={styles.logo}>SNFT</h1>
                   
          {tokenBalance && (
           <h5 className={styles.balance}> {truncateNumber(tokenBalance?.displayValue as string)} <p className={styles.gradientText}>S</p></h5>)}
           
        </div>
          <div className={styles.navMiddle}>   
        
           
                        
            </div>
    
            <div className={styles.navRight}>
              
          <ConnectWallet
          theme={"dark"}
          btnTitle={"Play"}
          modalTitle={"SNFT Tokens Farm"}
          modalSize={"compact"}
          modalTitleIconUrl={
            "https://i.imgur.com/vVY6afk.png"
          }
          style={{ 
          color: "#a6a8a7", 
          backgroundImage: "linear-gradient(90deg, rgb(3, 37, 27) 0%, rgba(10, 16, 29, 0.932) 100%)",
          border: "1px solid #a6a8a7",
          borderRadius: "50px",
          padding: "10px",  
          fontWeight: "700",
          fontSize: "14px",
          fontStyle: "italic",
          fontFamily: "var(--font-mono)",
          }}
        />
     
            
            
           
    </div>
    </nav>
   
    </div>  
      );
    }

export default Navbar;
