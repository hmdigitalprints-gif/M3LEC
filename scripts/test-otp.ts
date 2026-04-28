import { OtpService } from './server/services/otpService';
import crypto from 'crypto';

(async () => {
    const otp = "123456";
    const hashed = crypto.createHash("sha256").update(otp).digest("hex");
    console.log("Hashed OTP:", hashed);
})();
