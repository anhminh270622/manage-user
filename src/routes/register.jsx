import { createFileRoute } from '@tanstack/react-router'
import Register from '../components/feature/register'

export const Route = createFileRoute('/register')({
  component: () =>
    <Register />
})