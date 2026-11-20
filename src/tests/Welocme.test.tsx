import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Welcome from '../Components/Welcome'

test('renders welcome page', () => {
  render(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>
  )

  expect(screen.getByText('SURYA T SHAJI')).toBeInTheDocument()

  expect(
    screen.getByRole('button', { name: 'Visit My Portfolio' })
  ).toBeInTheDocument()
})
