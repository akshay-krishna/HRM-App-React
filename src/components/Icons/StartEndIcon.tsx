function StartEndIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="var(--primary)"
      xmlns="http://www.w3.org/2000/svg"
      height="45px"
      width="45px"
      viewBox="0 -960 960 960"
    >
      <path d="M660-280v-400q0-17 11.5-28.5T700-720q17 0 28.5 11.5T740-680v400q0 17-11.5 28.5T700-240q-17 0-28.5-11.5T660-280Zm-440-35v-330q0-18 12-29t28-11q5 0 11 1t11 5l248 166q9 6 13.5 14.5T548-480q0 10-4.5 18.5T530-447L282-281q-5 4-11 5t-11 1q-16 0-28-11t-12-29Zm80-165Zm0 90 136-90-136-90v180Z" />
    </svg>
  );
}

export default StartEndIcon;
