import { render, screen } from '@testing-library/react'
import Projects from '../Components/Projects'

test('renders projects page', () => {
  render(<Projects />)

  expect(screen.getByText('My Projects')).toBeInTheDocument()

  expect(screen.getByText('User Management Dashboard')).toBeInTheDocument()

  expect(screen.getByText('Sign Talk')).toBeInTheDocument()

  expect(screen.getByText('E-commerce Website')).toBeInTheDocument()
})
