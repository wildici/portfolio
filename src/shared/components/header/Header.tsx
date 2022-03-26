// import IHeader from './IHeader';
import { Container, Select, MenuItem, InputLabel, FormControl, Box } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';

import { useAppThemeContext, useLanguageContext } from "../../../shared/contexts";

export const Header = () => {

    const {themeName, toggleTheme } = useAppThemeContext();
    const {language, toggleLanguage} = useLanguageContext();
    const defaultLanguage = language === 'pt-br' ? 'Idioma' : 'Language';
    
    return (
        <div>
            {/* xs, sm, md, lg, xl, xxl */}
            <Container maxWidth="md" >
                <Box display='flex' justifyContent='flex-end'>

                    <Box marginTop={2} marginRight={2}>
                        <IconButton component="span" onClick={toggleTheme} >
                            {themeName === "light" ? <DarkMode fontSize="large" /> : <LightMode fontSize="large" color="primary" />}
                        </IconButton>
                    </Box>
 
                    <Box marginTop={2} sx={{ width: 140 }}>
                        <FormControl fullWidth>
                        <InputLabel id="language-label">{defaultLanguage}</InputLabel>
                            <Select
                                labelId="language-label"
                                id="language"
                                value={language}
                                label={defaultLanguage}
                                onChange={toggleLanguage}>
                                <MenuItem value='pt-br'>Português</MenuItem>
                                <MenuItem value='en-us'>Inglês</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </Box>
            </Container>
        </div>
    )
}