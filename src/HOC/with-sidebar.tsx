/* eslint-disable react-refresh/only-export-components */
import { AdminSidebar } from "@/components";
import React, { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren): JSX.Element {
	return (
		<div className='admin-container'>
			<AdminSidebar />
			<main className='dashboard'>{children}</main>
		</div>
	);
}

export default function withSidebar<P extends Record<string, unknown>>(WrappedComponent: React.ComponentType<P>) {
	const componentWithSidebar = (props: P): JSX.Element => {
		return (
			<Layout>
				<WrappedComponent {...props} />
			</Layout>
		);
	};

	return componentWithSidebar;
}
