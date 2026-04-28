import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";

describe("App Navigation", () => {
  it("renders the default About section", () => {
    render(<App />);
    expect(screen.getByText("Location")).toBeInTheDocument();
  });

  it("switches to the Resume section when tab is clicked", () => {
    render(<App />);
    
    // There are multiple resume buttons (desktop sidebar and mobile nav). 
    // We grab the desktop one for this test.
    const resumeButtons = screen.getAllByText("Resume");
    fireEvent.click(resumeButtons[0]);

    expect(screen.getByText("Experience snapshot")).toBeInTheDocument();
  });

  it("switches to the Contact section when tab is clicked", () => {
    render(<App />);
    
    const contactButtons = screen.getAllByText("Contact");
    fireEvent.click(contactButtons[0]);

    expect(screen.getByText("Project type")).toBeInTheDocument();
  });
});

describe("Contact Form Simulation", () => {
  it("simulates successful form submission in development environment", async () => {
    render(<App />);
    
    // Switch to Contact
    const contactButtons = screen.getAllByText("Contact");
    fireEvent.click(contactButtons[0]);

    // Find the form
    const form = screen.getByTestId("contact-form");
    expect(form).toBeInTheDocument();

    // Fill fields
    fireEvent.change(screen.getByPlaceholderText("Your name"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByPlaceholderText("you@example.com"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Tell me about the website you want to build."), { target: { value: "Hello world" } });

    // Submit
    fireEvent.submit(form);

    // Should show submitting state immediately
    expect(screen.getByText("Sending inquiry...")).toBeInTheDocument();

    // Should transition to success state after timeout
    await waitFor(() => {
      expect(screen.getByText("Your message has been queued for delivery. Replace placeholder contact details before launch.")).toBeInTheDocument();
    }, { timeout: 1000 });
  });
});
