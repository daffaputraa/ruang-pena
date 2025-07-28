    "use client"

    import { BodyText, ClickAbleBadge, HeadingSatoe } from '@/components'
    import { ChevronLeftIcon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'
    import { HeartIcon as HeartIconSolid, ShareIcon } from '@heroicons/react/24/solid'
    import Link from 'next/link'
    import { useParams } from 'next/navigation'
    import React, { useState } from 'react'
    import { motion, AnimatePresence } from 'motion/react'
    import Image from 'next/image'
    import { cihapit, image, share } from '@/assets'
    import SectionDescription from '../components/section-description'

    // Mock images data
    const images = [
        {
            id: 1,
            src: cihapit,
            alt: "Cihapit"
        },
        {
            id: 2,
            src: image,
            alt: "Image 2"
        },
    ]

    // tinder slinder
    const TinderImageSlider = () => {
        const [currentIndex, setCurrentIndex] = useState(0)

        const handleSwipe = () => {
            setCurrentIndex(prev => (prev + 1) % images.length)
        }

        const handlePrevious = () => {
            setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
        }

        const handleNext = () => {
            setCurrentIndex(prev => (prev + 1) % images.length)
        }

        const goToSlide = (index) => {
            setCurrentIndex(index)
        }

        const getCardProps = (index) => {
            const totalCards = images.length
            const adjustedIndex = (index - currentIndex + totalCards) % totalCards

            return {
                scale: adjustedIndex === 0 ? 1 : 1 - (adjustedIndex * 0.05),
                y: adjustedIndex * 15,
                zIndex: totalCards - adjustedIndex,
                rotateZ: adjustedIndex * 1.5,
                opacity: adjustedIndex < 3 ? 1 : 0
            }
        }

        return (
            <div className="tinder-slider w-full max-w-xs mx-auto relative hidden lg:block">
                {/* Cards Stack Container */}
                <div className="relative w-full h-[392px] mt-8">
                    {/* Cards */}
                    {images.map((imageData, index) => {
                        const cardProps = getCardProps(index)
                        const isTopCard = (index - currentIndex + images.length) % images.length === 0

                        return (
                            <motion.div
                                key={imageData.id}
                                className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden cursor-grab active:cursor-grabbing select-none border-8 border-white h-fit"
                                style={{
                                    zIndex: cardProps.zIndex,
                                    pointerEvents: cardProps.opacity === 0 ? 'none' : 'auto'
                                }}
                                animate={{
                                    scale: cardProps.scale,
                                    y: cardProps.y,
                                    rotateZ: cardProps.rotateZ,
                                    opacity: cardProps.opacity,
                                    x: 0,
                                    rotate: 0
                                }}
                                // drag={isTopCard ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0}
                                dragMomentum={false}
                                whileDrag={isTopCard ? {
                                    rotate: ["", `${info => info.offset.x / 12}deg`],
                                    scale: 1.02,
                                    transition: {
                                        type: "tween",
                                        duration: 0,
                                        ease: "linear"
                                    }
                                } : {}}
                                onDragEnd={(event, info) => {
                                    if (isTopCard) {
                                        const threshold = 70
                                        const velocity = Math.abs(info.velocity.x)

                                        if (Math.abs(info.offset.x) > threshold || velocity > 500) {
                                            handleSwipe()
                                        }
                                    }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 40,
                                    mass: 0.5,
                                    restDelta: 0.001,
                                    restSpeed: 0.001
                                }}
                            >
                                <div className="relative w-full h-[380px]">
                                    <Image
                                        src={imageData.src}
                                        alt={imageData.alt}
                                        fill
                                        className="object-cover rounded-2xl h-[380px]"
                                        draggable={false}
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Navigation Container with Arrows and Indicators */}
                <div className="flex items-center justify-between gap-4 mt-6 max-w-[200px] mx-auto">
                    {/* Previous Arrow */}
                    <button
                        onClick={handlePrevious}
                        className="bg-white/90 hover:bg-white border border-stone-200 rounded-full p-2 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                        aria-label="Previous image"
                    >
                        <ChevronLeftIcon className="w-4 h-4 text-gray-700" />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-stone-800 scale-110'
                                    : 'bg-stone-300 hover:bg-stone-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Next Arrow */}
                    <button
                        onClick={handleNext}
                        className="bg-white/90 hover:bg-white border border-stone-200 rounded-full p-2 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                        aria-label="Next image"
                    >
                        <ChevronLeftIcon className="w-4 h-4 text-gray-700 rotate-180" />
                    </button>
                </div>

                {/* Image Counter */}
                <div className="text-center mt-3">
                    <BodyText variant="sm" classname="text-stone-600">
                        {currentIndex + 1} / {images.length}
                    </BodyText>
                </div>
            </div>
        )
    }

    // back button 
    const BackButton = () => (
        <>
            <Link href="/" className='flex gap-1 items-center'>
                <ChevronLeftIcon className='w-4' />
                <BodyText variant='baseBold'>Kembali</BodyText>
            </Link>
        </>
    )

    // detailInformation
    const DetailInformation = () => (
        <>
            <div className="main-container flex flex-col md:items-center md:flex-row gap-3 md:gap-4">
                <div className="sub-info">
                    <BodyText variant='sm' classname="text-stone-600">KATEGORI</BodyText>
                    <BodyText variant='baseBold' classname="text-stone-900">#KAMPUS</BodyText>
                </div>
                <div className="divider md:w-[1px] md:h-[24px] w-full h-[1px] bg-stone-300"></div>
                <div className="sub-info">
                    <BodyText variant='sm' classname="text-stone-600">TANGGAL</BodyText>
                    <BodyText variant='baseBold' classname="text-stone-900">15 Maret 2025</BodyText>
                </div>
                <div className="divider md:w-[1px] md:h-[24px] w-full h-[1px] bg-stone-300"></div>
                <div className="sub-info">
                    <BodyText variant='sm' classname="text-stone-600">ESTIMASI</BodyText>
                    <BodyText variant='baseBold' classname="text-stone-900">5 Menit Baca</BodyText>
                </div>
            </div>
        </>
    )

    const SectionHero = () => {
        const { slug } = useParams()

        return (
            <section className='bg-white'>
                <section className="main-container hero-section pt-[140px] pb-[64px] px-5 lg:px-0 max-w-[996px] gap-5 mx-auto flex bg-white">
                    <article className='left-side flex flex-col gap-9 max-w-[690px]'>
                        <BackButton />
                        <HeadingSatoe>
                            Rasanya Ngampus di Universitas Teknologi Bandung
                        </HeadingSatoe>
                        <DetailInformation />
                        <ClickAbleBadge icon={share} classname={'w-fit'}>Share</ClickAbleBadge>
                    </article>
                    <article className='lg:flex w-full hidden '>
                        <TinderImageSlider />
                    </article>
                </section>
            </section>
        )
    }

    export default SectionHero