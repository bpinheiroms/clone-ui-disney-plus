import React from 'react'
import MenusFixedList from '../datas/card-fixed'

const MenusFixedsComponent: React.FC = () => {
  return (
    <>
      <section className="categories-box">
        {MenusFixedList.map((menu, index) => (
          <div className="categorie" key={index}>
            <div className="categorieItem">
              <img src={menu.img.src} alt={menu.img.alt} />
              <video className="hover-image" autoPlay muted loop>
                <source src={menu.videoSource} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default MenusFixedsComponent
