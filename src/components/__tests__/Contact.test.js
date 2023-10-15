import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom'

test("Should load the Contact Us Page",()=>{
    render(<Contact />);

    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
    
})