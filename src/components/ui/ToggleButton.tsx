import { ReactNode } from "react";

interface ToggleButtonProps {
  toggle: boolean | undefined;
  onToggle: (liked: boolean) => void;
  onIcon: ReactNode;
  offIcon: ReactNode;
}

export default function ToggleButton({
  toggle,
  onToggle,
  onIcon,
  offIcon,
}: ToggleButtonProps) {
  const handleToggle = () => {
    onToggle(!toggle);
  };
  return <button onClick={handleToggle}>{toggle ? onIcon : offIcon}</button>;
}
