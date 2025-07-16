// Test cases for Home component (Form Validation)
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByText(/Request Waste Pickup/i)).toBeInTheDocument();
  });

  // Test Case: Submit form without required fields
  // Expected: Error messages should appear
  test('displays error messages for empty required fields on form submission', () => {
    render(<Home />);
    fireEvent.click(screen.getByRole('button', { name: /Submit Request/i }));

    // Assuming standard error messages
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Address is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Waste type is required/i)).toBeInTheDocument();
    // For the date field bug, README says: "Date field doesn't show validation error"
    // So, we expect the error message NOT to be there.
    expect(screen.queryByText(/Date is required/i)).toBeNull();
  });

  // Test Case: Date field doesn't show validation error (Bug)
  // This is essentially covered by the above test case where we assert that
  // the "Date is required" message is null.
  // We can make this test more explicit if needed, but it might be redundant.
  test('date field specifically does not show "Date is required" error (reflecting known bug)', () => {
    render(<Home />);
    // Attempt to submit the form
    fireEvent.click(screen.getByRole('button', { name: /Submit Request/i }));
    
    // Verify that the specific error message for the date field is not present
    expect(screen.queryByText(/Date is required/i)).toBeNull();
    
    // To make it more robust, we might also check that other errors *are* present,
    // ensuring the form submission was actually attempted and validation ran for other fields.
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument(); 
  });
});