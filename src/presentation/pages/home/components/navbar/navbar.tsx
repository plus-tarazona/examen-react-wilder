import { useEffect, useState } from 'react';
import { IOption } from '../../../../../core/models/options.interface';
import MenuItems from '../menu-items/menuItems';
import './navbar.scss';

const Navbar = () => {
  // let data = require('src/mock/options2.json');

  const [data, setData] = useState<IOption[]>([]);

  const fetchJson = () => {
    fetch('src/mock/options2.json')
    .then(response => {
      return response.json();
    }).then(data => {
      setData(data);
    }).catch((e: Error) => {
      console.log(e.message);
    });
  }

  useEffect(() => {
    fetchJson()
  },[])

  return (
    <nav>
      <ul className="menus">
        {data.map((menu: IOption, index: number) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
