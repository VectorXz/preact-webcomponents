interface HeaderProps {
  title?: string;
}

export function Header({ title = 'Welcome!' }: HeaderProps) {
  return (
    <header style={{
      padding: '1rem',
      backgroundColor: '#4a90e2',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1>{title}</h1>
    </header>
  );
}