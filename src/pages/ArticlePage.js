import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./articleContent";
import * as S from "../styles/styled-components";

/**
 * Component for displaying an Article page
 *
 * @param {String} props.match passed down from :name in URL
 * @return {*} an article page for a given topic
 */
const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name);

    if (!article) {
        return (
            <>
                <S.Header>404 Error: Page Not Found</S.Header>
                <p style={{ textAlign: "center" }}>
                    Oops.. That article doesn&apos;t seem to exist!
                </p>
            </>
        );
    }

    const otherArticles = articleContent.filter((article) =>
        article.name !== name);

    return (
        <>
            <S.Header>{article.title}</S.Header>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            &nbsp;
            <S.Header small>Other Articles...</S.Header>
            <ArticlesList articles={otherArticles} />
        </>
    );
};

export default ArticlePage;
