import { RippleBoxProps, StyledRippleBox } from "./RippleBox";

export default function RippleBox({ color, width, height }: RippleBoxProps) {
  const handler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = event.currentTarget;

    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = container.getBoundingClientRect();
    const length = Math.max(rect.width, rect.height);

    circle.style.width = `${length}px`;
    circle.style.height = `${length}px`;
    circle.style.left = `${event.clientX - rect.left - length / 2}px`;
    circle.style.top = `${event.clientY - rect.top - length / 2}px`;

    container.appendChild(circle);
    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  };

  return (
    <StyledRippleBox
      onClick={handler}
      color={color}
      width={width}
      height={height}
    ></StyledRippleBox>
  );
}
