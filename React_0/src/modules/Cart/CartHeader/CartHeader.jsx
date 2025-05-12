import { memo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "./styles";

const CartHeader = ({ onClearCart }) => {
    return (
        <Box sx={styles.wrapper}>
            <Typography variant="h5" gutterBottom>
                Cart
            </Typography>
            <Button onClick={onClearCart} variant="text">
                Clear cart
            </Button>
        </Box>
    );
};

export default memo(CartHeader);
