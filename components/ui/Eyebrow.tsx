type EyebrowProps = {
  children: string;
  onDark?: boolean;
};

export function Eyebrow({ children, onDark = false }: EyebrowProps) {
  return (
    <div className={onDark ? "eyebrow eyebrow--dark" : "eyebrow"}>
      <span className="dot" aria-hidden="true" />
      {children}
    </div>
  );
}
