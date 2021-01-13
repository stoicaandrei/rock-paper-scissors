import React from 'react';

import { Logo } from 'components';

import { useTabDispatch, useTabState } from './TabProvider';

const makeBtn = (src: string, click: () => void, isActive: boolean) => {
  return (
    <div className={`gameNav__btn ${isActive ? 'active' : ''}`} onClick={click}>
      <img src={src} alt="Settings" />
    </div>
  );
};

const Navigation: React.FC = () => {
  const { tabs, option } = useTabState();
  const dispatch = useTabDispatch();

  return (
    <div className="gameNav">
      <Logo />

      <div className="gameNav__buttons">
        {tabs.map(({ key, value, icon }) => {
          return makeBtn(
            icon,
            () => {
              dispatch({ option: key });
            },
            option === key
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
