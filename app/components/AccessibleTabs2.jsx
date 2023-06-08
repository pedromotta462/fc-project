"use client";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Order, Table } from './components';
import imgs from "../../public/images/index"

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Criando um tema personalizado
const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent', // Defina o fundo das abas aqui
        },
        indicator: {
          backgroundColor: '#BE0F2C', // Defina a cor do indicador aqui
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#BE0F2C', // Defina a cor dos itens não selecionados aqui
          '&$selected': {
            color: '#BE0F2C', // Defina a cor dos itens selecionados aqui
          },
        },
      },
    },
  },
});

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ textColor:'#BE0F2C', borderBottom: 1, borderColor: 'divider' }}>
          <Tabs textColor="inherit" value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Pedidos" {...a11yProps(0)} 
            sx={{
                backgroundColor: value === 'one' ? '#BE0F2C' : 'inherit',
              }}
            />
            <Tab label="Histórico do Cliente" {...a11yProps(1)} 
            sx={{
                backgroundColor: value === 'two' ? '#BE0F2C' : 'inherit',
              }}
            />
            <Tab label="Tickets do Cliente" {...a11yProps(2)} 
            sx={{
                backgroundColor: value === 'three' ? '#BE0F2C' : 'inherit',
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Order 
            date={'02 de junho de 2023'}
            total={'2.630,55'}
            npedido={'178236517826354'}
            image={imgs.freezer}
            nameprod={'Geladeira/Refrigerador Brastemp Frost Free Duplex 375L Branco 220V - BRM44HBBNA'}
            arrive={'hoje até 20h'}
          />

          <Order 
            date={'29 de maio de 2023'}
            total={'1.898,00'}
            npedido={'651782317826354'}
            image={imgs.tv}
            nameprod={'Smart TV LED 43" Samsung Crystal 4K HDR UN43AU7700GXZD'}
            arrive={'amanhã'}
          />

          <Order 
            date={'25 de maio de 2023'}
            total={'2.929,90'}
            npedido={'826354178236517'}
            image={imgs.churras}
            nameprod={'Churrasqueira a Gás B400 3 Queimadores Naterial'}
            arrive={'sexta-feira'}
          />

        </TabPanel>
        <TabPanel value={value} index={1}>
          Histórico
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Table />
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}


