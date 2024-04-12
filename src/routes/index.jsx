import LayoutContent from '../components/layout'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: () => <div>
        <LayoutContent></LayoutContent>
    </div>
})