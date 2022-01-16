//app.js
import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import styles from "./Donation.module.css";
import donationimg from ".././Assets/space.png";
import Modal from "./components/Modal";
import { AnimatePresence, motion } from "framer-motion";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: "0x18BE26b2012f73f63F487E8A82A50e603089b51B",
    });
  };
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className={styles.donation}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>We need your help!</h1>
          <h2>Donate now to help us make this project a reality.</h2>
          <p>*Donations will all be in ETH</p>
        </div>
        <form onSubmit={handleSubmit}>
          <main>
            <div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <h5>First Name</h5>
                  <input type="text" placeholder="John" />
                </div>
                <div className={styles.column}>
                  <h5>Last Name</h5>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>
              <h5>Email</h5>
              <input type="text" placeholder="JohnDoe@gmail.com" />
              <h5>Enter amount to donate</h5>
              <input name="ether" type="text" placeholder="Amount in ETH" />
            </div>
          </main>
        </form>
        <ErrorMessage message={error} />
        <img src={donationimg} />
        <TxList txs={txs} />
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
        type="submit"
      >
        Submit
      </motion.button>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}
