import {Card} from "./Card";
import React from "react";
export default {
    title:'Card',
    component:Card
}

export const Default = ()=><Card><Card.Header src="https://picsum.photos/200/300"/><Card.Heading>Kshitij Gupta</Card.Heading><Card.SubHeading>Founder</Card.SubHeading><Card.Body>Lorem ipsum dolor sit amet consectetur. Tincidunt proin tristique id nulla mi ut ...</Card.Body></Card>
export const NoSubHeading = ()=><Card><Card.Header src="https://picsum.photos/200/300"/><Card.Heading>Kshitij Gupta</Card.Heading><Card.Body>Lorem ipsum dolor sit amet consectetur. Tincidunt proin tristique id nulla mi ut ...</Card.Body></Card>
export const NoBodyText = ()=><Card><Card.Header src="https://picsum.photos/200/300"/><Card.Heading>Kshitij Gupta</Card.Heading><Card.SubHeading>Founder</Card.SubHeading></Card>
export const OnlyHeading = ()=><Card><Card.Header src="https://picsum.photos/200/300"/><Card.Heading>Kshitij Gupta</Card.Heading></Card>
export const OnlySubHeading = ()=><Card><Card.Header src="https://picsum.photos/200/300"/><Card.SubHeading>Founder</Card.SubHeading></Card>