import PropTypes from "prop-types";

import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function MainNav({ className, ...props }) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
    </nav>
  );
}

MainNav.propTypes = {
  className: PropTypes.string,
};

MainNav.defaultProps = {
  className: "",
};
