import PropTypes from 'prop-types'

import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

export function MainNav({ className, ...props }) {
  return (
    <div className="flex items-center justify-between">
      <Link to="/">
        <img
          src="https://media.giphy.com/media/rtRflhLVzbNWU/giphy.gif"
          alt="DucKurophy"
          className="h-10"
        />
      </Link>
      <h1 className="text-2xl font-bold hidden md:block">DUCKUROPHY</h1>
      <nav
        className={cn('flex items-center space-x-4 lg:space-x-6', className)}
        {...props}
      >
        <Link
          to="/"
          className="text-sm font-medium transition-colors hover:font-bold "
        >
          Home
        </Link>
        <Link
          to="/rate"
          className="text-sm font-medium transition-colors hover:font-bold hidden md:block"
        >
          Rate Memes
        </Link>
        <Link
          to="/rate"
          className="text-sm font-medium transition-colors hover:font-bold md:hidden"
        >
          Rate
        </Link>
        <Link
          to="/about"
          className="text-sm font-medium transition-colors hover:font-bold hidden md:block"
        >
          About Us
        </Link>
        <Link
          to="/about"
          className="text-sm font-medium transition-colors hover:font-bold md:hidden"
        >
          About
        </Link>
      </nav>
    </div>
  )
}

MainNav.propTypes = {
  className: PropTypes.string,
}

MainNav.defaultProps = {
  className: '',
}
