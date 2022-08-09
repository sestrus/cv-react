import React from 'react'
import photo from './herobrine.png'
export const MainPage = () => {

    return (
        <div className="main-page">
            <section className="side-info">
                <div className="image"><img src={photo} alt="photo" /></div>
                <div className="contact"></div>
                <div className="languages"></div>
            </section>
            <section className="main-info">
                <div className="summary"></div>
                <div className="skills"></div>
                <div className="education"></div>
            </section>
        </div>
    )
}