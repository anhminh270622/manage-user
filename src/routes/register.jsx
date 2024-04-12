import { createFileRoute } from '@tanstack/react-router'
import Register from '../components/register'
import LayoutContent from '../components/layout'

export const Route = createFileRoute('/register')({
  component: () => <LayoutContent>
    {<Register />}
  </LayoutContent>
})