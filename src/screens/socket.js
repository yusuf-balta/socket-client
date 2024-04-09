import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object


export const socket = io("https://bylider.com.tr",

    {
        rejectUnauthorized: false,
        reconnection: false,
        transports: ["websocket"],
        withCredentials: true,
    }
    ,);