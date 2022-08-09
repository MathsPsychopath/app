import React from 'react';
import { Link as RawLink, ILinkProps as IRawLinkProps, useTheme } from 'native-base';

interface ILinkProps extends IRawLinkProps {}

const Link = function (props: ILinkProps) {
    const theme = useTheme();

    return <RawLink _text={{ color: theme.colors.blue[500] }} {...props} />;
};

export default Link;
