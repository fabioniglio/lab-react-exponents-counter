import { toSuperscript } from "../utils/superscriptUtils";

const Exponent = ({ count, exponent }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        n<span className="superscript">{toSuperscript(exponent)}</span>
      </p>
      <p className="exponent-result">
        <span className="total">{Math.pow(count, exponent)}</span>
      </p>
    </div>
  );
};

export default Exponent;
