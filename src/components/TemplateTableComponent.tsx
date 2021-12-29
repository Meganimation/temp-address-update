import React from 'react'
import styled from 'styled-components'
import { Button } from "stories/Button";

const TemplateTableComponentWrapper = styled.section`
height: 65vh;
width: 100%;
overflow: auto;
background-color: #26374C;
margin: 10px;
` 

export default function TemplateTableComponent() {
    return (
        <TemplateTableComponentWrapper>
            <Button label='Parse' />
            This is the TemplateTableComponent This is the TemplateTableComponent This is the TemplateTableComponent This is the TemplateTableComponent This is the TemplateTableComponent This is the TemplateTableComponent This is the TemplateTableComponent This is the TemplateTableComponent
        </TemplateTableComponentWrapper>
    )
}
