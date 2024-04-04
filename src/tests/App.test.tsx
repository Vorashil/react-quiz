import {render, screen, within} from "@testing-library/react";
import App from "../App";

test('Navigation bar is rendered', () => {

    render(<App/>)

    // WHEN

    // THEN

    const homeLink = screen.getByText('home' , {exact: false});
    const myPageLink = screen.getByText('My Page');
    const loginLink = screen.getByText('Login');

    expect(homeLink).toBeInTheDocument();
    expect(myPageLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
})