import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import { Fragment } from 'react/cjs/react.production.min';import { useEffect } from 'react/cjs/react.development';


afterEach(cleanup);

describe('Contact Component', () => {

    it('renders', () => {
        render(
            <Contact></Contact>
        )
    })

    it('matches snapshot', () => {
        const { asFragment } = render(
            <Contact></Contact>
        )
        expect(asFragment()).toMatchSnapshot();
    })

    describe('text matches Contact me', () => {

        it('matches text', () => {
            const { getByTestId } = render(<Contact></Contact>);
            expect(getByTestId('link')).toHaveTextContent('Contact me');
            expect(getByTestId('button')).toHaveTextContent('Submit');
        })

    })
});



