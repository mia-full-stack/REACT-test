/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import {  headerWrapper, linkStyle, headerTitle, line, backBtn} from "./styles"

const QuickLink = ({ to, title, text }) => {
    return (
        <div css={headerWrapper}>
            <Link to={to} css={linkStyle}><h2 css={headerTitle}>{title}</h2></Link>
            <div css={line}></div>
            <Link to={to} css={backBtn}>{text}</Link>
        </div>
    )
}

export default QuickLink;