import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "@utils/constants";

export default function PrimaryLayout({children}) {
	return (
		<Fragment>
			<header className="bg-primary font-cairo flex items-center justify-center gap-x-4 py-8">
				<Link to={ROUTES.HOME} className="text-white">
					Home
				</Link>
				<Link to={ROUTES.SERVICES} className="text-white">
					Services
				</Link>
				<Link to={ROUTES.CONTACT} className="text-white">
					Contact Us
				</Link>
			</header>
			<main>{children}</main>
			{/* 🌍 ENVIRONMENT INFO BAR */}
			<div className="border-t border-gray-300 bg-gray-100 py-3 text-center text-sm text-gray-600">
				<strong>ENV:</strong> {import.meta.env.VITE_ENV_NAME} &nbsp;|&nbsp;
				<strong>Branch:</strong> {import.meta.env.VITE_GIT_BRANCH} &nbsp;|&nbsp;
				<strong>API:</strong> {import.meta.env.VITE_API_URL}
			</div>
			<footer>footer</footer>
		</Fragment>
	);
}
