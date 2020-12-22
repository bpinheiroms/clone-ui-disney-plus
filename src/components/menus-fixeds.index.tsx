import React from 'react'
import MenusFixedList from '../datas/card-fixed'
import { CategorieBox, Categorie, CategorieItem } from '../styles/pages/Home'

const MenusFixedsComponent: React.FC = () => {
  return (
    <>
      <CategorieBox>
        {MenusFixedList.map((menu, index) => (
          <Categorie key={index}>
            <CategorieItem>
              <img src={menu.img.src} alt={menu.img.alt} />
              <video className="hover-image" autoPlay muted loop>
                <source src={menu.videoSource} type="video/mp4" />
              </video>
            </CategorieItem>
          </Categorie>
        ))}
      </CategorieBox>
    </>
  )
}

export default MenusFixedsComponent
