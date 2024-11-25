import React from "react";
import { IconImage, Icons, IconsContainer } from "./iconsStyeld.ts";

interface IconsProps {
    src: any
    margin?: boolean
    styles?: boolean
    onClick?: () => void
    profile?: boolean
}

function Icon(props: IconsProps) {

    return (
        <IconsContainer 
        style={{
            marginRight: props.margin? '14px': '0px',
            position: props.styles? 'absolute': 'static',
            right: props.styles? '10px': '',
            bottom: props.styles? '-2px': ''
        }} 
        onClick={props.onClick}>
            <Icons>
                <IconImage style={{
                    width: props.profile? '100%' : '65%',
                    height: props.profile? '100%' : '65%'
                }} src={props.src} alt="icons"/>
            </Icons>
        </IconsContainer>
    )
}

export default Icon;