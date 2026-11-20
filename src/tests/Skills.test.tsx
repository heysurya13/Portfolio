import { render, screen } from '@testing-library/react'
import Skills from '../Components/Skills'

test('renders skills page', () => {
  render(<Skills />)

  expect(screen.getByText('My Skills')).toBeInTheDocument()

  expect(screen.getByText('Frontend Development')).toBeInTheDocument()

  expect(screen.getByText('Backend Development')).toBeInTheDocument()
})
