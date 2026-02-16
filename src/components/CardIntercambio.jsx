import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import logo from "../assets/images/logo.png";


function CardIntercambio({intercambio = "", usuario = "", imageToAdd, descripcion = "", numeroDeCreditosBase=0}){
    
  return (
    <Card sx={{ maxWidth: 345,  }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={intercambio + ", equivalen a " + numeroDeCreditosBase + " Truecréditos."}
        subheader={usuario}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageToAdd || logo}
        sx={{opacity: imageToAdd? 1: 0.5}}
        alt={intercambio}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="info">Intercambiar</Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default CardIntercambio;