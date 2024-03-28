import { render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import RestroCard, { withOpenTag } from '../RestroCard'
import MOCK_DATA from '../mocks/restCardMocks.json'
import MOCK_DATA2 from '../mocks/withLabelMocks.json'
import "@testing-library/jest-dom";


it("Should render the RestCard Component with the propos data", ()=>{
    render(<RestroCard resData={MOCK_DATA} />)

   const name =  screen.getByText("Hotel Aryaas Park")

   expect(name).toBeInTheDocument()

})

it("Should render the component with the promoted label ", ()=>{
  render(withOpenTag (<RestroCard resData={MOCK_DATA2}  />))

  const lable = screen.getByLabel("Veg")
  expect(lable).toBeInTheDocument()

})