import { PrismaClient } from '@prisma/client';
import { OtpService } from './server/services/otpService';

const prisma = new PrismaClient();

async function run() {
  const user = await prisma.user.findFirst();
  if (!user) {
    console.log("No user"); return;
  }
  const result = await OtpService.sendOTP(user.id, 'sms');
  console.log("Sent OTP:", result);
  
  // now find the OTP and check hash
  const otp = await prisma.otp.findFirst({ where: { userId: user.id }, orderBy: { createdAt: 'desc' } });
  console.log("DB OTP:", otp);

  // Note: generateOTP is random, so we don't have the clear text. 
  // Let's modify OTP Hash directly to "123456" hash
  const hash123456 = OtpService.hashOTP("123456");
  await prisma.otp.update({ where: { id: otp.id }, data: { otpHash: hash123456 } });

  const verifyResult = await OtpService.verifyOTP(user.id, "123456");
  console.log("Verify Result:", verifyResult);
}

run().catch(console.error).finally(() => prisma.$disconnect());
