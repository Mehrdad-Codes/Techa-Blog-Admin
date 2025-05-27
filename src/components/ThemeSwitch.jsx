import { Switch } from "antd";
import { SunIcon, MoonIcon } from "lucide-react";
import Icon from "@ant-design/icons";

const ThemeSwitch = () => {
  return (
    <Switch
      // checked={isDark}
      // onChange={setIsDark}
      checkedChildren={<Icon component={SunIcon} />}
      unCheckedChildren={<Icon component={MoonIcon} />}
    />
  );
};

export default ThemeSwitch;