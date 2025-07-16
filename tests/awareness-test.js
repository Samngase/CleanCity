// Test cases for Awareness component (Accessibility Testing)
import React from 'react';
import { render, screen } from '@testing-library/react';
import Awareness from './Awareness';

describe('Awareness Component', () => {
  test('renders Awareness component', () => {
    render(<Awareness />);
    expect(screen.getByText(/Waste Management Awareness/i)).toBeInTheDocument();
  });

  // Test Case: Use screen reader on Awareness page
  // Expected: Images should have descriptions (Bug: Missing alt-text on all images)
  test('images on Awareness page are missing alt-text (reflecting known bug)', () => {
    render(<Awareness />);
    const images = screen.getAllByRole('img'); // Assuming images are direct <img> tags
    
    images.forEach(img => {
      const altText = img.getAttribute('alt');
      // The bug is "Missing alt-text on all images".
      // This means alt attribute could be entirely absent or present but empty.
      expect(altText === null || altText === '').toBe(true);
    });
  });
});