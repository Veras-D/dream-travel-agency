import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  test('renders logo and brand name', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    const logo = screen.getByAltText(/globe icon/i);
    expect(logo).toBeInTheDocument();
    const brandName = screen.getByText(/dream_travel/i);
    expect(brandName).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByRole('link', { name: /destinations/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about_us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  test('toggles menu when hamburger is clicked', async () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
    const navMenu = screen.getByTestId('navbar-collapse'); // Adicione data-testid ao seu componente
    
    expect(navMenu).toHaveClass('collapse');
    
    await userEvent.click(toggleButton);
    expect(navMenu).not.toHaveClass('collapse');
    
    await userEvent.click(toggleButton);
    expect(navMenu).toHaveClass('collapse');
  });
});