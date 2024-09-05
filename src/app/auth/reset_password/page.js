import ForgotPasswordForm from '@/app/components/forms/forgotPassword';
import ResetPasswordForm from '@/app/components/forms/resetPassword';
import PageLayout from '@/app/components/layout/PageLayout';
import prisma from '@/lib/prisma';


const ResetPasswordPage = async ({ searchParams }) => {
    console.log("params: ", searchParams.token);
    if (searchParams.token) {
        const user = await prisma.user.findUnique({
            where: {
                token: searchParams.token,
            },
        });
        if (!user) {
            throw new Error("Invalid token")
        }

        return (
            <PageLayout>
                <ResetPasswordForm token={searchParams.token} />
            </PageLayout>
        )
    } else {
        return (
            <PageLayout>
                <ForgotPasswordForm />
            </PageLayout>
        );
    }
};

export default ResetPasswordPage;
