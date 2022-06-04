import styled from '@emotion/styled'
import { Typography, Card, Button, CardActions } from '@mui/material'

export const CardProduto = styled(Card)`
    min-height: 23em;
    max-height: 23em;
    max-width: 300px;
    display: flex;
    flex-direction: column;
`

export const NameProduct = styled(Typography)`
    margin-top: 0.5em;
    color: #000;
    font-weight: bold;
    font-size: 0.90em;
    max-height: 64px;
    overflow: hidden;
`
export const PriceProduct = styled(Typography)`
    margin-top: 0.5em;
    color: orange;
    font-weight: bold;
    font-size: 1.6em;
    overflow: hidden;
    
`
