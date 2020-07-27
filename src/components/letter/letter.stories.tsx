import React from 'react'
import Letter from "./letter"
import '../letter/letter.scss'

export default { title: 'Letter' }

export const defaultLetter = () => <Letter id={1} indexInArray={0} avatar="http://i.pravatar.cc/300?u=1" sender="William Shakespeare" theme="The Tragical Historie of Hamlet" snippet="To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer. "/>
