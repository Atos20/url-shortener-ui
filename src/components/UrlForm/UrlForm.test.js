import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import  UrlForm  from './UrlForm';
import { getUrls } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('UrlForm', () => {
    let mockSendUrl
    beforeEach(() => {
        mockSendUrl= jest.fn()
        getUrls.mockResolvedValue([
          {
            title: "title2", 
            long_url: "long url here 2",
            id: 2
          },
          {
            title: "title3", 
            long_url: "long url here 3",
            id: 3
          },
          {
            title: "title4", 
            long_url: "long url here 4",
            id: 4
          },
          {
            title: "title5", 
            long_url: "long url here 5",
            id: 5
          },
        ])
    })

    it('should render expected elements', async () => {
        render(
            <UrlForm 
                sendUrl={mockSendUrl}
            />
        )

        const titleInput = await waitFor(() =>screen.getByPlaceholderText('Title...'))
        const urlInput = await waitFor(() =>screen.getByPlaceholderText('URL to Shorten...'))
        const shortButton = await waitFor(() => screen.getByRole('button', { name: /shorten please!/i }))

        expect(titleInput).toBeInTheDocument();
        expect(urlInput).toBeInTheDocument();
        expect(shortButton ).toBeInTheDocument();
     
    })

    it('a user should be able to fill out a form', async () => {
        
        render(
            <UrlForm 
                sendUrl={mockSendUrl}
            />
        )

        const titleInput = await waitFor(() =>screen.getByPlaceholderText('Title...'))
        const urlInput = await waitFor(() =>screen.getByPlaceholderText('URL to Shorten...'))
        const shortButton = await waitFor(() => screen.getByRole('button', { name: /shorten please!/i }))
        //user can see all element being rendered
        expect(titleInput).toBeInTheDocument();
        expect(urlInput).toBeInTheDocument();
        expect(shortButton ).toBeInTheDocument();
        
        //user sees empty imput fields
        expect(titleInput).toHaveValue('')
        expect(urlInput).toHaveValue('')

        //user enter required data
        userEvent.type(titleInput, 'any title here');
        userEvent.type(urlInput, 'any verryyyyyyyyyy looooooong uuuuuuuuuuurl')

        //check that the user has entered data
        expect(titleInput).toHaveValue('any title here')
        expect(urlInput).toHaveValue('any verryyyyyyyyyy looooooong uuuuuuuuuuurl')

        //user click on the short me button
        userEvent.click(shortButton);
        
        //the user sends the url to the API and we check the correct method has ben invoked
        expect(mockSendUrl).toHaveBeenCalledTimes(1);
    })
});