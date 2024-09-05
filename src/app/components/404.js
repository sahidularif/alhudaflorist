const { default: Link } = require("next/link")


export default function Custom404() {
	return (
		<html lang="en">
			<head>
				<title>Page not found</title>
				<Link href="https://fonts.googleapis.com/css?family=Nunito:400,700" rel="stylesheet" />
				<Link type="text/css" rel="stylesheet" href="css/style.css" />


			</head>
			<body className="bg-white m-0">

				<div id="notfound" className="bg-white">
					<div className="notfound">
						<div className="notfound-404"></div>
						<h1>404</h1>
						<h2>Oops! Page Not Be Found</h2>
						<p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
						<Link href="/">Back to homepage</Link>
					</div>
				</div>

			</body>
		</html>
	)
}
