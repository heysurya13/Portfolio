import { render, screen } from '@testing-library/react'
import Contact from '../Components/Contact'

test('renders contact page', () => {
  render(<Contact />)

  expect(screen.getByText('Contact Me')).toBeInTheDocument()

  expect(
    screen.getByRole('link', { name: 'suryashaji1311@gmail.com' })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('link', { name: 'GitHub Profile' })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('link', { name: 'LinkedIn Profile' })
  ).toBeInTheDocument()
})
