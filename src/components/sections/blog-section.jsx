'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { BodyText, CardMain } from '..'
import { categories } from '@/constant/mockdata'
import { cihapit, bch } from '@/assets'
import { motion } from 'motion/react'
import { Element } from 'react-scroll';

const BlogSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

    const tabRefs = useRef([])

    useEffect(() => {
        const current = tabRefs.current[selectedIndex]
        if (current) {
            setIndicatorStyle({
                left: current.offsetLeft,
                width: current.clientWidth,
            })
        }
    }, [selectedIndex])

    // Data dummy untuk cards
    const cardData = [
        { id: 1, image: cihapit, date: "14 Maret 2025", title: "Cihapit, pasar paling aesthetic", duration: "2 Menit Baca", tag: "REVIEW TEMPAT", excerpt: "Perjalanan ke Turki bukan cuma soal tempat indah dan sejarah yang megah—buatku, justru rasa yang paling membekas datang dari meja makan." },
        { id: 2, image: cihapit, date: "14 Maret 2025", title: "Cihapit, pasar paling aesthetic", duration: "2 Menit Baca", tag: "REVIEW TEMPAT", excerpt: "Perjalanan ke Turki bukan cuma soal tempat indah dan sejarah yang megah—buatku, justru rasa yang paling membekas datang dari meja makan." },
        { id: 3, image: cihapit, date: "14 Maret 2025", title: "Cihapit, pasar paling aesthetic", duration: "2 Menit Baca", tag: "REVIEW TEMPAT", excerpt: "Perjalanan ke Turki bukan cuma soal tempat indah dan sejarah yang megah—buatku, justru rasa yang paling membekas datang dari meja makan." },
        { id: 4, image: cihapit, date: "14 Maret 2025", title: "Cihapit, pasar paling aesthetic", duration: "2 Menit Baca", tag: "REVIEW TEMPAT", excerpt: "Perjalanan ke Turki bukan cuma soal tempat indah dan sejarah yang megah—buatku, justru rasa yang paling membekas datang dari meja makan." },
        { id: 5, image: cihapit, date: "14 Maret 2025", title: "Cihapit, pasar paling aesthetic", duration: "2 Menit Baca", tag: "REVIEW TEMPAT", excerpt: "Perjalanan ke Turki bukan cuma soal tempat indah dan sejarah yang megah—buatku, justru rasa yang paling membekas datang dari meja makan." },
        { id: 6, image: cihapit, date: "14 Maret 2025", title: "Cihapit, pasar paling aesthetic", duration: "2 Menit Baca", tag: "REVIEW TEMPAT", excerpt: "Perjalanan ke Turki bukan cuma soal tempat indah dan sejarah yang megah—buatku, justru rasa yang paling membekas datang dari meja makan." },
    ]

    return (
        <Element name='blog'>
            <motion.div
                className="max-w-[996px] mx-auto py-6 px-5 lg:px-0"
            >
                <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.1
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className="relative w-full">
                            <Tab.List className="flex gap-6 overflow-x-auto border-b border-stone-400 relative">
                                {categories.map((cat, index) => (
                                    <Tab
                                        key={cat.id}
                                        ref={(el) => (tabRefs.current[index] = el)}
                                        className={({ selected }) =>
                                            clsx(
                                                'pb-4 pt-3 whitespace-nowrap outline-none w-fit',
                                                selected
                                                    ? 'text-black'
                                                    : 'text-stone-600 hover:text-stone-800'
                                            )
                                        }
                                    >
                                        <BodyText variant='lg'>
                                            {cat.name}
                                        </BodyText>
                                    </Tab>
                                ))}
                                <div
                                    className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
                                    style={indicatorStyle}
                                />
                            </Tab.List>
                        </div>
                    </motion.div>

                    <Tab.Panels className="mt-6">
                        {categories.map((cat) => (
                            <Tab.Panel key={cat.id}>
                                <motion.div
                                    className="grid grid-cols-1 gap-7 lg:grid-cols-3"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.15,
                                                delayChildren: 0.1
                                            }
                                        }
                                    }}
                                >
                                    {cardData.map((card, index) => (
                                        <CardMain
                                            key={card.id}
                                            index={index}
                                            image={card.image}
                                            date={card.date}
                                            title={card.title}
                                            duration={card.duration}
                                            tag={card.tag}
                                            excerpt={card.excerpt}
                                        />
                                    ))}
                                </motion.div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </motion.div>
        </Element>
    )
}

export default BlogSection
