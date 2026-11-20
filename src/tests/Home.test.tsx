import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../Components/Home'

test('renders home page', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

  expect(screen.getByText("Hi, I'm Surya T Shaji")).toBeInTheDocument()

  expect(
    screen.getByRole('button', { name: 'View My Projects' })
  ).toBeInTheDocument()

  expect(screen.getByRole('link', { name: /download cv/i })).toBeInTheDocument()
})
