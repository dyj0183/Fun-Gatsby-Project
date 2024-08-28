import * as React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <HeadWrapper>
      <HeadContent>
        I'd like to become a
        <span style={{ fontWeight: "bold", marginLeft: "8px" }}> MVer</span>!
      </HeadContent>
    </HeadWrapper>
  )
}

export default Header

const HeadWrapper = styled.div`
  background: #add8e6;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const HeadContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Shadow effect */
`
