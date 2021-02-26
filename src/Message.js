import React from "react";
import { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import Message from "./Message.css"


const Messange =forwardRef( ({ message, username } , ref) => {

    const isUser = username === message.username

    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography color="white" variant='h5' component="h2">
                        {! isUser && ` ${message.username || "unknown User"}: `}  {message.message}
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
})
export default Messange