import React from "react";
import { Button as AntButton, type ButtonProps as AntButtonProps } from "antd";

export interface ButtonProps extends AntButtonProps {
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           fullWidth,
                                           block,
                                           type = "primary",
                                           ...rest
                                       }) => {
    return (
        <AntButton type={type} block={fullWidth ?? block} {...rest}>
            {children}
        </AntButton>
    );
};

export default Button;
