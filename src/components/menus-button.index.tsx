import React from 'react'
import { IconBox } from '../styles/pages/Home'
import { AiFillHome, AiFillStar } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { GoPlus } from 'react-icons/go'
import { MdMovie } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

const MenusButton: React.FC = () => {
  return (
    <>
      <IconBox>
        <AiFillHome className="icon" />
        <span className="title">INÍCIO</span>
      </IconBox>
      <IconBox>
        <BsSearch className="icon" />
        <span className="title">PESQUISA</span>
      </IconBox>
      <IconBox>
        <GoPlus className="icon" />
        <span className="title">MINHA LISTA</span>
      </IconBox>
      <IconBox>
        <AiFillStar className="icon" />
        <span className="title">ORIGINAIS</span>
      </IconBox>
      <IconBox>
        <RiMovie2Fill className="icon" />
        <span className="title">FILMES</span>
      </IconBox>
      <IconBox>
        <MdMovie className="icon" />
        <span className="title">SÉRIES</span>
      </IconBox>
    </>
  )
}

export default MenusButton
