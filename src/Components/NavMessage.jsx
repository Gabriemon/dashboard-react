import React from 'react'

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href='#' data-bs-toggle='dropdown'>
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
          Você possui 3 novas mensagens
          <a href='#'>
            <span className='badge rounded-pill bg-primary p-2 ms-2'>
              Mostrar tudo
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
          <a href='#'>
            <img 
              src='assets/img/message-1.jpg'
              alt=''
              className='rounded-circle'
              />
              <div>
                <h4>Maria Victória</h4>
                <p>
                  Exemplo de mensagem para exibição ...
                </p>
                <p>1 hr atrás</p>
              </div>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
          <a href='#'>
            <img 
              src='assets/img/message-2.jpg'
              alt=''
              className='rounded-circle'
              />
              <div>
                <h4>Maria Zannin</h4>
                <p>
                  Exemplo de mensagem para exibição ...
                </p>
                <p>2 hrs atrás</p>
              </div>
          </a>
        </li>
        <li>
          <hr className='dropdown divider' />
        </li>

        <li className='message-item'>
          <a href='#'>
            <img 
              src='assets/img/message-3.jpg'
              alt=''
              className='rounded-circle'
              />
              <div>
                <h4>Marcelo Bennevides</h4>
                <p>
                  Exemplo de mensagem para exibição ...
                </p>
                <p>4 hrs atrás</p>
              </div>
          </a>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>
        <li className='dropdown-footer'>
            <a href='#'> Ver mais mensagens</a>
        </li>    
      </ul>
    </li>
  )
}

export default NavMessage;
