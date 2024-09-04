export default function SmallArrow() {
  return (
    <svg
      width="20"
      height="88"
      viewBox="0 0 16 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="8"
        y1="1"
        x2="8"
        y2="76"
        stroke="#2bac44"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3, 6"
      />
      <path
        d="M8.5 78V0.5"
        stroke="#EDFFF5"
        strokeWidth="0"
        strokeDashoffset="1000"
      />
      <path
        d="M8 88L0 75H16L8 88Z"
        fill="#2bac44"
        style={{ opacity: '1' }}
      />
    </svg>
  );
}