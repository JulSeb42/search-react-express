// Pages
import Homepage from "../pages/Homepage"
import NotFound from "../pages/NotFound"

import SearchResults from "../pages/SearchResults"

// Routes
const routes = [
    {
        path: "/",
        element: Homepage,
    },
    {
        path: "*",
        element: NotFound,
    },

    {
        path: "/results",
        element: SearchResults,
    },
]

export default routes
