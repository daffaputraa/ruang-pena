'use client'
import Link from 'next/link'
import React from 'react'
import { BodyText } from '.'
import { Squircle } from 'corner-smoothing'

const variants = {
    primary: 'bg-emerald-800 text-white px-4 py-2'
}

const Button = ({ variant = 'primary', children }) => {
    return (
        <Squircle
            cornerRadius={8}
            cornerSmoothing={1}
            
        >
            <Link href="#" className={`${variants[variant]} inline-block`}>
                <BodyText variant="base">{children}</BodyText>
            </Link>
        </Squircle>
    )
}

export default Button
