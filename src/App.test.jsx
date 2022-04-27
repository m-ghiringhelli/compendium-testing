import { render, screen, expect } from "@testing-library/react"
import App from "./App"

describe('App', () => {
  it('should render a dropdown and cards', async () => {
    render(
      <App />
    );
  screen.getByText(/loading/i); // shows loading state
  await screen.findByRole('combobox'); // renders dropdown menu
  // contains quotes
  await screen.findAllByAltText(/picture/i); // contains images with alt text
  // contains headers
  })
});