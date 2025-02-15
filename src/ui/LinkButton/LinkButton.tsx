import { Link } from "react-router-dom";

import styles from "./LinkButton.module.scss";

type Props = {
  children: React.ReactNode;
  to: string;
  className?: string;
};

export function LinkButton({ children, to, className }: Props) {
  return (
    <Link to={to} className={`${styles.LinkButton} ${className}`}>
      {children}
    </Link>
  );
}
