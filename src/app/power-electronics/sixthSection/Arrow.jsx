export default function Arrow({ className, strokeDashoffset }) {
  return (
    <svg
      version="1.1"
      width="740"
      height="2287"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      viewBox="0 0 740 2287"
      className={className}
    >
      <style type="text/css">
        {`
          .st01 {
            fill: #2bac44;
          }
          .st11 {
            fill: none;
            stroke: #EDFFF5;
            stroke-miterlimit: 10;
            stroke-width: 5;
          }
          .st21 {
            fill: none;
            stroke: #2bac44;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
            stroke-dasharray: 1.999, 5.997;
          }
        `}
      </style>
      <path
        className="st01"
        d="M361,2287l-11-18h22L361,2287z"
      />
      <path
        className="st21"
        d="M360.9,2269c0,0-8.6-87.8,57.4-145.5s314.4-188.1,314.4-421.5S676,1344.9,372,1234.9S0,1000,0,846.2
        S86.5,564,315.7,486.7S786.5,333.9,722,1"
      />
      <path
        className="st11"
        d="M360.9,2269c0,0-8.6-87.8,57.4-145.5s314.4-188.1,314.4-421.5S676,1344.9,372,1234.9S0,1000,0,846.2
        S86.5,564,315.7,486.7S786.5,333.9,722,1"
        style={{ strokeDashoffset }}
      />
    </svg>
  );
}