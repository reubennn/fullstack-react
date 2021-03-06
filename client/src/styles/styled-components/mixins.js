import { css } from "styled-components";

import { infiniteLinearTranslate } from "./keyframes";

import { color, transparency } from "./colors";

/**
 * CSS to create a gradient transition effect.
 *
 * - Adds a pseudo element :before
 *
 * @param {String} start linear gradient start color
 * @param {String} end linear gradient end color
 * @param {String} properties other CSS styles to add
 * @return {String} CSS styling for linear gradient transition effect
 *
 */
export const gradientTransition = (start, end, properties) => css`
    position: relative;
    z-index: 1;

    &:before {
        ${properties} /* Add any additional properties */
        background: ${`linear-gradient(
        245deg,
        ${start} -90%,
        ${end} 120%)`};
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        top: 0; left: 0;
        opacity: 0;
        width: 100%;
        z-index: -1;
        transition: cubic-bezier(0.9, 0.75, 1, 1) 0.3s;
    }

    &:hover {
        &:before {
            opacity: 0.8;
        }
    }

    &:active {
        &:before {
            opacity: 1;
            transition: linear 0.05s;
        }
    }
`;

/**
 * CSS to create a background with a linear gradient overlay.
 *
 * @param {String} direction direction of the linear gradient
 * @param {Array} colors colors to use in the gradient
 * @param {String} url image asset url path
 * @param {String} attachment background image attachment
 * @param {String} pos background image position
 * @return {String} CSS styling for background with linear gradient
 */
export const linearGradientBackground = (
    direction = "to bottom",
    colors,
    url,
    attachment = "fixed",
    pos = "center",
) => css`
    background: linear-gradient(
    ${direction},
    ${() => {
        return colors.map((color, index) =>
            colors.length === index + 1 ? `${color}` : `${color},`);
    }}),
    url(${url});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: ${attachment};
    background-position: ${pos};
    background-color: ${colors[0]};
`;

/**
 * CSS to create a linear gradient overlay for a background image.
 *
 * @param {String} direction direction of the linear gradient
 * @param {Array} colors colors to use in the gradient
 * @param {String} attachment background image attachment
 * @param {String} pos background image position
 * @return {String} CSS styling for background with linear gradient
 */
export const linearGradientOverlay = (
    direction = "to bottom",
    colors,
    attachment = "fixed",
    pos = "center",
) => css`
    background: linear-gradient(
    ${direction},
    ${() => {
        return colors.map((color, index) =>
            colors.length === index + 1 ? `${color}` : `${color},`);
    }});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: ${attachment};
    background-position: ${pos};
    background-color: ${colors[0]};
`;

/**
 * CSS to create a background with a linear gradient overlay.
 *
 * @param {String} color color to use as the overlay
 * @param {String} url image asset url path
 * @param {String} attachment background image attachment
 * @param {String} pos background image position
 * @return {String} CSS styling for background with linear gradient
 */
export const overlayBackground = (
    color,
    url,
    attachment = "fixed",
    pos = "center",
) => css`
    background: linear-gradient(
        0deg,
        ${color},
        ${color}
    ),
    url(${url});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: ${attachment};
    background-position: ${pos};
    background-color: ${color};
`;

/**
 * CSS for creating a sliding effect animation.
 *
 * - The elements will translate across the screen.
 *
 * @param {Number} duration the duration to span the logos across the screen
 * @param {Number} offset position of the slider (-1, 0 or 1)
 * @param {Boolean} reverse flag to indicate slider to move in reverse direction
 * @return {String} CSS for a slider animation
 */
export const sliderAnimation = (duration, offset, reverse) => css`
    animation:
    ${duration}s /* duration */
    linear /* timing-function */
    0s /* delay */
    infinite /* iteration-count */
    ${reverse ? "reverse" : "normal"} /* direction */
    both /* fill-mode */
    running /* play-state */
    ${infiniteLinearTranslate(offset)}; /* animation-name */
`;
