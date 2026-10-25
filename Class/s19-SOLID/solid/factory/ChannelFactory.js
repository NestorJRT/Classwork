import { SmsChannel } from '../channels/SmsChannel.js';
import { EmailChannel } from '../channels/EmailChannel.js';


export class ChannelFactory {
    static createChannel(type) {
        switch (type) {
            case 'SMS':
                return new SmsChannel();
            case 'EMAIL':
                return new EmailChannel();
            default:
                throw new Error("Unsupported channel type!");
        }
    }
}