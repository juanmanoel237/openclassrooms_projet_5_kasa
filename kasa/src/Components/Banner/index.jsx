import React from 'react'
import "./banner.scss"
import backgroundHome from '../../assets/Image/banner/mer.webp';
import backgroundAbout from '../../assets/Image/banner/montagne.webp';

const configBanner = {
    home: {
        className : 'banner-home',
        imageSrc : backgroundHome,
        imageAlt : 'vue sur mer',
        title: 'Chez vous, partout et ailleurs',
    },
    about: {
        className : 'banner-about',
        imageSrc : backgroundAbout,
        imageAlt : 'vue sur montagne',
        title: null,
    },
}

const Banner = ({page}) => {
    const { className, imageSrc, imageAlt, title} = configBanner[page]
  return (
    <section className={className}>
        <div className="banner-container">
            <img src={imageSrc} className='banner-image' alt={imageAlt} title={imageAlt} />
        </div>
        {title && page === 'home' && (
            <div className="banner-container">
                <h1 className="banner-title">{title}</h1>
            </div>
        )}
    </section>
  )
}

export default Banner