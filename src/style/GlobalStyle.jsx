import { createGlobalStyle } from "styled-components";
import NanumGothic from "../assets/fonts/Nanum_Gothic/NanumGothic-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: 'NanumGothic';
	src: url(${NanumGothic});
}
  html, body, div, span, 
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, em, img,
b, u, i, ol, ul, li,
article, aside, footer, header, 
menu, nav {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family:'NanumGothic';
	vertical-align: baseline;
	box-sizing:border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
`;
