import { render, screen, expect, waitForElementToBeRemoved, waitFor, getByRole } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import App from "./App"

describe('App', () => {
  jest.setTimeout(9000);
  it('should render a dropdown and cards and display quotes that match selected character', async () => {
    render(
      <App />
      );
  screen.getByText(/loading/i); // shows loading state
  return waitFor(() => {
    screen.getAllByAltText(/picture/i); // contains images with alt text
    const dropdown = getByRole('combobox');
    // console.log(dropdown);
  }, { timeout: 8000 })
  screen.debug();
})

// it('should display quotes that match the selected character', async () => {
//   waitFor(() => {
//     screen.debug();
//   }, { timeout: 4000 })
//     console.log('selected', selected);
//     screen.debug();
//   })
});