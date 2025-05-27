import { Avatar } from 'antd';
import Icon from '../../components/Icon';
import ThemeSwitch from '../../components/ThemeSwitch';

const Header = () => {
    return (
        <div className="flex h-full flex-row items-center justify-between gap-5">
            <h2 className="text-lg m:text-xl font-medium">داشبورد</h2>
            <div className="flex flex-row-reverse gap-5 items-center">
                <span className="flex flex-row items-center gap-3">
                    <Avatar size="large">
                        <Icon name="user" />
                    </Avatar>
                    رامین جوشنگ
                </span>
                <ThemeSwitch />
            </div>
        </div>
    );
};

export default Header;