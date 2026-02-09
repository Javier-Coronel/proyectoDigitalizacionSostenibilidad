import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function CardIntercambio({intercambio = "", usuario = "", image = "../assets/images/logo.png", descripcion = "", numeroDeCreditosBase=0}){
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={intercambio + " equivalen a " + numeroDeCreditosBase + " Truecréditos."}
        subheader={usuario}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={intercambio}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Intercambiar</Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default CardIntercambio;