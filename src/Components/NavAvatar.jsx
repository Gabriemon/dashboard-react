import React from 'react'
import profileImg from '../Images/user.jpg';

function NavAvatar() {
  return (
    <li className='nav-item dropdown pe-3'>
      <a 
        className='nav-link nav-profile d-flex align-items-center pe-0'
        href='#'
        data-bs-toggle='dropdown'
      >
        <img src={profileImg} alt='Profile' className='rounded-circle' />
        <span className='d-none d-md-block dropdown-toggle ps-2'>G. Alves</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header'>
          <h6>Gabriel</h6>
          <span>Desenvolvedor Web</span>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <a
            className='dropdown-item d-flex align-items-center'
            href='users-profile.html'
          >
            <i className='bi bi-person'></i>
            <span>Meu Perfil</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />

        </li>

        <li>
          <a 
            className='dropdown-item d-flex align-items-center'
            href='users-profile.html'
          >
            <i className='bi bi-gear'></i>
            <span>Configurações da conta</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

      <li>
        <a
          className='dropdown-item d-flex align-items-center'
          href='pages-faq.html'
        >
          <i className='bi bi-question-circle'></i>
          <span>Ajuda?</span>
        </a>
      </li>

      <li>
        <hr className='dropdown-divider' />
      </li>

      <li>
        <a className='dropdown-item d-flex align-items-center' href='#'>
          <i className='bi bi-box-arrow-right'></i>
          <span>Sair</span>
        </a>
      </li>
      </ul>
    </li>
  )
}

export default NavAvatar;
