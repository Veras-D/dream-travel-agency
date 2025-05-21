import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';

describe('Hero component', () => {
  test('renders Hero section with title and button', () => {
    render(<Hero />);
    
    const heading = screen.getByRole('heading', { name: /your dream vacation awaits/i });
    expect(heading).toBeInTheDocument();

    const subtitle = screen.getByText(/find the best destinations and packages/i);
    expect(subtitle).toBeInTheDocument();

    const ctaButton = screen.getByRole('button', { name: /explore now/i });
    expect(ctaButton).toBeInTheDocument();
  });
});

