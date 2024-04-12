import { createFileRoute } from '@tanstack/react-router'
import Login from '../components/login'
import LayoutContent from '../components/layout'

export const Route = createFileRoute('/login')({
  component: () => <div>
    <LayoutContent>{<Login />} </LayoutContent>
  </div >
})