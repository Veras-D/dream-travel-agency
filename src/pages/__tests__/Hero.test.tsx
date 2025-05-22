import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Hero from '../../components/Hero';

describe('Hero component', () => {
  test('renders Hero section with title and button', () => {
    render(<Hero />, { wrapper: MemoryRouter });
    
    const heading = screen.getByRole('heading', { name: /explore the world with dream travel/i });
    expect(heading).toBeInTheDocument();
    
    const subtitle = screen.getByText(/discover incredible destinations and create unforgettable memories/i);
    expect(subtitle).toBeInTheDocument();
    
    const ctaButton = screen.getByRole('link', { name: /check out our packages/i });
    expect(ctaButton).toBeInTheDocument();
  });
});