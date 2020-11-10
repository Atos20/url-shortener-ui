import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { App } from "./App";
import { getUrls, sendUrls, deleteUrl } from '../../apiCalls.js'
jest.mock('../../apiCalls.js');


describe('UrlForm', () => {
    let newUrlByUser
    beforeEach(() => {
        

    

        getUrls.mockResolvedValue({
            urls : [
          {
            title: "APItitle 2",
            long_url: "APIlong url here 2",
            short_url: "APIshort url here 2",
            id: 2
          },
          {
            title: "APItitle 3",
            long_url: "APIlong url here 3",
            short_url: "APIshort url here 3",
            id: 3
          },
          {
            title: "APItitle 4",
            long_url: "APIlong url here 4",
            short_url: "APIshort url here 4",
            id: 4
          },
          {
            title: "APItitle 5",
            long_url: "APIlong url here 5",
            short_url: "APIshort url here 5",
            id: 5
          },
        ]})
    })

    it('should be able to display all card returned by the API', async () => {

        render(
            <App/>
        )
        
        const returnedTitle2 = await waitFor(() => screen.getByText('APItitle 2'));
        const returnedLong_url2 = await waitFor(() => screen.getByText('APIlong url here 2'));
        const returnedShort_url2 = await waitFor(() => screen.getByText('APIshort url here 2'));
        const mockRemoveButton2 = await waitFor(() =>screen.getByTestId('button_test_id2'))

        expect(returnedTitle2).toBeInTheDocument();
        expect(returnedLong_url2).toBeInTheDocument();
        expect(returnedShort_url2).toBeInTheDocument();
        expect(mockRemoveButton2).toBeInTheDocument();
        
        const returnedTitle3 = await waitFor(() => screen.getByText('APItitle 3'));
        const returnedLong_url3 = await waitFor(() => screen.getByText('APIlong url here 3'));
        const returnedShort_url3 = await waitFor(() => screen.getByText('APIshort url here 3'));
        const mockRemoveButton3 = await waitFor(() =>screen.getByTestId('button_test_id3'))

        expect(returnedTitle3).toBeInTheDocument();
        expect(returnedLong_url3).toBeInTheDocument();
        expect(returnedShort_url3).toBeInTheDocument();
        expect(mockRemoveButton3 ).toBeInTheDocument();

        const returnedTitle4 = await waitFor(() => screen.getByText('APItitle 4'));
        const returnedLong_url4 = await waitFor(() => screen.getByText('APIlong url here 4'));
        const returnedShort_url4 = await waitFor(() => screen.getByText('APIshort url here 4'));
        const mockRemoveButton4 = await waitFor(() =>screen.getByTestId('button_test_id4'))

        expect(returnedTitle4).toBeInTheDocument();
        expect(returnedLong_url4).toBeInTheDocument();
        expect(returnedShort_url4).toBeInTheDocument();
        expect(mockRemoveButton4).toBeInTheDocument();

        const returnedTitle5 = await waitFor(() => screen.getByText('APItitle 5'));
        const returnedLong_url5 = await waitFor(() => screen.getByText('APIlong url here 5'));
        const returnedShort_url5 = await waitFor(() => screen.getByText('APIshort url here 5'));
        const mockRemoveButton5 = await waitFor(() =>screen.getByTestId('button_test_id5'))

        expect(returnedTitle5).toBeInTheDocument();
        expect(returnedLong_url5).toBeInTheDocument();
        expect(returnedShort_url5).toBeInTheDocument();
        expect(mockRemoveButton5).toBeInTheDocument();
    });

    it('user should be able to add a new card and then see it on the DOM', async() => {

        render(
            <App/>
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
    userEvent.type(titleInput, 'APItitle 6');
    userEvent.type(urlInput, 'APIlong url here 6')
    //check that the user has entered data
    expect(titleInput).toHaveValue('APItitle 6')
    expect(urlInput).toHaveValue('APIlong url here 6')
    //user click on the short me button
    userEvent.click(shortButton);
    
    //the method that makes the API request is invoked once
    expect(sendUrls).toHaveBeenCalledTimes(1);
    expect(sendUrls).toHaveBeenCalledWith({
      "long_url": "APIlong url here 6",
      "title": "APItitle 6",
    });

    sendUrls.mockResolvedValueOnce({
      title: "APItitle 6",
      long_url: "APIlong url here 6",
      short_url: "APIshort url here 6",
      id: 6
    })
  screen.debug()
    
    //aassert that the new card is there!!
    
    // const returnedTitle6 = await waitFor(() =>screen.getByText('APItitle 6'));
    // const returnedLong_url6 = await waitFor(() => screen.getByText('APIlong url here 6'));
    // const returnedShort_url6 = await waitFor(() => screen.getByText('APIshort url here 6'));
    
    // expect(returnedTitle6).toBeInTheDocument();
    // expect(returnedLong_url6).toBeInTheDocument();
    // expect(returnedShort_url6).toBeInTheDocument();
    
  });
  
  it('the user should be able to delete a card', async() => {
   
    deleteUrl.mockResolvedValue();

    render(<App/>)
      
      const returnedTitle5 = await waitFor(() => screen.getByText('APItitle 5'));
      const returnedLong_url5 = await waitFor(() => screen.getByText('APIlong url here 5'));
      const returnedShort_url5 = await waitFor(() => screen.getByText('APIshort url here 5'));
      const mockRemoveButton5 = await waitFor(() =>screen.getByTestId('button_test_id5'))
      
      expect(returnedTitle5).toBeInTheDocument();
      expect(returnedLong_url5).toBeInTheDocument();
      expect(returnedShort_url5).toBeInTheDocument();
      expect(mockRemoveButton5).toBeInTheDocument();
      
      userEvent.click(mockRemoveButton5);


      expect(deleteUrl).toHaveBeenCalledTimes(1);
      
      // expect(returnedTitle5).toEqual(null);
    })

    // getUrls.mockResolvedValue(mockUrlData);
    // deleteUrl.mockResolvedValue(204);
    // render(<App />);
    // await waitFor(() => screen.getByRole('heading', { name: 'URL Shortener'}));
    // const getAllDeleteBtns = screen.getAllByRole('button', { name: 'Delete' });
    // const deletedTitle = screen.getByText('Testing 2');
    // userEvent.click(getAllDeleteBtns[1]);
    // await waitFor(() => (expect(deletedTitle).not.toBeInTheDocument()));
  });
  