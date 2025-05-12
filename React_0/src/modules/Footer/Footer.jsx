/** @jsxImportSource @emotion/react */

import { footerStyle } from "./styles";


import { Box, Typography, Paper} from "@mui/material";
import  Grid from '@mui/material/Grid';

import Container from "../layouts/Container/Container";

import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PhoneIcon from "@mui/icons-material/Phone"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const Footer = () => {
    return (
        <Container>


            <footer css={footerStyle}>

                <Box
                    display="grid"
                    gridTemplateColumns="repeat(1, 1fr)"
                    gap={2}

                    sx={{ mb: 6, maxWidth: "1440px", fontFamily: "Montserrat" }}>
                    <Container>
                        {/* Заголовок секции */}
                        <Typography variant="h4" component="h2" sx={{ mb: 3, fontFamily: "Montserrat", fontWeight: 700 }}>
                            Contact
                        </Typography>

                        {/* Сетка с контактной информацией */}
                        <Grid container spacing={2}>



                            {/* Блок с телефоном */}
                            <Grid size={8} md={6}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",

                                        bgcolor: "#f5f5f5",
                                        borderRadius: 2,
                                        minHeight: "150px",
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Phone
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "center", mt: 1, }}>
                                        <PhoneIcon sx={{ mr: 1, color: "text.secondary" }} />
                                        <Typography
                                            variant="h4"
                                            component="a"
                                            href="tel:+4930915-88492"
                                            sx={{ textDecoration: "none", color: "inherit", fontFamily: "Montserrat", fontWeight: 600, fontSize: "2.5rem" }}
                                        >
                                            +49 30 915-88492
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>

                            {/* Блок с социальными сетями */}
                            <Grid size={4} md={6}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        bgcolor: "#f5f5f5",
                                        borderRadius: 2,
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Socials
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                        <Box
                                            component="a"
                                            href="https://instagram.com/petshop"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: 40,
                                                height: 40,
                                                borderRadius: "50%",
                                                bgcolor: "#000",
                                                color: "#fff",
                                                mr: 2,
                                                transition: "transform 0.2s",
                                                "&:hover": {
                                                    transform: "scale(1.1)",
                                                },
                                            }}
                                        >
                                            <InstagramIcon />
                                        </Box>
                                        <Box
                                            component="a"
                                            href="https://wa.me/4930915-88492"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: 40,
                                                height: 40,
                                                borderRadius: "50%",
                                                bgcolor: "#25D366",
                                                color: "#fff",
                                                transition: "transform 0.2s",
                                                "&:hover": {
                                                    transform: "scale(1.1)",
                                                },
                                            }}
                                        >
                                            <WhatsAppIcon />
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>




                            {/* Блок с адресом */}
                            <Grid size={8} md={6}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        bgcolor: "#f5f5f5",
                                        borderRadius: 2,

                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Address
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "flex-start", mt: 1, }}>
                                        <LocationOnIcon sx={{ mr: 1, color: "text.secondary", mt: 0.5 }} />
                                        <Typography sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: "2.5rem" }} variant="h4">Wallstraße 9-13, 10179 Berlin, Deutschland</Typography>
                                    </Box>
                                </Paper>
                            </Grid>

                            {/* Блок с часами работы */}
                            <Grid size={4} md={6}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        bgcolor: "#f5f5f5",
                                        borderRadius: 2,
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Working Hours
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                        <AccessTimeIcon sx={{ mr: 1, color: "text.secondary" }} />
                                        <Typography sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: "2rem" }} variant="h4">24 hours a day</Typography>
                                    </Box>
                                </Paper>
                            </Grid>




                            {/* Карта */}

                            <Paper
                                sx={{
                                    p: 0,
                                    height: 300,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    width: "1355px",
                                }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092231792297!2d13.4097!3d52.5144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1edb0a3747%3A0x20ea61529f4f3c5a!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Карта местоположения магазина"
                                ></iframe>
                            </Paper>







                        </Grid>



                    </Container>
                </Box>
            </footer>
        </Container>
    )
}

export default Footer;

