import React from 'react';
import { Button as RawButton, useTheme, IButtonProps as IRawButtonProps } from 'native-base';

type ButtonVariant = 'primary' | 'outlined';

interface IButtonProps extends IRawButtonProps {
    variant?: ButtonVariant;
}

const Button = function ({ children, variant = 'primary', ...others }: IButtonProps) {
    const theme = useTheme();

    const specificStyles: Record<ButtonVariant, IRawButtonProps> = {
        primary: {
            backgroundColor: theme.colors.green[400],
            _pressed: {
                backgroundColor: theme.colors.green[500],
            },
        },
        outlined: {
            _pressed: {
                backgroundColor: theme.colors.light[200],
            },
        },
    };

    return (
        <RawButton
            variant="unstyled"
            borderColor={theme.colors.black}
            borderStyle="solid"
            borderWidth={2}
            _text={{
                fontWeight: 500,
            }}
            {...specificStyles[variant]}
            {...others}
        >
            {children}
        </RawButton>
    );
};

export default Button;
