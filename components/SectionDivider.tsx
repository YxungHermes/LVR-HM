interface SectionDividerProps {
  color?: string;
  height?: string;
  flip?: boolean;
}

export default function SectionDivider({
  color = "#FAF7F2",
  height = "120px",
  flip = false,
}: SectionDividerProps) {
  return (
    <div
      className={`absolute bottom-0 w-full overflow-hidden leading-[0] ${
        flip ? "rotate-180" : ""
      }`}
    >
      <svg
        className="relative block w-full"
        style={{ height }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill={color}
      >
        <path d="M321.39,56.44C182.36,68.21,87.48,103,0,120V0H1200V27.35C1087.92,51.63,960.34,76.44,825.4,81.5,661.13,87.69,492.89,44.62,321.39,56.44Z" />
      </svg>
    </div>
  );
}
