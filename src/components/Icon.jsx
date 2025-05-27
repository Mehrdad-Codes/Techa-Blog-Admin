import { icons } from "lucide-react";

const Icon = ({ name, color, size = 18, ...props }) => {
    [...""].slice(1);
    /**
     *
     * @param {string} text
     * @returns {string}
     */
    const toUpperCamelCase = (text) =>
        text.replace(/([-]|^)\w/g, (i) => i.substring(i.length - 1).toUpperCase());

    const LucideIcon = icons[toUpperCamelCase(name)];

    return <LucideIcon color={color} size={size} strokeWidth={1.6} {...props} />;
};

export default Icon;