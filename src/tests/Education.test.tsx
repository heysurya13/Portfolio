import { render, screen } from '@testing-library/react'
import Education from '../Components/Education'

test('renders education page', () => {
  render(<Education />)

  expect(screen.getByText('Education')).toBeInTheDocument()

  expect(
    screen.getByText('Master of Computer Applications (MCA)')
  ).toBeInTheDocument()

  expect(
    screen.getByText('Bachelor of Science (B.Sc.) Mathematics')
  ).toBeInTheDocument()
})
