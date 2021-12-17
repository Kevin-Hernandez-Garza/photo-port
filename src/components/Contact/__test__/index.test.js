import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm />)
    });

    // snapshot test
    it('matches snapshot DOM node structure', () => {
        // render Contact, returns a snapshot of the Contact component
        const { asFragment } = render(<ContactForm />);

        // assert snapshot match
        expect(asFragment()).toMatchSnapshot();
    });


    // attribute tag to match "Contact me" 
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    });

    //  attribute has text content of "Submit"
    it('renders', () => {
        const { getByTestId } = render(< ContactForm />)
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
});