import React from 'react';
import { Text, Heading, VStack, FormControl, Input, Box, Button, Link } from 'native-base';

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
                <Button>Login with Linkedin</Button>
                <Link>Not yet a member? Sign up!</Link>
            </VStack>
        </Box>
    );
};

export default LoginScreen;
