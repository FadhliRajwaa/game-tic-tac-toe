function Kotak({ nilai, onClick }) {
    return (
      <button className="square" onClick={onClick}>
        {nilai}
      </button>
    );
  }

export default Kotak;