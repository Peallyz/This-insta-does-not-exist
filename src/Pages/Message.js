import React from "react";
import InboxContact from "../Component/Inbox/InboxContact";
import InboxMessage from "../Component/Inbox/InboxMessage";
import InboxTitle from "../Component/Inbox/InboxTitle";

const Message = () => {
    return (
        <div className="inbox">
            <div className="sendbox">
                <InboxTitle />

                <InboxContact />
                <InboxMessage />
            </div>
        </div>
    );
};

export default Message;
