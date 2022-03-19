// Packages
import React from "react"
import { Helmet, Wrapper, Main } from "components-react-julseb"

// Data
import siteData from "../data/siteData"

const Page = props => {
    return (
        <>
            <Helmet
                title={`${props.title} | ${siteData.name}`}
                description={props.description}
                keywords={[siteData.keywords, props.keywords]}
                siteName={siteData.name}
                favicon={siteData.favicon}
                author={siteData.author}
                type={siteData.type}
                cover={props.cover || siteData.cover}
                language={siteData.language}
            />

            <Wrapper template={props.template}>
                <Main template={props.template}>{props.children}</Main>
            </Wrapper>
        </>
    )
}

export default Page
