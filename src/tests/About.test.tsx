import { render, screen } from '@testing-library/react'
import About from '../Components/About'

test('renders about page', () => {
  render(<About />)

  expect(screen.getByText('About Me')).toBeInTheDocument()

  expect(screen.getByText('Career Goal')).toBeInTheDocument()
})
