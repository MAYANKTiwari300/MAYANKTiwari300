import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='page-shell min-h-screen'>
        {children}
      </div>
    </div>
  );
}