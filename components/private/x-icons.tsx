import { CircleDollarSign, Inbox, LifeBuoy, LogOut, Settings, TriangleAlert, UserPen } from "lucide-react";

interface IconRendererProps {
    icon: string,
    size: number,
    cssClasses: string
}

const IconRenderer: React.FC<IconRendererProps> = ({ icon, size, cssClasses }) => {

    switch (icon) {
        case 'UserPen':
            return <UserPen className={cssClasses} size={size} />;
        case 'Inbox':
            return <Inbox className={cssClasses} size={size} />;
        case 'Settings':
            return <Settings className={cssClasses} size={size} />;
        case 'CircleDollarSign':
            return <CircleDollarSign className={cssClasses} size={size} />;
        case 'LifeBuoy':
            return <LifeBuoy className={cssClasses} size={size} />;
        case 'LogOut':
            return <LogOut className={cssClasses} size={size} />;
        default:
            return <TriangleAlert className={cssClasses} size={size} />;
    }

}

export default IconRenderer;

