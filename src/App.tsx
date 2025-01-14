import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { ProductPage } from './components/ProductPage';

function App() {
  return (
    <Router>

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
