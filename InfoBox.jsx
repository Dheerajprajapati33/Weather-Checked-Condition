import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox({info}){
  const INIT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyC8gReZ4RtauxTzgODM1Zi2qt8wx8ZGK1g&s";

  let COLD_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTz_4Y5xVMovEycogoK3zTwuMSt3HqEX_Dg&s";


  let RAIN_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyC8gReZ4RtauxTzgODM1Zi2qt8wx8ZGK1g&s";

  let HOT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMHFERmBsiMPilr7L5pnPLUuSbv-uhnWtXw&s";

    return(
    <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity >40
           ? RAIN_URL 
           :info.temp>15 
           ?HOT_URL 
           :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{ info.humidity >40
           ? <ThunderstormIcon/> 
           :info.temp>15 
           ?<LightModeIcon/> 
           :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperatue={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p> 
          <p>City={info.city}</p>
          <p>Weather is describe that <i>{info.weather}</i> and feel like haze today.</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    )
}