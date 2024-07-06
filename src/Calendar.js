import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [friendsList] = useState(['Big Boss', 'Kazuhira Miller', 'Ocelot']);
    const [invitedFriends, setInvitedFriends] = useState([]);

    const handleInviteFriend = (friend) => {
        if (!invitedFriends.includes(friend)) {
            setInvitedFriends([...invitedFriends, friend]);
        }
    };

    return (
        <Container>
            <h2 className='friend-header'>Invite Friends to Paintball</h2>
            <DatePicker className="schedule" selected={selectedDate} onChange={(date) => setSelectedDate(date)}/>
            <h3 className='friend-header'>Select Friends to Invite</h3>
            <ListGroup>
                {friendsList.map((friend, index) => (
                    <ListGroup.Item key={index}>
                        {friend}
                        <Button className='invite-btn' onClick={() => handleInviteFriend(friend)}>+</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h2 className='friend-header'>Invited Friends</h2>
            <ListGroup>
                {invitedFriends.map((friend, index) => (
                    <ListGroup.Item key={index}>{friend}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default Calendar;
