import moment from 'moment';

import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { fCurrency } from 'src/utils/format-number';
import { TRANSACTION_DATE_TIME_FORMAT } from 'src/utils/constants';

export default function CustomTimeline() {
  return (
    <>
      <Timeline>
        {/* Head */}
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body1" className="fw-bold" sx={{ mt: 1.5 }}>
              Credit
            </Typography>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot>
              <MonetizationOnIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body1" className="fw-bold" sx={{ mt: 1.5 }}>
              Debit
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body2">{moment().format(TRANSACTION_DATE_TIME_FORMAT)}</Typography>
            <Typography variant="body2" color="primary" className="fw-bold">
              {fCurrency(10000)}
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2">{moment().format(TRANSACTION_DATE_TIME_FORMAT)}</Typography>
            <Typography variant="body2" color="primary" className="fw-bold">
              {fCurrency(15000)}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent />
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body2">{moment().format(TRANSACTION_DATE_TIME_FORMAT)}</Typography>
            <Typography variant="body2" color="primary" className="fw-bold">
              {fCurrency(20000)}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
