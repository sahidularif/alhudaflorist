import jwt from "jsonwebtoken";
const DEFAULT_SIGN_OPTION = {
  expiresIn: "1d",
};
export const activateUser = async (jwtUserID) => {
  try {
    const payload = verifyJwt(jwtUserID);
    const userId = payload?.id;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) throw new Error("userNotExist");
    if (user.emailVerified) throw new Error("alreadyActivated");
    const id = user.id;
    const result = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        emailVerified: new Date(),
      },
    });
    return "success";
  } catch (err) {
    console.log(err)
  }
};
export function signJwt(
  payload,
  option = DEFAULT_SIGN_OPTION
) {
  const secretKey = process.env.JWT_VERIFY_USER_SECRET;
  const token = jwt.sign(payload, secretKey);
  return token;
}

export function verifyJwt(payload) {
  try {
    const secretKey = process.env.JWT_VERIFY_USER_SECRET;
    const decoded = jwt.verify(payload, secretKey);
    return decoded;
  } catch (e) {
    console.log(e);
    return null;
  }
}