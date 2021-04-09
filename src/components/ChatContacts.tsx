import  React, { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
      interface IntrinsicElements {
          'chat-contacts': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}

interface ChatFrom {
    name: string,
    objectId: string,
    email: string,
}

interface ChatContactsProps {
  from:ChatFrom,
}

const ChatContacts: React.FC<ChatContactsProps> = ({ from }) => {
  const contacts = useRef<HTMLElement & {from:ChatFrom}>(null);

  useEffect(() => {
    if (contacts.current) contacts.current.from = from;
  });

  return (
    <div>
      <chat-contacts ref={contacts} />
    </div>
  );
};

export default ChatContacts;
