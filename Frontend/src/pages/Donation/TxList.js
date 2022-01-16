//confirm.js
export default function TxList({ txs }) {
  if (txs.length === 0) return null;

  return (
    <>
      {txs.map((item) => (
        <div key={item}>
          <div>
            {/*<label>{item.hash}</label> */}
            <br />
            <h1>Payment sucessful!</h1>
          </div>
        </div>
      ))}
    </>
  );
}
