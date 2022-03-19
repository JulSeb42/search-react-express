// Packages
import React, { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Font, Button } from "components-react-julseb"

// Components
import Page from "../components/Page"

// API
import service from "../api/service"

const SearchResults = () => {
    // Query
    const [query] = useSearchParams()
    const searchQuery = query.get("query")

    // Get query
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        searchQuery === ""
            ? service
                  .allUsers()
                  .then(res => {
                      setResults(res.data)
                      setIsLoading(false)
                  })
                  .catch(err => console.log(err))
            : service
                  .search(searchQuery)
                  .then(res => {
                      setResults(res.data)
                      setIsLoading(false)
                  })
                  .catch(err => console.log(err))
    }, [searchQuery])

    return (
        <Page title="Results">
            <Button
                iconLeft="chevron-left"
                btnStyle="text"
                justify="start"
                to="/"
                noPadding
            >
                Back to homepage
            </Button>

            <Font.H1>
                {searchQuery === ""
                    ? "All users"
                    : `Results for ${searchQuery}`}
            </Font.H1>

            {isLoading ? (
                <Font.P>Loading</Font.P>
            ) : results.length === 0 ? (
                <Font.P>Your search did not return any result.</Font.P>
            ) : (
                <>
                    <Font.P>{results.length} users</Font.P>
                    
                    <Font.List>
                        {results.map(user => (
                            <li key={user._id}>{user.fullName}</li>
                        ))}
                    </Font.List>
                </>
            )}
        </Page>
    )
}

export default SearchResults
