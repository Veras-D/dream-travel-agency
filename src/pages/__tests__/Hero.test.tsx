import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Hero from '../../components/Hero';

describe('Hero component', () => {
  test('renders Hero section with title and button', () => {
    render(<Hero />, { wrapper: MemoryRouter });
    
    const heading = screen.getByRole('heading', { name: /explore_world/i });
    expect(heading).toBeInTheDocument();
    
    const subtitle = screen.getByText(/discover_destinations/i);
    expect(subtitle).toBeInTheDocument();
    
    const ctaButton = screen.getByRole('link', { name: /check_packages/i });
    expect(ctaButton).toBeInTheDocument();
  });
});