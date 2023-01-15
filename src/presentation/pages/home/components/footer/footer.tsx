
import { Box, Typography } from "@mui/material";
import isotipoImg from "../../../../assets/images/isotipo.svg";
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <Box>
        <img src={isotipoImg} />
      </Box>
      <div></div>
      <Typography variant="h5" component="h2">
        @ 2023 Novopayment Inc. All rights reserved
      </Typography>
      <Box>
        <img src={isotipoImg} />
      </Box>
    </footer>
  );
}
