import { Button, Stack } from "react-bootstrap";

const MyComponent1 = () => {
    return (
        <Stack direction="horizontal" gap={5}>
            <Button as="a" variant="primary">
                Button as link
            </Button>
            <Button as="a" variant="success">
                Button as link
            </Button>
        </Stack>
    );
};

export default MyComponent1;
