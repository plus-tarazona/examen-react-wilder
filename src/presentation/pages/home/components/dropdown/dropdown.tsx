import { IOption } from '../../../../../core/models/options.interface';
import MenuItems from '../menu-items/menuItems';
import './dropdown.scss';

interface Props {
  submenus: IOption[],
  dropdown: boolean,
  depthLevel: number
}

const Dropdown = ({ submenus, dropdown, depthLevel }: Props) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown ? 'show' : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
