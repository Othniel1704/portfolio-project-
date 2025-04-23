import { render, screen } from '@testing-library/react';
import About from './About';
import { describe, it, expect } from 'vitest';

describe('About Component', () => {
  it('should render the about section', () => {
    render(<About />);
    const aboutSection = screen.getByTestId('about-section');
    expect(aboutSection).toBeInTheDocument();
  });

  it('should display the title', () => {
    render(<About />);
    const title = screen.getByText('À propos de moi');
    expect(title).toBeInTheDocument();
  });

  it('should render all skills', () => {
    render(<About />);
    const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'python', 'php', 'mysql/sql', 'HTML/CSS', 'Git'];
    skills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
