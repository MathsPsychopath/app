import React from 'react';
import { Text, Heading, VStack, FormControl, Input, Box, HStack, Icon } from 'native-base';

import Button from '../ui/Button';
import Link from '../ui/Link';
import { SvgUri } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';

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
                <Box position="relative">
                    <AbsoluteIcon uri="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                    <Button variant="outlined">Login with Google</Button>
                </Box>
                <Box position="relative">
                    <AbsoluteIcon uri="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" />
                    <Button variant="outlined">Login with LinkedIn</Button>
                </Box>
                <Box position="relative">
                    <Box position="absolute" left="4" top="2.5">
                        <AntDesign name="apple1" size={24} color="black" />
                    </Box>
                    <Button variant="outlined">Login with Apple</Button>
                </Box>
                <Link>Not yet a member? Sign up!</Link>
            </VStack>
        </Box>
    );
};

const AbsoluteIcon = ({ uri }: { uri: string }) => (
    <Box position="absolute" left="4" top="2.5">
        <SvgUri width={25} height={25} uri={uri} />
    </Box>
);

export default LoginScreen;
