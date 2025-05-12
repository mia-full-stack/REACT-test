import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import styles from "./styles";

const CartCheckout = ({ totalPrice }) => {
    return (
        <Box sx={styles.wrapper}>
            <Typography variant="h5">Total price: {totalPrice}</Typography>
            <Link to="/checkout">
                <Button variant="contained" color="success">
                    To checkout
                </Button>
            </Link>
        </Box>
    )
};

export default CartCheckout;