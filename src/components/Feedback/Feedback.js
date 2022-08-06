import { useState} from 'react';
import FeedbackOptions from '../FeedbackOptions'
import Section from '../Section'
import Statistics from '../Statistics';
import Notification from '../Notification';

function Feedback() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleFeedbackButton = event => {
        const { name } = event.target;

        switch (name) {
            case "good":
                setGood(prevState => prevState + 1);
                break;

            case "neutral":
                setNeutral(prevState => prevState + 1);
                break;

            case "bad":
                setBad(prevState => prevState + 1);
                break;

            default:
                return;
        };
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const total = countTotalFeedback();

    const countPositiveFeedbackPercentage = () => {
        return Number(total ? (good / total * 100).toFixed(0) : 0);
    }

    const feedbackOptions = ['good', 'neutral', 'bad'];

        return (
            <div>
                <Section title='Please leave feedback'>
                    <FeedbackOptions
                        options={feedbackOptions}
                        onLeaveFeedback={handleFeedbackButton} />
                </Section>

                <Section title='Statistics'>
                    {!total ?
                    (<Notification message="There is no feedback" />) :
                    (<Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={countPositiveFeedbackPercentage()} />)
                    }
                </Section>
                    
            </div>          
        );
    
}

export default Feedback;