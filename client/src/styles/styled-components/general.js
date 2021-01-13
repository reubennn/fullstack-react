/* eslint-disable valid-jsdoc */
import styled, { css } from "styled-components";

import { TinyRouterLink } from "./links";
import { fontFamily } from "./fonts";
import { gradientTransition } from "./mixins";
import { handleFeatureTextFontSize } from "./responsive";
import {
    color,
    transparency,
    handleColor,
} from "./colors";

/**
* Paragraph Component.
*
* @param {String} color text color
*/
export const Paragraph = styled.p.attrs((props) => ({
    color: props.color || color.grey.shade.dark,
}))`
    color: ${(props) => handleColor(props.color)};

    &.author-date {
        margin: 0 0.15rem;
    }

    &.description {
        padding: 1rem 2rem;
    }
`;

/**
 * Small Text Component.
 *
 * @param {String} color text color
 * @param {String} margin the top and bottom margin
 * @param {Boolean} superTiny flag to make text very small
 */
export const TinyText = styled.p.attrs((props) => ({
    color: props.color || color.grey.tint.darkest,
    margin: props.margin || "1rem",
}))`
    margin: ${(props) => props.margin} 0;
    color: ${(props) => handleColor(props.color)};
    font-size: ${(props) => props.superTiny ? "0.75rem" : "0.85rem"};

    & > span {
        color: ${color.grey.tint.neutral};
    }
`;

/**
 * Feature Text Component.
 *
 * @param {String} color the color of the text
 * @param {Number} fontWeight thickness weight of the font
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const FeatureText = styled.p.attrs((props) => ({
    color: props.color || "inherit",
    fontWeight: props.fontWeight || 500,
    viewport: {
        type: props.type || "default",
    },
}))`
    color: ${(props) => handleColor(props.color)};
    font-family: ${fontFamily.secondary};
    font-weight: ${(props) => props.fontWeight};
    margin: auto;
    text-align: center;
    text-shadow: 0.05rem 0.05rem 0.25rem ${color.grey.shade.light};

    /** Responsive Design Styling */
    font-size: ${(props) => handleFeatureTextFontSize(props.viewport.type)};

    &.header-home {
        margin: auto 2.5rem;
    }
`;

/**
 * Anchor Component.
 *
 * @param {String} color text color
 */
export const Anchor = styled.a.attrs((props) => ({
    color: props.color || color.grey.shade.dark,
}))`
    text-decoration: none;
    color: ${(props) => handleColor(props.color)};
    transition: ease-in-out 0.75s;

    &:hover {
        border-bottom: 1px solid ${(props) => handleColor(props.color)};
        transition: ease-in-out 0.25s;
    }
`;

/**
 * Inline Anchor Component.
 *
 * @param {String} thickUnderline flag indicating thicker underline on hover
 */
export const InlineAnchor = styled(Anchor)`
    position: relative;
    text-decoration: none;
    transition: ease-in-out 0.25s;
    padding-right: 0.25rem;
    padding-left: 0.25rem;

    &:hover {
        border-bottom: none;
    }

    &::after {
        content: " ";
        display: block;
        position: absolute;
        bottom: -0.15rem;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 0%;
        border-bottom: ${(props) => props.thickUnderline ?
        `0.1rem solid ${handleColor(props.color)}` :
        `0.05rem solid ${handleColor(props.color)}`};
        transition: ease-in-out 0.25s;
    }

    &:hover::after {
        width: 94%;
    }
`;

/**
 * Simple Header Component with minimal styling.
 *
 * Setting props.as will convert the html tag to the appropriate
 * header type (h1, h2, h3.. etc.)
 *
 * @param {String} as sets the html tag, h1, h2 etc.
 * @param {String} color text color
 * @param {String} bgColor background color
 * @param {String} textAlign text align style
 */
export const Header = styled.h1.attrs((props) => ({
    as: props.as || "h1",
    color: props.color || "inherit",
    bgColor: props.bgColor || "transparent",
    textAlign: props.textAlign || "center",
}))`
    color: ${(props) => handleColor(props.color)};
    background-color: ${(props) => handleColor(props.bgColor)};
    text-align: ${(props) => props.textAlign};
    margin: 2rem auto;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    font-size: ${(props) => {
        switch (props.as) {
            case ("h1"): return "2.25rem";
            case ("h2"): return "1.8rem";
            case ("h3"): return "1.5rem";
            case ("h4"): return "1.2rem";
            case ("h5"): return "1rem";
            case ("h6"): return "0.8rem";
            default: return "2.25rem";
        }
    }};
    padding: ${(props) =>
        props.bgColor !== "transparent" ? "0.5rem 1rem" : "0"};
    border-radius: ${(props) =>
        props.bgColor !== "transparent" ? "0.2rem" : " 0"};

    &.feature-text {
        text-shadow: 0.05rem 0.05rem 0.25rem ${color.grey.shade.light};
    }

    &.header-home {
        margin:  0rem 11%;
    }

    &.header-secondary {
        margin-top: 0;
        margin-bottom: 0;
    }

    &.section-top {
        margin-top: 0;
    }

    &.dark-background {
        text-align: left;
        width: 100%;
        padding: 0.5rem 1rem;
        border-radius: 0.2rem;
        color: ${color.white};
        background-color: ${color.grey.shade.dark};
    }
`;

/**
 * Simple Header Component with minimal styling.
 *
 * Setting props.as will convert the html tag to the appropriate
 * header type (h1, h2, h3.. etc.)
 *
 * @param {String} as sets the html tag, h1, h2 etc.
 * @param {String} color text color
 * @param {String} bgColor background color
 * @param {String} textAlign text align style
 */
export const HeaderAssistant = styled.h2.attrs((props) => ({
    as: props.as || "h2",
    color: props.color || color.grey.tint.darkest,
    textAlign: props.textAlign || "center",
}))`
    color: ${(props) => handleColor(props.color)};
    margin: auto;
    margin-left: 0;

    font-size: ${(props) => {
        switch (props.as) {
            case ("h1"): return "2rem";
            case ("h2"): return "1.5rem";
            case ("h3"): return "1.2rem";
            case ("h4"): return "0.9rem";
            case ("h5"): return "0.7rem";
            case ("h6"): return "0.5rem";
            default: return "1.7rem";
        }
    }};

    &::before {
        content: "|";
        color: ${(props) => handleColor(props.color + transparency.x50)};
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;


/**
 * Simple Text Component used for multi-size text in the same
 * line.
 *
 * - Ensures the smaller and larger text vertically align in the middle.
 *
 */
export const Text = styled.span`
    vertical-align: middle;
`;

/**
 * Larger Text Component used for multi-size text in the same
 * line.
 *
 * - Ensures the smaller and larger text vertically align in the middle.
 *
 * @param {String} fontSize the size of the font
 *
 */
export const TextSized = styled(Text).attrs((props) => ({
    fontSize: props.fontSize || "120%",
}))`
    font-size: ${(props) => props.fontSize};
`;

/**
 * List Item Component.
 */
export const ListItem = styled.li`
    color: inherit;
    margin: 0.3rem 0;

    &.nav-item {
        margin: auto 0.3rem;
    }

    &.nav-icon {
        margin: auto 0.7rem;
    }

    &.sidebar-nav {
        margin: 5vh auto;
    }

    &.justify-left {
        margin-right: auto;
    }
`;

/**
 * Image Component.
 *
 * @param {String} height height of the image
 * @param {String} width width of the image
 */
export const Image = styled.img.attrs((props) => ({
    height: props.height || "auto",
    width: props.width || "100%",
}))`
    display: block;
    margin: auto;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
`;

/**
 * Icon Component displayed from a SVG image file.
 *
 * @param {String} height the height of the icon
 * @param {String} width the width of the icon
 * @param {Number} fill the fill color
 * @param {String} bgColor the background color for color invert
 */
export const Icon = styled.svg.attrs((props) => ({
    height: props.height || "50px",
    width: props.width || "50px",
    fill: props.fill || color.grey.tint.lighter,
    bgColor: props.bgColor || color.grey.shade.dark,
}))`
    fill: ${(props) => handleColor(props.fill)};
    text-decoration: none;
    margin: auto;
    display: block;

    /* Required to limit the icon size */
    max-height: ${(props) => props.height};
    max-width: ${(props) => props.width};

    transition: ease-in-out 0.3s;

    /* Make inner elements inverted */
    & > use {
        color: ${(props) => handleColor(props.bgColor)};
    }

    /* Close icon uses stroke for lines, not fill */
    &.close-icon > use {
        stroke: ${(props) => handleColor(props.fill)};
    }

    & > use > svg {
        /* Component inline props override */
        width: 100%;
        height: 100%;
        max-height: ${(props) => props.height};
        max-width: ${(props) => props.width};
    }

    &:hover {
        fill: ${color.white};
        transition: ease-in-out 0.4s;
    }

    &.shrink-image {
        display: block;
        max-width: 65%;
    }

    &.footer-icon {
        fill: ${color.grey.tint.lighter};
        transition: ease-in-out 0.4s;
    }

    &.footer-icon:hover {
        fill: ${color.white};
        transition: ease-in-out 0.4s;
    }

    &.logo-slider {
        margin: auto 1.5rem;
    }

    &.no-color-change {
        &:hover {
            fill: ${(props) => handleColor(props.fill)};
        }
    }

    &.dark-hover {
        &:hover {
            fill: ${color.grey.shade.neutral};
            transition: ease-in-out 0.4s;
        }
    }
`;

/**
 * Button Component.
 *
 * @param {String} $radius transient prop for the button radius
 */
export const Button = styled.button.attrs((props) => ({
    $radius: props.$radius || "1.5rem",
}))`
    color: ${color.white};
    background-color: ${color.grey.shade.dark};
    font-weight: 600;
    font-size: 1.2rem;
    text-shadow: 0.03rem 0.03rem
    ${color.grey.shade.darkest + transparency.x25};
    box-shadow: 0.1rem 0.15rem 0.3rem
    ${color.grey.shade.darker + transparency.x50};
    border-radius: ${(props) => props.$radius};
    padding: 0.6rem 1.7rem;
    display: block;
    margin: 0 auto;

    &:hover {
        color: ${color.grey.tint.lighter};
    }

    &.secondary {
        padding: 0.6rem 1.2rem;
        padding-top: 0.6rem;
        border-radius: 1.2rem;
        transition: cubic-bezier(0.9, 0.75, 1, 1) 0.3s;

        &:hover {
            background-color: ${color.grey.shade.darker};
            color: ${color.white};
        }

        &:active {
            background-color: ${color.black};
            transition: linear 0.05s;
        }
    }

    &.gradient {
        background: ${`linear-gradient(
        245deg,
        ${color.blue.neutral} -90%,
        ${color.purple.dark} 120%)`};
        color: ${color.grey.tint.lightest};

        ${() => { // Use function to avoid Prettier ugly formatting.
        return gradientTransition(
            color.blue.darker,
            color.purple.darker,
            css`border-radius: ${(props) => props.$radius};`,
        );
    }}
    }

    &.gradient-light {
        background: ${`linear-gradient(
        245deg,
        ${color.blue.neutral + transparency.x70} -90%,
        ${color.pink.dark + transparency.x70} 120%)`};
        color: ${color.white};

        ${() => { // Use function to avoid Prettier ugly formatting.
        return gradientTransition(
            color.blue.darker + transparency.x70,
            color.purple.darker + transparency.x70,
            css`border-radius: ${(props) => props.$radius};`,
        );
    }}
    }

    &.home {
        margin-top: 4rem;
        margin-bottom: 4rem;
    }

    &.full {
        width: 100%;
    }

    &.upvote-button {
        padding: 0.35rem;
        padding-top: 0.25rem;
        margin: 0;
        border-radius: 0.6rem;
    }

    &.comments-section {
        padding: 0.5rem 0.75rem;
        border-radius: 0.5rem;
    }
`;

/**
 * Options Button Component.
 *
 * @param {String} $radius transient prop for the button radius
 */
export const OptionsButton = styled.button.attrs((props) => ({
    $radius: props.$radius || "50%",
}))`
    color: ${color.grey.tint.neutral};
    border-radius: ${(props) => props.$radius};
    padding: 0.4rem;
    display: block;
    margin: auto;
    transition: ease-out 0.3s;

    &:hover {
        background-color: ${color.grey.tint.lightest + transparency.x20};

        /* If Icon is inside, change color when button is hovered over */
        & ${Icon} {
            fill: ${color.grey.shade.neutral}
        }
    }

    &.no-bg {
        padding: 0;

        &:hover {
            color: ${color.grey.shade.neutral};
            background-color: transparent;
        }
    }

    &.keep-next {
        margin-left: 0;
        margin-right: 0.5rem;
    }
`;

/**
 * Horizontal Ruler Component.
 *
 * @param {String} width width of the horizontal ruler
 * @param {String} color color of the horizontal ruler
 * @param {Boolean} thin flag indicating horizontal ruler is thin
 * @param {Boolean} noMargin flag indicating component has no margin
 */
export const HorizontalRuler = styled.hr.attrs((props) => ({
    width: props.width || "100%",
    color: props.color || color.grey.shade.dark,
}))`
    border: 0;
    height: 0;
    width: ${(props) => props.width};
    background-color: transparent;
    margin-bottom: ${(props) => props.noMargin ? 0 : "2rem"};
    margin-top: ${(props) => props.noMargin ? 0 : "1.5rem"};
    border-top: ${(props) => props.thin ? "0.05rem" : "0.1rem"}
                solid
                ${(props) => handleColor(props.color)};

    &.small-margin {
        margin-top: 0.8rem;
        margin-bottom: 1rem;
    }

    &.footer-hr {
        border-top: 0.05rem solid ${color.grey.shade.light};
        margin-top: 0.8rem;
        margin-bottom: 1rem;
    }

    &.sidebar-nav {
        border-top: 0.05rem solid ${color.grey.shade.light};
        margin: 0;
    }

    &.description-box {
        margin: auto;
        border-top: ${(props) =>
        props.last ?
            "none" :
            `0.05rem solid ${color.pink.darker + transparency.x18}`};
    }

    &.header-home {
        margin: 1.2rem auto 2rem auto;
        box-shadow: 0.01rem 0.01rem 0.04rem ${color.grey.shade.light};
    }
`;

/**
 * Flex-box Container.
 *
 * @param {String} justifyContent justify-content styling
 * @param {Boolean} wrapContent flex-wrap direction
 * @param {Boolean} column flag to indicate flex-box direction
 * @param {Boolean} smallMargin flag indicating component has small margin
 */
export const FlexContainer = styled.div.attrs((props) => ({
    justifyContent: props.justifyContent || "center",
}))`
    color: inherit;
    display: flex;
    flex-wrap: ${(props) => props.wrapContent ? "wrap" : "nowrap"};
    flex-direction: ${(props) => props.column ? "column" : "row"};
    justify-content: ${(props) => props.justifyContent};
    margin: ${(props) => props.smallMargin ? "0.25rem" : "1rem"};

    &.footer-nav {
        margin: 1rem 3rem;
    }

    & ~ ${TinyRouterLink} {
        margin-top: 0;
    }

    &.items-margin > * {
        margin: 0.8rem auto;
    }
`;

/**
 * Text Area Component.
 */
export const TextArea = styled.textarea`
    resize: none;
    outline: 0;
    border: 0.05rem solid ${color.grey.shade.light};
    padding: 0.5rem 0.7rem;
    border-radius: 0.25rem;
    margin-bottom: 0.2rem;
    resize: none;
    overflow: auto;
    height: auto;
    line-height: 1.2;
    box-shadow: none;
    transition: box-shadow linear 0.2s;

    &:focus {
        outline: 0;
        border: 0.05rem solid ${color.blue.neutral};
        box-shadow: 0 0 0.3rem ${color.blue.neutral};
        transition: box-shadow linear 0.2s
    }

    &.invalid {
        border: 0.05rem solid ${color.red.neutral};

        &:focus {
            border: 0.05rem solid ${color.red.neutral};
            box-shadow: 0 0 0.3rem ${color.red.neutral};
        }
    }
`;

/**
 * Text Area Component.
 */
export const CoolList = styled.ul`
    text-align: center;
    margin: 2rem auto;

    & li {
        list-style: circle inside none;

        & ::marker {
            color: ${color.blue.lighter};
        }
    }
`;
