import clsx from "clsx";

type SectionDividerProps = {
  color?: string;
  height?: number;
  flipX?: boolean;
  flipY?: boolean;
  variant?: "soft-wave" | "swell" | "s-curve";
  className?: string;
};

const paths = {
  "soft-wave": "M0,64 C200,0 400,128 600,64 C800,0 1000,128 1200,64 L1200,120 L0,120 Z",
  swell: "M0,80 C300,130 900,30 1200,80 L1200,120 L0,120 Z",
  "s-curve": "M0,80 C250,0 950,160 1200,80 L1200,120 L0,120 Z",
};

export default function SectionDivider({
  color = "fill-[#FAF7F2]",
  height = 96,
  flipX = false,
  flipY = false,
  variant = "soft-wave",
  className,
}: SectionDividerProps) {
  return (
    <div
      className={clsx(
        "relative w-full pointer-events-none select-none",
        className
      )}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={clsx("absolute inset-0 w-full h-full block", color, {
          "scale-x-[-1]": flipX,
          "scale-y-[-1]": flipY,
        })}
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}
