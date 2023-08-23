import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-3xl font-semibold mb-2">Oops, something went wrong!</h1>
        <p className="text-gray-600 mb-4">
          We're sorry, but it seems that there was an error processing your
          request.
        </p>
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16 mx-auto text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <p className="text-gray-600 mb-4">
          Please try again later or contact our support team for assistance.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to homepage
        </Link>
        <div className="mt-4">
          <i>{error.statusText || error.message}</i>
        </div>
      </div>
    </div>
  )
}