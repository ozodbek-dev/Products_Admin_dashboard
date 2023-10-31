import { AdminSidebar } from "@/components";
import React, { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren): JSX.Element {
	return (
		<div className='adminContainer'>
			<AdminSidebar />
			{/* Main Content */}
			<main className="dashboard">{children}</main>
		</div>
	);
}

function withSidebar<P extends Record<string, unknown>>(WrappedComponent: React.ComponentType<P>) {
	const componentWithSidebar = (props: P): JSX.Element => {
		return (
			<Layout>
				<WrappedComponent {...props} />
			</Layout>
		);
	};

	return componentWithSidebar;
}

export default withSidebar;
