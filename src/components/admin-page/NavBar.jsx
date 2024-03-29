import React from 'react';
import useDataContext from '../../hooks/useDataContext';
import BankLogo from '../login-page/BankLogo';

function NavBar() {
  const { adminLogin } = useDataContext()

  return (
    <div className='admin-dashboard'>
      <div className='nav-bar'>
        <BankLogo />
        <ul>
          <li>Manage Accounts</li>
          <li>Transactions</li>
          <li>
            <i
              className='fa-solid fa-right-from-bracket dashboard-icon'
              onClick={() => {
                adminLogin(false);
              }}
            ></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
