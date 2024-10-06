import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NavBar from './NavBar';

// Mock the Menu component
vi.mock('./menu', () => ({
  default: () => <div data-testid="menu">Menu Component</div>
}));

describe('NavBar Component', () => {
  it('should render the NavBar correctly', () => {
    render(<NavBar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should toggle menu visibility when menu button is clicked', () => {
    render(<NavBar />);
    
    // Initially, the menu should not be visible
    expect(screen.queryByTestId('menu')).toBeNull();
    
    // Click the menu button to show the menu
    fireEvent.click(screen.getByRole('button'));
    
    // Now, the menu should be visible
    expect(screen.getByTestId('menu')).toBeInTheDocument();

    // Click the menu button again to hide the menu
    fireEvent.click(screen.getByRole('button'));

    // Menu should not be visible now
    expect(screen.queryByTestId('menu')).toBeNull();
  });

  it('should display the correct menu items', () => {
    render(<NavBar />);
    
    fireEvent.click(screen.getByRole('button')); // Open the menu
    
    // Check if the specific menu items are rendered
    expect(screen.getByText('Menu Component')).toBeInTheDocument();
  });


});
