import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(styles,{
  root: {
  minWidth: 275,
  padding: "15%",
},
bullet: {
  display: 'inline-block',
  margin: '0 2px',
  transform: 'scale(0.8)',
},
pos: {
  marginBottom: 12,
},});

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About the App</h2>
          <h5 className={classes.description}>
          Our cities are unable to cope up with the growing sanitation needs of the citizens. Thus, it is the need of the hour to leverage the power of AI technology in order to mitigate the environmental & health hazards caused by garbage sites, clogged sewers, burning trash and decaying waste.

          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Role of Garbage Reporting apps              "
              description="There are currently more than 500 million smartphone users in India. And yet, everyone has to bear the eye-sore of garbage lying on the streets. Municipal Corporations across the nation are now incorporating mo in order to fast-track the garbage collection and reporting process.

              Garbage reporting apps allow citizens to report garbage sites by clicking pictures on their smartphones. Each image is geo-tagged so that the authorities know where to take action.
              Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={PhoneIphoneIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="How can computer vision help?"
              description="Officials receive thousands of complaints on a daily basis. With the understaffed and underfunded Municipal infrastructure, it is practically impossible to manually assign workers to each garbage site. 

              Also, these apps receive a lot of spam reports and the authorities have no prior information about the type of garbage. This leads to inefficiencies & wastage of time/resources.
              
              Analyzing the reported images using computer vision can help reject spam reports on-the-fly and automatically detect the type of garbage in the image.
              "
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Your goal"
              description="We call upon students, programmers. Computer Vision enthusiasts and researchers to take on the challenge of using AI to detect garbage in images reported through garbage reporting apps.

              In technical terms, the primary goal of this challenge is to develop a binary classification model, robust on the Indian use-case, that can effectively tell garbage images apart from non-garbage spam reports.
              "
              icon={CenterFocusStrongIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <GridContainer justify="center" >
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Timeline</h2>
          <h5 className={classes.description}>
          We'll be conducting this hackathon in two Phases. You can find a short preview for the same in the adjacent section.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer >
        <GridItem xs={12} sm={12} md={2}></GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" >
          Phase 1 Intro
        </Typography>
        <Typography variant="body2" component="p" className={classes.description}>
        Students interested in Computer Vision/Deep Learning and are looking for a place to start are encouraged to participate (especially Y20 & Y19).

The phase-1 is designed to provide exposure to beginners through beginner-friendly tasks. Students with any prior experience with Python/ML should submit as soon as possible to qualify for the next task.

          <br />
        </Typography>
        <Typography className={classes.title} color="textSecondary" >
          Phase 1 Learning Obectives
        </Typography>
        <Typography variant="body2" component="p" align="left" padding="10%" className={classes.description}>
        
            1) Data collection<br/>
            2) Using Python Scripts<br/>
            3) Hands on with Google Colab<br/>
            4)
            Training your first Neural Network model
            <br/><br/><br/><p>The required Python scripts, NN model, and relevant instructions will be provided to students. You are expected to familiarize yourself with the concepts used, go through the code and run the scripts/model for your submission.</p>
          
        </Typography>
        <Typography className={classes.title} color="textSecondary" >
          Phase 1 Rewards
        </Typography>
        <Typography variant="body2" component="p" align="left" padding="10%" className={classes.description}>
        Students successfully submitting Phase-1 tasks will be awarded a Certificate of Project Completion by PClub. In addition, they will qualify for Phase-2 of the hackathon.
        </Typography>
      </CardContent>
    </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" >
          Phase 2 Intro
        </Typography>
        <Typography className={classes.description} variant="body2" component="p">
        This task encourages students to improve the model using various Computer Vision techniques, train the model with more diverse real-life data and employ data scraping at a larger scale.

          <br />
        </Typography>
        <Typography className={classes.title} color="textSecondary" >
          Phase 2 Learning Obectives
        </Typography>
        <Typography variant="body2" className={classes.description} component="p" align="left" padding="10%">
        
            1) Learn advanced Computer Vision techniques
<br/>
            2) Tune hyperparameters, experiment with various activations and number/sizes of layers.
<br/>
            
        </Typography>
        <Typography className={classes.title} color="textSecondary" >
          Phase 2 Rewards
        </Typography>
        <Typography variant="body2" component="p" align="left" padding="10%" className={classes.description}>
        The model will not only be judged on the final accuracy, but also novelty of the approach & a single page PDF report. The top-3 performers will be awarded prizes and certificates from PClub, IIT Kanpur. 
<br/><br/>
They will also get a chance to work on a Computer Vision research project.
</Typography>
      </CardContent>
    </Card>
          
        </GridItem>
        <GridItem xs={12} sm={12} md={2}></GridItem>
          
        </GridContainer>
      </div>
    </div>
    
  );
}
