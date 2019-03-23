import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
  

class Item extends React.Component {
    render(){

        return(
            <Card className={styles.card}>
                <CardContent>
                   
                    <Typography variant="h5" component="h2">
                        {this.props.data}
                    </Typography>
                    <Typography className={styles.pos} color="textSecondary">
                        {this.props.temperature}
                    </Typography>
                   
                </CardContent>
               
            </Card>
        );
    }
}

export default Item;