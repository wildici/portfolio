import * as React from 'react';
import {Container, Box, Typography, Tabs, Tab} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

import {useLanguageContext} from '../../../shared/contexts';
import {IContent} from './IContent';

function TabPanel(props: IContent) {

    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export const Content = () => {

    const {language} = useLanguageContext();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ width: '100%', marginTop: 12 }}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary" indicatorColor="secondary" >
                    <Tab icon={<PersonPinIcon />} label={language === 'pt-br' ? 'Sobre mim' : 'About me'} {...a11yProps(0)} />
                    <Tab icon={<ImportantDevicesIcon />} label={language === 'pt-br' ? 'Projetos' : 'Projects'} {...a11yProps(1)} />
                    <Tab icon={<PersonPinIcon />} label={language === 'pt-br' ? 'Habilidades' : 'Skills'} {...a11yProps(2)} />
                    <Tab icon={<PhoneIcon />} label={language === 'pt-br' ? 'Contato' : 'Contact'} {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Sobre mim
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Projetos
                </TabPanel>
                <TabPanel value={value} index={2}>
                    JavaScript, React
                </TabPanel>
                <TabPanel value={value} index={3}>
                    GitHub, LinkedIn, etc
                </TabPanel>
            </Box>
        </Container>
    )
}