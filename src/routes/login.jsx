import { createFileRoute } from '@tanstack/react-router'
import Login from '../components/feature/login'

export const Route = createFileRoute('/login')({
  component: () => <div>
    <Login />
  </div >
})