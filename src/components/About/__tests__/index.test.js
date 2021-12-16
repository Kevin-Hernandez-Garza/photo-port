// this will enable the components so we can test them 
import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// importing about component
import About from '..';

// keep things clean testing configuration
// after each test we wont have any leftover memory data that could give false results
afterEach(cleanup);


// declaring component to be tested 
describe('About component', () => {
    //renders About test

    // First test(baseline, component rendering?)
    it('renders', () => {
        render(<About />);
    });

    // Second test
    it('matches snapshot DOM node structure', () => {
        // render About, returns a snapshot of About component
        const { asFragment } = render(<About />);
        
        // assert snapshots match
        expect(asFragment()).toMatchSnapshot();
    })
})