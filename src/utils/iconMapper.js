import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

const iconPacks = {
  fa: FaIcons,
  bs: BsIcons,
  md: MdIcons,
};

export function getIconComponent(iconString) {
  if (!iconString || typeof iconString !== 'string') return null;

  const [pack, iconName] = iconString.split(':');
  const icons = iconPacks[pack];

  return icons?.[iconName] || null;
}
