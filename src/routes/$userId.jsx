import { createFileRoute } from '@tanstack/react-router'
import Container from '../components/layout/container'
export const Route = createFileRoute('/$userId')({
    component: () => <div>
        <Container />
    </div>

})

