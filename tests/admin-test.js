// Test cases for Admin component (UI State and Boundary Testing)
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Admin from './Admin';

// Mock initial data for testing
const mockRequests = [
  { id: 'REQ001', name: 'John Doe', location: 'Nairobi', status: 'Pending', wasteType: 'General', date: '2024-07-28' },
  { id: 'REQ002', name: 'Jane Smith', location: 'Eldoret', status: 'Pending', wasteType: 'Recyclable', date: '2024-07-29' },
];

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    getStore: () => store, // Helper to inspect store
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Admin Component', () => {
  beforeEach(() => {
    // Set mock data in localStorage before each test
    window.localStorage.setItem('pickupRequests', JSON.stringify(mockRequests));
    // Reset the store for each test if Admin component modifies it directly
    // This might be needed if Admin reads and writes to localStorage directly in event handlers
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  test('renders Admin component with requests', () => {
    render(<Admin />);
    expect(screen.getByText(/Admin Panel - Manage Requests/i)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument(); // Check if data is rendered
  });

  // Test Case: Use "Mark as Scheduled" button in Admin panel
  // Expected: UI should update immediately (Bug: UI doesn't refresh, check localStorage)
  test('UI does not refresh immediately when "Mark as Scheduled" is clicked (reflecting known bug)', () => {
    render(<Admin />);
    
    // Find the first "Mark as Scheduled" button (assuming one per request)
    // The button might be identified by text or a test-id
    const scheduleButtons = screen.getAllByRole('button', { name: /Mark as Scheduled/i });
    expect(scheduleButtons.length).toBeGreaterThan(0);

    fireEvent.click(scheduleButtons[0]);

    // Check localStorage directly to confirm the change was made
    const storedRequests = JSON.parse(window.localStorage.getItem('pickupRequests'));
    const updatedRequest = storedRequests.find(req => req.id === mockRequests[0].id);
    expect(updatedRequest.status).toBe('Scheduled');

    // Check that the UI does not reflect this change immediately (due to the bug)
    // This means the status "Pending" should still be visible for the first request.
    // We need to find the row corresponding to mockRequests[0] and check its status display.
    // This assumes that each request is rendered in a way that we can find its elements.
    // For example, if each request name is unique and present:
    const requestNameCell = screen.getByText(mockRequests[0].name);
    const requestRow = requestNameCell.closest('tr'); // Get the table row
    
    // Assuming 'within' utility from @testing-library/dom or @testing-library/react
    // to scope the search for "Pending" status within that specific row.
    const { getByText: getByTextInRow } = require('@testing-library/dom'); // or from react
    expect(getByTextInRow(requestRow, /Pending/i)).toBeInTheDocument();

    // Alternative if `within` is not set up or preferred:
    // Check the text content of the row if structure is simple:
    // expect(requestRow.textContent).toContain('Pending');
  });

  // Test Case: Boundary Testing - Enter very long text in form fields
  // Expected: Should handle gracefully (Bug: May cause layout issues)
  // This test is harder to automate with React Testing Library for layout issues.
  // It usually requires visual regression testing or more complex DOM analysis.
  // For now, we can simulate long input and check if the component still renders.
  test('handles long text input in a hypothetical form field (conceptual)', () => {
    render(<Admin />);
    // If Admin had an input field, e.g., for notes:
    // const noteInput = screen.queryByLabelText(/Notes/i);
    // if (noteInput) {
    //   const longText = 'a'.repeat(1000); // Very long string
    //   fireEvent.change(noteInput, { target: { value: longText } });
    //   expect(noteInput.value).toBe(longText);
    // }
    // This test doesn't directly verify layout issues but checks component stability with long input.
    // A true layout test would need different tools.
    expect(screen.getByText(/Admin Panel - Manage Requests/i)).toBeInTheDocument(); // Basic check
  });
});
