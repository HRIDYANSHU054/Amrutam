interface CircleProps {
  position: string;
}

function Circle({ position }: CircleProps) {
  return (
    <div
      className={`bg-[rgba(207,235,207,0.5)] size-[184px] rounded-full absolute ${position}`}
    ></div>
  );
}

export default Circle;
