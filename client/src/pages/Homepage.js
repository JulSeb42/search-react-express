// Packages
import React, { useState } from "react"
import { Font, Form, Input } from "components-react-julseb"
import { useNavigate, createSearchParams } from "react-router-dom"

// Components
import Page from "../components/Page"

const Homepage = () => {
    const navigate = useNavigate()

    // Query
    const [query, setQuery] = useState("")
    const handleQuery = e => setQuery(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        navigate({
            pathname: "results",
            search: createSearchParams({
                query: query,
            }).toString(),
        })
    }

    return (
        <Page title="Homepage" template="form">
            <Font.H1>Search</Font.H1>

            <Form btnPrimary="Search" onSubmit={handleSubmit}>
                <Input
                    placeholder="Search by post or author"
                    onChange={handleQuery}
                    value={query}
                    autoFocus={true}
                />
            </Form>
        </Page>
    )
}

export default Homepage
