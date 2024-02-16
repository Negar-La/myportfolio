import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import './Experience.css';

const Experience = () => {
  return (
    <div>
      <VerticalTimeline className="timeline-root" lineColor="var(--gradient-text)">
        <VerticalTimelineElement className="vertical-timeline-element--work" date="Jan 2024 - Present" dateClassName="date" contentStyle={{ background: '#11081b', color: '#fff', padding: '1rem', border: '1px solid white' }} iconStyle={{ background: 'var(--gradient-text)', color: 'white' }} icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
          <p className="vertical-timeline-element-subtitle">Women IT Teleworkers</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education" date="May 2023 - Jul 2023" dateClassName="date" contentStyle={{ background: '#11081b', color: '#fff', padding: '1rem', border: '1px solid white' }} iconStyle={{ background: 'var(--gradient-text)', color: 'white' }} icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">Wiley Edge Java Trainee</h3>
          <p className="vertical-timeline-element-subtitle">Wiley Edge</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education" date="Sep 2022 - Dec 2022" dateClassName="date" contentStyle={{ background: '#11081b', color: '#fff', padding: '1rem', border: '1px solid white' }} iconStyle={{ background: 'var(--gradient-text)', color: 'white' }} icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">Concordia University</h3>
          <p className="vertical-timeline-element-subtitle">Diploma in Full-Stack Web Development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education" date="Nov 2020 - Oct 2021" dateClassName="date" contentStyle={{ background: '#11081b', color: '#fff', padding: '1rem', border: '1px solid white', marginBottom: '-3rem' }} iconStyle={{ background: 'var(--gradient-text)', color: 'white' }} icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">Collège de Bois-de-Boulogne</h3>
          <p> Francisation et intégration à la société Québécoise</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education" date="Aug 2018 - May 2021" dateClassName="date" contentStyle={{ background: '#11081b', color: '#fff', padding: '1rem', border: '1px solid white' }} iconStyle={{ background: 'var(--gradient-text)', color: 'white' }} icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Freelance Developer</h3>
          <p> Self-employed</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
