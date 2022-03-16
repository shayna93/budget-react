import React from 'react'
import { Header } from 'semantic-ui-react'

function MainHeader(props) {
    const title = props.title;
    const type = props.type;
    return ( 
      <Header type={type}>
        {title}
      </Header>
    )
}

export default MainHeader
