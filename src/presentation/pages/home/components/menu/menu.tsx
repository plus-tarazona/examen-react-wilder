import { Box } from '@mui/material';
import { useEffect } from 'react';
import { optionsApi } from '../../../../../core/http/options.http';
import Navbar from '../navbar/navbar';
import './menu.scss';

export default function Menu() {

  useEffect(() => {
    optionsApi.getAll().then((result) => {
      console.log(result.data);
    })
  })

  return (
    <Box className="menu">
      <div className="nav-area">
        <Navbar />
      </div>
      {/* <nav>
        <List
          sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}
          aria-labelledby="nested-list"
        >
          {
            menus.map((option) => (
              <div key={option.id}>
                <ListItem onClick={() => handleClick(!opened)}
                >{option.title}</ListItem>
                {
                  option.options && 
                  <Collapse
                    key={option.id}
                    in={opened}
                    timeout="auto"
                    unmountOnExit
                    sx={{ backgroundColor: '#ffffff' }}
                  >
                    <List disablePadding>
                    {
                      option.options.map((subOption) => (
                        <ListItem key={subOption.id}>{subOption.title}</ListItem>
                      ))
                    }
                    </List>
                  </Collapse>
                }
              </div>
            ))
          }
        </List>
      </nav> */}
    </Box>
  );
}