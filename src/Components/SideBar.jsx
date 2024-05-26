import React from 'react';
import './sideBar.css';
import navList from '../Data/navItem';
import NavItem from './navItem';

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
      <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item'>
            <a className='nav-link' href='/'>
                <i className='bi bi-grid'>
                  <span>Dashboard</span>
                </i>
            </a>
        </li>

        <li className='nav-item'>
            <a 
              className='nav-link collapsed'
              data-bs-target='#components-nav'
              data-bs-toggle='collapse'
              href='#'
            >
              <i className='bi bi-menu-button-wide'></i>
              <span>Documentos</span>
              <i className='bi bi-chevron-down ms-auto'></i>
            </a>
            <ul
              id='components-nav'
              className='nav-content collapse'
              data-bs-parent='#sidebar-nav'
            >
            <li>
                <a href='#'>
                    <i className='bi bi-circle'></i>
                    <span>Clientes</span>
                </a>
                </li>
            <li>
                <a href='#'>
                    <i className='bi bi-circle'></i>
                    <span>Fornecedores</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className='bi bi-circle'></i>
                    <span>Logística</span>
                </a>
            </li>
            </ul>
        </li>

        <li className='nav-item'>
          <a
            className='nav-link collapsed'
            data-bs-target='#forms-nav'
            data-bs-toggle='collapse'
            href='#'
        >
            <i className='bi bi-journal-text'></i>
            <span>Formulário</span>
            <i className='bi bi-chevron-down ms-auto'></i>
          </a>
          <ul 
            id='forms-nav'
            className='nav-content collapse'
            data-bs-parent='#siderbar-nav'
        >
          <li>
            <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Cadastro</span>
            </a>
          </li>
          <li>
            <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Liberação</span>
            </a>
          </li>
          <li>
            <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Cancelamento</span>
            </a>
          </li>
        </ul>
      </li>

      <li className='nav-item'>
        <a 
          className='nav-link collapsed'
          data-bs-target='#tables-nav'
          data-bs-toggle='collapse'
          href='#'
        >
            <i className='bi bi-layout-text-window-reverse'></i>
            <span>Tabelas</span>
            <i className='bi bi-chevron-down ms-auto'></i>
        </a>
        <ul 
        id='tables-nav'
        className='nav-content collapse'
        data-bs-parent='#sidebar-nav'
        >
          <li>
            <a href='#'>
              <i className='bi bi-circle'></i>
              <span>Tabelas Gerais</span>
            </a>
          </li>
          <li>
            <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Tabela de dados</span>
            </a>
          </li>
        </ul>
      </li> 
      <li className='nav-item'>
        <a 
          className='nav-link collapsed'
          data-bs-target='#charts-nav'
          data-bs-toggle='collapse'
          href='#'
        >
          <i className='bi bi-bar-chart'></i>
          <span>Gráficos</span>
          <i className='bi bi-chevron-down ms-auto'></i>
        </a>
        <ul 
          id='charts-nav'
          className='nav-content collapse'
          data-bs-parent='#sidebar-nav'
        >
          <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Charts.js</span>
              </a>
          </li>
          <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>ApexCharts</span>
              </a>
          </li>
          <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Echarts</span>
              </a>
          </li>
        </ul>
    </li>

    <li className='nav-item'>
        <a 
          className='nav-link collapsed'
          data-bs-target='#icons-nav'
          data-bs-toggle='collapse'
          href='#'
        >
          <i className='bi bi-gem'></i>
          <span>Ícones</span>
          <i className='bi bi-chevron-down ms-auto'></i>
        </a>
        <ul 
          id='icons-nav'
          className='nav-content collapse'
          data-bs-parent='#sidebar-nav'
        >
          <li>
            <a href='#'>
              <i className='bi bi-circle'></i>
              <span>Ícones Bootstap</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='bi bi-circle'></i>
              <span>Ícones Remix</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='bi bi-circle'></i>
              <span>Boxicons</span>
            </a>
        </li>
      </ul>
    </li>

    <li className='nav-heading'>Página's</li>
    {navList.map(nav=>(
      <NavItem key={nav._id} nav={nav} />
    ))}
  </ul>
</aside>
  )
}

export default SideBar
