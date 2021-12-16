import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

// nav component
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });

})

// emoji visibility test
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    });
});

//  links visibility
describe('links are visible', () => {
    // "it" single test case
    it('inserts text into the links', () => {
        // arrange queries
        const { getByTestId } = render(<Nav />);
        // assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})


