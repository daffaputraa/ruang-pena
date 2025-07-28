'use client'
import Link from 'next/link'
import React from 'react'
import { BodyText } from '.'
import { Squircle } from 'corner-smoothing'
import { Link as Scroll } from 'react-scroll';

const variants = {
    primary: 'bg-emerald-800 text-white px-4 py-2'
}

const Button = ({ variant = 'primary', children, to = "" }) => {
    return (
        <Scroll to={to} smooth={true}>
            <Squircle
                cornerRadius={8}
                cornerSmoothing={1}
                
            >
                <Link href="#" className={`${variants[variant]} inline-block`}>
                    <BodyText variant="base">{children}</BodyText>
                </Link>
            </Squircle>
        </Scroll>
    )
}

export default Button
