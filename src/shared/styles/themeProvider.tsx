import './reset.css';
import { themeClass } from './';

export default function ThemeProvider({
  theme,
  className,
  children,
}: {
  children: React.ReactNode;
  theme?: string;
  className?: string;
}) {
  return (
    <div className={`${theme ?? themeClass} ${className}`}>{children}</div>
  );
}
