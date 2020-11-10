import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import  UrlContainer  from './UrlContainer';
jest.mock('../../apiCalls.js');

describe('UrlContainer', () => {
    let urls,
    mockDeleteUrl  
    beforeEach(() => {
        mockDeleteUrl= jest.fn()
        urls = [
          {
            title: "title2", 
            long_url: "long url here 2",
            short_url:"short url here 2",
            id: 2
          },
          {
            title: "title3", 
            long_url: "long url here 3",
            short_url:"short url here 3",
            id: 3
          },
          {
            title: "title4", 
            long_url: "long url here 4",
            short_url:"short url here 4",
            id: 4
          },
          {
            title: "title5", 
            long_url: "long url here 5",
            short_url:"short url here 5",
            id: 5
          },
        ];
    })

    it('should render all cards' , async () => {
        
        render(
            <UrlContainer 
                urls={urls}
                deleteUrl={mockDeleteUrl}
            />
        )

        const mockTitle2 = await waitFor(() =>screen.getByText('title2'))
        const mockLong_url2 = await waitFor(() =>screen.getByText('long url here 2'))
        const mockShort_url2 = await waitFor(() =>screen.getByText('short url here 2'))
        const mockRemoveButton2 = await waitFor(() =>screen.getByTestId('button_test_id2'))

        const mockTitle3 = await waitFor(() =>screen.getByText('title3'))
        const mockLong_url3 = await waitFor(() =>screen.getByText('long url here 3'))
        const mockShort_url3 = await waitFor(() =>screen.getByText('short url here 3'))

        const mockTitle4 = await waitFor(() =>screen.getByText('title4'))
        const mockLong_url4 = await waitFor(() =>screen.getByText('long url here 4'))
        const mockShort_url4 = await waitFor(() =>screen.getByText('short url here 4'))

        const mockTitle5 = await waitFor(() =>screen.getByText('title5'))
        const mockLong_url5 = await waitFor(() =>screen.getByText('long url here 5'))
        const mockShort_url5 = await waitFor(() =>screen.getByText('short url here 5'))
        
        expect(mockTitle2).toBeInTheDocument();
        expect( mockLong_url2).toBeInTheDocument();
        expect(mockShort_url2).toBeInTheDocument();
        expect(mockRemoveButton2).toBeInTheDocument();
        
        expect(mockTitle3).toBeInTheDocument();
        expect( mockLong_url3).toBeInTheDocument();
        expect(mockShort_url3).toBeInTheDocument();

        expect(mockTitle4).toBeInTheDocument();
        expect( mockLong_url4).toBeInTheDocument();
        expect(mockShort_url4).toBeInTheDocument();

        expect(mockTitle5).toBeInTheDocument();
        expect( mockLong_url5).toBeInTheDocument();
        expect(mockShort_url5).toBeInTheDocument();

    })
});