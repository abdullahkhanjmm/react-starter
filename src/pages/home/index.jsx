export default function Home() {
	return (
		<div className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center bg-white px-6 py-10 text-center">
			<h1 className="text-primary mb-6 text-5xl font-bold">
				🔧 React Starter Project
			</h1>

			<p className="mb-8 max-w-2xl text-lg text-gray-700">
				This project is designed to help developers quickly kickstart a React +
				Vite application with environment-specific configurations.
			</p>

			<div className="mb-10 w-full max-w-3xl rounded-md bg-gray-100 p-6 text-left shadow">
				<h2 className="text-primary mb-4 text-xl font-semibold">
					📌 Deployment Details
				</h2>

				<div className="mb-4">
					<p className="text-gray-800">
						<strong>🔀 Active Git Branch:</strong>
					</p>
					<p className="ml-2 text-sm text-gray-600">
						You're currently on the{" "}
						<strong className="text-blue-700">
							{import.meta.env.VITE_GIT_BRANCH}
						</strong>{" "}
						branch. This determines which version of the code is deployed.
						Branches often represent development stages like:
						<code className="mt-1 block text-xs text-gray-500">
							development → testing → staging → production
						</code>
					</p>
				</div>

				<div className="mb-4">
					<p className="text-gray-800">
						<strong>🌐 Environment Name:</strong>
					</p>
					<p className="ml-2 text-sm text-gray-600">
						Deployment is currently running in the{" "}
						<strong className="text-green-700">
							{import.meta.env.VITE_ENV_NAME}
						</strong>{" "}
						environment. This helps separate development, testing, and live
						deployments with different configurations and services.
					</p>
				</div>

				<div className="mb-2">
					<p className="text-gray-800">
						<strong>🔗 Backend API URL:</strong>
					</p>
					<p className="ml-2 text-sm text-gray-600">
						The frontend app is connected to:
						<code className="mt-1 block rounded border border-gray-300 bg-white px-3 py-1 text-blue-700">
							{import.meta.env.VITE_API_URL || "Not configured"}
						</code>
						This URL points to the backend services used for handling API
						requests like authentication, data fetch, etc.
					</p>
				</div>
			</div>

			<div className="flex flex-wrap justify-center gap-4">
				<a
					href="https://vitejs.dev"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-primary hover:bg-primary-dark rounded px-6 py-3 text-white shadow transition"
				>
					🔗 Vite Documentation
				</a>
				<a
					href="https://react.dev"
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary rounded bg-gray-200 px-6 py-3 shadow transition hover:bg-gray-300"
				>
					🔗 React Docs
				</a>
			</div>
		</div>
	);
}
