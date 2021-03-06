import React from 'react'
import './Resume.css';
import SchoolIcon from '@mui/icons-material/School';
import { Grid , Icon, Paper, TextField, Typography} from "@material-ui/core";   
import resumeData from '../../utils/resumeData';
import  CustomTimeline , {CustomTimelineSeparator} from "../../components/Timeline/Timeline";
import WorkIcon from '@mui/icons-material/Work';
import { TimelineContent, TimelineDot, TimelineItem } from '@material-ui/lab';
import CustomButton from 'components/Button/Button';








const Resume = () => {
    return (
    <div>
{/* About me */}
        <Grid container className="section pb_45 pt_45">
        <Grid item className='section_title mb_30'>
            <span></span>
     <Typography variant='h6' className="section_title-text">  About me
     </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='body2'className='aboutme_text'>
                {resumeData.about}
                </Typography>
                 </Grid>
   </Grid>

{/*Education and experiences */}
<Grid container className="section  pb_45 ">
<Grid item className='section_title mb_30'>
            <span></span>
            <Typography variant='h6' className="section_title-text">Resume</Typography>
             </Grid>
           
            <Grid item xs={12}>
            <Grid container className='resume_timeline'>

                {/* Experiences*/}
                <Grid item lg={6} sm={12} md={6}>
                    <CustomTimeline title='Work Experiences'   icon={<WorkIcon/>}>
                         {resumeData.experiences.map( (experience) => (
                             <TimelineItem>

                                 <CustomTimelineSeparator />
                                   
                                 <TimelineContent className='timline_content'>

                                     <Typography className='timeline_title'>{experience.title  }</Typography>
                                     <Typography variant='caption' className='timline_date'>{experience.date }</Typography>
                                    <Typography variant='body2' className='timeline_ description'>{experience. description}</Typography>
                                 </TimelineContent>
                             </TimelineItem>
                         )
                            )}

                    </CustomTimeline>
                </Grid>

                       {/* Education */}
                       <Grid item sm={12} md={6}>
                    <CustomTimeline title='Education History'   icon={<SchoolIcon/>}>
                         {resumeData.educations.map( (education) => (
                             <TimelineItem>

                                 <CustomTimelineSeparator />
                                   
                                 <TimelineContent className='timline_content'>

                                     <Typography className='timeline_title'>{education.title  }</Typography>
                                     <Typography variant='caption' className='timline_date'>{education.date }</Typography>
                                    <Typography variant='body2' className='timeline_ description'>{education.description}</Typography>
                                 </TimelineContent>
                             </TimelineItem>
                         )
                            )}

                    </CustomTimeline>
                </Grid>

                </Grid>
                </Grid>
                </Grid>
               
               
               
               
               
                {/*Services  */}
                <Grid container className='section'>
    <Grid item className='section_title mb_30'>
        <span></span>
        <h6  className='section_title_text' >My Services</h6>
    </Grid>
    <Grid item xs={12}>
        <Grid container justify='space-around' spacing={3}>

            {resumeData.services.map(service=>(
                <Grid item  xs={12} sm={6} md={3}>
                    <div className='service'>
                        <Icon className='service_icon'>{service.icon}</Icon>
                        <Typography className='service_title' variant='h6'>{service.title}</Typography>
                        <Typography className='service_description' >{service.description}</Typography>

                        </div> 
                
            
        </Grid>
            ))}
            </Grid>
    </Grid>

</Grid>
         
   
   
   
     {/* Skills */}    
     <Grid 
     container    
     className="section graybg pb_45 pb_50" >
         <Grid item xs={12}>
             <Grid container justify='space-between ' spacing={3}>

             {resumeData.skills.map((skill) => (
             <Grid item xs={12} sm={6} md={3}> 
             <Paper elevation={0} className="skill">
                 <Typography variant='h6' className="skill_title">
                     {skill.title}
                      </Typography>
                    {skill.description.map((element) => ( 
                        <Typography variant='body2 ' className='skill_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' /> 
                                   {element}
                        </Typography>
                     ))}
                      </Paper>
                  </Grid>
         ))}
             </Grid>
         </Grid>
         
         </Grid>   
{/* Contact */}
<Grid container spacing={6} className='section pb_45 pt_45' >


    {/* Contact Form */}
    <Grid   item xs={12} lg={7} >
<Grid container> 
<Grid item className='section_title mb_30'>
            <span></span>
            <h6 className="section_title-text">Contact Form</h6>
             </Grid>

             <Grid   item xs={12}>
                 <Grid container spacing={6}>
                     <Grid item xs={12} sm={6} >
                         <TextField  style={{marginLeft:'10px'}} fullWidth name='name' label='Name'/ >
                          </Grid>
                          <Grid item xs={12} sm={6} >
                         <TextField  style={{marginLeft:'10px'}} fullWidth name='email' label='E-mail'/ >
                          </Grid>
                          <Grid item xs={12}  >
                         <TextField style={{marginLeft:'10px'}} fullWidth name='message' label='Message' multiline rows={4}/ >
                          </Grid> 
                          <Grid item xs={12}>
                              <CustomButton text="Submit"/>
                              </Grid>       
                 </Grid>
             </Grid>
             </Grid>
             </Grid>
{/* Contact information*/}
<Grid item xs={12} lg={5}>
    <Grid container >
    <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className="section_title-text">Contact Information :-</h6>
             </Grid>
             <Grid item xs={12}>
<Grid container >
    <Grid item xs={12 }>
        <Typography className='contactinfo_item'>
            <span>Address:</span> {resumeData.address}

        </Typography>
    </Grid>
    <Grid item xs={12 }>
        <Typography className='contactinfo_item'>
            <span>Phone:</span> {resumeData.phone}

        </Typography>
    </Grid>
    <Grid item xs={12 }>
        <Typography className='contactinfo_item'>
            <span>E-mail:</span> {resumeData.email}

        </Typography>
    </Grid>
</Grid>
             </Grid>

             <Grid item xs={6}>
                 <Grid container className='contactInfo_socialsContainer'>
                     {Object.keys(resumeData.socials).map(key => (
                         <Grid item className='contactInfo_social'> 
                         <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon }</a>
                         </Grid>
                     ))}
                     </Grid> 

             </Grid>
    </Grid>

</Grid>

</Grid>


   </div>
 );
};

export default Resume;
