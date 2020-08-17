import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

//Playlist image placeholder
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

import { useDispatch } from "react-redux";

//Custom
import gameDialogActions from "../states/gameDialog/actions";

const useStyles = makeStyles({
  root: {
    width: 150,
    height: 240
  },
  area: {
    height: "100%",
    overflow: "hidden"
  },
  media: {
    height: "65%",
    textAlign: "center",
    lineHeight: "220px",
    backgroundColor: "#ccc"
  },
  content: {
    height: 100
  },
  actions: {
    height: 100
  },
  playBtn: {
    backgroundColor: "primary"
  },
  playIcon: {
    fontSize: "80px"
  }
});

export default function PlaylistCard({ id, name, desc, spotifyUrl, image }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card
      onClick={() => dispatch(gameDialogActions.set(id, name))}
      className={classes.root}
    >
      <CardActionArea className={classes.area}>
        <CardMedia className={classes.media} image={image || ""}>
          {!image && <PlayCircleFilledWhiteIcon className={classes.playIcon} />}
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions className={classes.actions}>
        <Button size="small" color="primary" className={classes.playBtn}>
          Play this Playlist!
        </Button>
        <Button href={spotifyUrl} target="_blank" color="primary">
          View on Spotify
        </Button>
      </CardActions> */}
    </Card>
  );
}
