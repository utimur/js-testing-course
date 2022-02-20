import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {MemoryRouter} from "react-router-dom";

describe('TEST APP', () => {
    test('Router test', () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('Error page test', () => {
        render(
            <MemoryRouter initialEntries={['/asfasfafasf']}>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
})

