import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const currentPhoto = {
    name: '', 
    category: 'portraits',
    description: 'loremispum',
    index: '0'
}
const mockToggleModal = jest.fn()

describe('Modal Tests', () => {

    it('Modal is rendering', () => {

        render(<Modal 
           currentPhoto={currentPhoto}
           onClose={mockToggleModal}
            />)
    });

    it('Matches Snapshot', () => {
        const { asFragment } = render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
             />);
        expect(asFragment()).toMatchSnapshot();
    });

    describe('Click Event', () => {
        it('calls onClose handler', () => {
            // Arrange: Render Modal
            const { getByText } = render(<Modal
                onClose={mockToggleModal}
                currentPhoto = {currentPhoto} />)
            // Act: Simulate click event 
            fireEvent.click(getByText('Close this modal'))
            // Assert: Expected matcher
            expect(mockToggleModal).toHaveBeenCalledTimes(1);
        })
    })

});