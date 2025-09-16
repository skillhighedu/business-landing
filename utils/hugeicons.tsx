import { Home01Icon, ServiceIcon,ArrowDown01Icon,ArrowUp01Icon, ArrowUpRight01Icon,Menu01Icon,Cancel01Icon,CallIcon,UserMultiple02Icon,AnalyticsUpIcon,ZapIcon,Mortarboard01Icon,ArrowMoveUpLeftIcon } from 'hugeicons-react';



export const hugeIcons = {
  home: Home01Icon,
  service: ServiceIcon,
  arrowDown: ArrowDown01Icon,
  arrowUp: ArrowUp01Icon,
  arrowTurnUp: ArrowUpRight01Icon,
  menuIcon: Menu01Icon,
  closeIcon :Cancel01Icon,
  callIcon:CallIcon,
  users:UserMultiple02Icon,
  analytics:AnalyticsUpIcon,
  zapIcon:ZapIcon,
  mortarboard:Mortarboard01Icon,
  arrowTurningUp:ArrowMoveUpLeftIcon
};

export type HugeIconName = keyof typeof hugeIcons;

interface HugeIconProps {
  name: HugeIconName;
  size?: number | string;
  color?: string;
  className?: string;
}

export const HugeIcon: React.FC<HugeIconProps> = ({ name, size = 24, color = '#000', className }) => {
  const IconComponent = hugeIcons[name];
  if (!IconComponent) return null;

  return <IconComponent size={size} color={color} className={className} />;
};
