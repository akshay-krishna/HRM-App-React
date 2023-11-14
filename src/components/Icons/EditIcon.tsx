function EditIcon({
  width = "20px",
  height = "22px",
  onClick,
}: {
  width?: string;
  height?: string;
  onClick: any;
}) {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.53852 8.23077C9.06792 8.23077 10.3077 6.83596 10.3077 5.11538C10.3077 3.39481 9.06792 2 7.53852 2C6.00911 2 4.76929 3.39481 4.76929 5.11538C4.76929 6.83596 6.00911 8.23077 7.53852 8.23077Z"
        fill="black"
        stroke="black"
        strokeWidth="2.28571"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.69231 18.6155H2V16.5385C2.0098 15.4832 2.2572 14.4478 2.71911 13.5292C3.18101 12.6106 3.84234 11.8386 4.64132 11.2855C5.44031 10.7323 6.35088 10.416 7.28798 10.3661C8.22508 10.3162 9.15814 10.5343 10 11.0001M18 13.077L12.2031 19.5985L9.58154 20.0001L9.95077 17.0508L15.7354 10.5293L18 13.077Z"
        fill="black"
      />
      <path
        d="M5.69231 18.6155H2V16.5385C2.0098 15.4832 2.2572 14.4478 2.71911 13.5292C3.18101 12.6106 3.84234 11.8386 4.64132 11.2855C5.44031 10.7323 6.35088 10.416 7.28798 10.3661C8.22508 10.3162 9.15814 10.5343 10 11.0001M18 13.077L12.2031 19.5985L9.58154 20.0001L9.95077 17.0508L15.7354 10.5293L18 13.077Z"
        stroke="black"
        strokeWidth="2.28571"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EditIcon;
