import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';

export const RX_STOMP_CONFIG: InjectableRxStompConfig = {
  // TODO adapt to backend when ready
  brokerURL: 'ws://localhost:1234/',
  connectHeaders: {
    login: 'guest',
    passcode: 'guest',
  },

  heartbeatIncoming: 0, // Typical value 0 - disabled
  heartbeatOutgoing: 20000,

  // Wait in milliseconds before attempting auto reconnect
  reconnectDelay: 500,

  // TODO probably remove after testing, said to be very verbose
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
};
