import { Link, createFileRoute } from '@tanstack/react-router';
import Container from '../components/layout/container';
import { Typography } from 'antd';
import { useStore } from '../zustand/store';

export const Route = createFileRoute('/')({
	component: () => {
		const { token } = useStore();
		return (
			<div>
				{!token ? (
					<Typography.Title
						level={2}
						style={{
							textAlign: 'center',
							fontWeight: 'bold',
							paddingTop: '20px',
						}}
					>
						Please <Link to="/login">Login</Link> to view the list!
					</Typography.Title>
				) : (
					<Container />
				)}
			</div>
		);
	},
});
