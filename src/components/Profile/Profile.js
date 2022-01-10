import React from 'react'
import './Profile.css';
// import profilePic from '../../assets/images/download.jpeg';
import { Typography } from "@material-ui/core";
import  CustomTimeline , {CustomTimelineSeparator} from "../Timeline/Timeline";
import resumeData from '../../utils/resumeData';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import CustomButton from '../Button/Button'; 
import GetAppIcon from "@material-ui/icons/GetApp";




const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem >
        <CustomTimelineSeparator />
       <TimelineContent className="timeline_content">
             {link ? 
           (<Typography className="timeline_text">
            <span>{title}:</span> {""}
            <a href={link}  target='_blank'>
                {text}
                </a>
 </Typography>
 ) : (
<Typography className="timeline_text"> 
    <span>{title}:</span> {text}
</Typography>

           )}

       </TimelineContent>
      </TimelineItem>
);

const Profile = () => {
    return (
        <div className = "profile container_shadow ">
            <div className = "profile_name" >
                <Typography className="name">
                  {resumeData.name}
                </Typography>
                <Typography className="title">
                {resumeData.title}
                </Typography>
            </div>

            <figure className = "profile_image">
                <img src ={require("../../assets/images/IMG_20211119_120016_955.jpg")} alt="" />
                
            </figure>

            <div className = "profile_information">
              <CustomTimeline icon={<PersonOutlineOutlinedIcon/>}  >
                  
                  <CustomTimelineItem title='Name' text={resumeData.name} link={undefined} />
                  <CustomTimelineItem title='Title' text={resumeData.title}/>
                  <CustomTimelineItem title='Email' text={resumeData.email}/>

                  {Object.keys(resumeData.socials).map(key => (
                      <CustomTimelineItem 
                      title={key} text={resumeData.socials[key].text} 
                      link= {resumeData.socials[key].text}/>

                  )) }

                   </CustomTimeline> 
                <div className="button_containe" style={{display: 'flex'}}>  
        
            <CustomButton text={"Download CV"} icon={<GetAppIcon/> } / >
        </div>
        </div>
        </div>
    );
};

export default Profile;
