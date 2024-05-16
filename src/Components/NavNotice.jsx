import React from 'react'

function NavNotice() {
  return (
    <li className='nav-item dropdown'>
        <a className='nav-link nav-icon' href='#' data-bs-toggle='dropdown'>
            <i className='bi bi-bell'></i>
            <span className='badge bg-primary badge-number'>4</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
            <li className='dropdown-header'>
            Você possui 4 novas notificações
            <a href='#'>
                <span className='badge rounded-pill bg-primary p-2 ms-2'>
                    Ver tudo
                </span>
            </a>
        </li>
        <li>
            <hr className='dropdown-divider'/>
        </li>

        <li className='notification-item'>
            <i className='bi bi-exclamation-circle text-warning'></i>
            <div>
                <h4>Aviso</h4>
                <p>Você possui um aviso</p>
                <p>30 min. ago</p>
            </div>
        </li>

        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
          <i className='bi bi-x-circle text-danger'></i>
          <div>
          <h4>Atenção</h4>
          <p>Você possui um chamado de atenção</p>
          <p>1 hr. ago</p>
          </div>
        </li>

        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
            <i className='bi bi-check-circle text-sucess'></i>
            <div>
                <h4>Concluido</h4>
                <p>Você concluiu a task</p>
                <p>2 hrs. ago</p>
            </div>
        </li>

        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
            <i className='bi bi-info-circle text-primary'></i>
            <div>
                <h4>Informação</h4>
                <p>Você possui uma nova task</p>
                <p>4 hrs. ago</p>
            </div>
        </li>

        <li>
            <hr className='dropdown-divider' />
        </li>
        <li className='dropdown-footer'>
            <a href='#'>Ver mais notificações</a>
        </li>    
    </ul>
</li>
  );
}

export default NavNotice;
