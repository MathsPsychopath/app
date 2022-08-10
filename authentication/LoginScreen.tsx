import React from 'react';
import { Text, Heading, VStack, FormControl, Input, Box, HStack } from 'native-base';

import Button from '../ui/Button';
import Link from '../ui/Link';
import { SvgUri } from 'react-native-svg';

const LoginScreen = function () {
    return (
        <Box safeArea w="100%" px={4} py={10}>
            <Heading fontSize="5xl" mb={2}>
                Login
            </Heading>
            <Text fontSize="md" mb={6}>
                Please login to continue
            </Text>
            <VStack space={3}>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input />
                </FormControl>
                <Button>Submit</Button>
                <Button variant="outlined" position="relative">
                    <PositionedButtonContent
                        uri="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        left="-100px"
                    >
                        Login with Google
                    </PositionedButtonContent>
                </Button>
                <Button variant="outlined" position="relative">
                    <PositionedButtonContent
                        uri="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                        left="-95px"
                    >
                        Login with LinkedIn
                    </PositionedButtonContent>
                </Button>
                <Link>Not yet a member? Sign up!</Link>
            </VStack>
        </Box>
    );
};

type PositionedProps = {
    uri: string;
    left: string;
    children: React.ReactNode;
};

const PositionedButtonContent = ({ uri, left, children }: PositionedProps) => (
    <HStack>
        <Box position="absolute" left={left}>
            <SvgUri uri={uri} width={25} height={25} />
        </Box>
        <Text>{children}</Text>
    </HStack>
);

export default LoginScreen;
