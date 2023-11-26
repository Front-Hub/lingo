export const SelectArrow: React.FC<{ props?: SVGSVGElement }> = (props) => {
  return (
    <svg
      className="w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-0 mr-2 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 412 232"
      fill="rgb(228 228 231)"
      {...props}
    >
      <path
        d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
        fill-rule="nonzero"
      />
    </svg>
  );
};
