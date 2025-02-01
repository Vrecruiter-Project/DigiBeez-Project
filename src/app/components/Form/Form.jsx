import React from 'react'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import flag from '../../../assets/herosection/flag.png'
import {
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowRight } from "lucide-react";


export default function Form({btntext="Booking Free Demo Class"}) {
  return (
    <>
      <form>
        <Typography sx={{ fontSize: '12px' }}>
          Name <span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField

          fullWidth
          required

          size="small"
          sx={{
            mb: '9px'
          }}

        />
        <Typography sx={{ fontSize: '12px' }}>
          Email <span style={{ color: "red" }}>*</span>
        </Typography>

        <TextField

          type="email"
          fontSize='12px'
          fullWidth
          required
          variant="outlined"
          size="small"
          sx={{
            mb: '9px',

          }}

        />
        <Typography sx={{ fontSize: '12px' }}>
          Phone Number <span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField

          fullWidth
          required
          variant="outlined"
          size="small"
          sx={{
            mb: '9px'
          }}

          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={flag}
                  alt="Indian Flag"
                  style={{ height: "20px", width: "20px" }}
                />
              </InputAdornment>
            ),
          }}
        />

        <FormControl>
          <Typography sx={{ fontSize: '14px' }}>
            Experience <span style={{ color: "red" }}>*</span>
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Working professional - Technical roles"
            name="radio-buttons-group"
          >
            {[
              "Technical roles",
              "Non technical",
              "Final year student",
              "1st to pre-final year student",
              "Others",
            ].map((option, index) => (
              <FormControlLabel
                key={`experience-${index}`}
                value={option}
                control={<Radio />}
                label={
                  <Typography sx={{ fontSize: { xs: "0.8rem", sm: "0.85rem", lg: "0.9rem" }, fontWeight: "medium" }}>
                    {option}
                  </Typography>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Button
          className="bg-[#FCC41B] text-black font-bold py-1.5 px-2 rounded-lg"
          type="submit"
          fullWidth
          variant="contained"


          sx={{
            mt: 2,
            py: 1.5,
            fontWeight: 'bold',
            color: 'black',
            bgcolor: '#FCC41B',
            fontSize: { xs: '10px', md: '12px', lg: '13px' },
            borderRadius: "9px"
          }}

          endIcon={<ArrowRight />}
        >
          {btntext}
        </Button>
      </form>
    </>
  )
}
