import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// props being declared 
const categories = [
    {name: 'portraits', description: 'Portraits of people in my life'}
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn(); 

afterEach(cleanup);

// nav component
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav 
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });

})

// emoji visibility test
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}/>);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    });
});

//  links visibility
describe('links are visible', () => {
    // "it" single test case
    it('inserts text into the links', () => {
        // arrange queries
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}/>);
        // assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})


