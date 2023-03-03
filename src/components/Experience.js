import { VerticalTimeline, 
    VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "./Experience.css"

const Experience = () => { 
  return (
    <div>
        <VerticalTimeline className="timeline-root" lineColor="var(--gradient-text)" 
        >
            <VerticalTimelineElement 
            className="vertical-timeline-element--education"
            date="2018-2021"
            dateClassName="date"
            contentStyle={{ 
                         background: '#11081b', color: '#fff', padding: "1rem",  
                         border: "1px solid white", marginBottom: "-2.5rem"
                         }}
            iconStyle={{background: "var(--gradient-text)", color: "white"}}
            icon={<WorkIcon/>}>
           <h3 >
            Freelance Developer
          </h3>
          <p> Self-employed</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020-2021"
            dateClassName="date"
            contentStyle={{ 
                        background: '#11081b', color: '#fff', padding: "1rem",  
                        border: "1px solid white", marginBottom: "-3rem"
                        }}
            iconStyle={{background: "var(--gradient-text)", color: "white"}}
            icon={<SchoolIcon/>}>
        
          <h3 className="vertical-timeline-element-title">
          Collège de Bois-de-Boulogne
          </h3>
          <p> Francisation et intégration à la société Québécoise</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022-2022"
          dateClassName="date"
          contentStyle={{ 
                       background: '#11081b', color: '#fff', padding: "1rem",  
                       border: "1px solid white"
                       }}
          iconStyle={{background: "var(--gradient-text)", color: "white"}}
          icon={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">
          Concordia University
          </h3>
          <p className="vertical-timeline-element-subtitle">
          Diploma in Full-Stack Web Development
          </p>
          {/* <p>Developed the backend infrastructure for 3 projects.</p> */}
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}



export default Experience