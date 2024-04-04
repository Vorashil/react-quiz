import {render, screen, within} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
describe('App component', () => {
    test('Navigation bar is rendered', () => {

        // GIVEN
        render(<App/>)

        // WHEN

        // THEN

        const homeLink = screen.getByText('home', {exact: false});
        const myPageLink = screen.getByText('My Page');
        const loginLink = screen.getByText('Login');

        expect(homeLink).toBeInTheDocument();
        expect(myPageLink).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
    })

    test('Navigation to the my page', () => {

        // GIVEN
        render(<App/>)

        // WHEN
        const myPageNavLink = screen.getByText('My page', {exact: false});
        userEvent.click(myPageNavLink);

        // THEN
        expect(screen.getByText('Welcome to My Page')).toBeInTheDocument();
    })

    test('Navigation to the login page', () => {})


})