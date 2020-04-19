import React, { useContext } from 'react';
import { MediaContext } from '../contexts/MediaContext';
import {
  Card,
  CardMedia,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useAvatarImage } from '../hooks/ApiHooks';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Profile = () => {
  const classes = useStyles();
  const [user] = useContext(MediaContext);
  console.log(user);
  const avatar = useAvatarImage(user.user_id);
  return (
    <>
      {user !== null && avatar.length > 0 && (
        <Card>
          <CardMedia
            className={classes.media}
            image={mediaUrl + avatar[0].filename}
            title='avatar image'
          />
          <CardContent>
            <Typography component='h2' variant='h5'>
              Profile
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Username: {user.username}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Email: {user.email}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Full name: {user.full_name}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Profile;
