// Test cases for Dashboard component (Filter Functionality)
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

// Mock initial data for testing
const mockRequests = [
  { id: 'REQ001', name: 'John Doe', location: 'Nairobi', status: 'Pending', wasteType: 'General', date: '2024-07-28' },
  { id: 'REQ002', name: 'Jane Smith', location: 'Eldoret', status: 'Scheduled', wasteType: 'Recyclable', date: '2024-07-29' },
  { id: 'REQ003', name: 'Alice Green', location: 'Nairobi', status: 'Completed', wasteType: 'Hazardous', date: '2024-07-30' },
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
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});


describe('Dashboard Component', () => {
  beforeEach(() => {
    // Set mock data in localStorage before each test
    window.localStorage.setItem('pickupRequests', JSON.stringify(mockRequests));
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  test('renders Dashboard component with requests', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Waste Pickup Requests/i)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument(); // Check if data is rendered
  });

  // Test Case: Filter by "Eldoret" location
  // Expected: Show only Eldoret requests (Bug: Shows Nairobi requests instead)
  test('filters by "Eldoret" location and shows Nairobi requests (reflecting known bug)', () => {
    render(<Dashboard />);
    
    // Assuming the filter is a select element.
    // We need to find a way to identify it, e.g., by a label, placeholder, or test-id.
    // Let's assume it has a label "Filter by Location".
    // If not, this selector will need adjustment.
    const filterSelect = screen.getByLabelText(/Filter by Location/i);
    fireEvent.change(filterSelect, { target: { value: 'Eldoret' } });
    
    // According to the bug: "Filter by "Eldoret" location ... Shows Nairobi requests instead"
    // So, we expect to see Nairobi requests and not Eldoret requests.
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument(); // Nairobi
    expect(screen.getByText(/Alice Green/i)).toBeInTheDocument(); // Nairobi
    expect(screen.queryByText(/Jane Smith/i)).toBeNull(); // Eldoret (should be hidden)
  });
});