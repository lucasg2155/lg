import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hola soy <Styled.a href="http://facebook.com/lukittasgarcia/">Lucas</Styled.a>
    {` `}
    El Lorem Ipsum fue concebido como un
    <br />
    El Lorem Ipsum fue con rules.
  </Fragment>
)
