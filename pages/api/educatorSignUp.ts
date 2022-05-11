import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
export default async function handler(req: { body: string; }, res: { json: (arg0: any) => void; }) {
    let data = JSON.parse(req.body);
    const { educator_id, first_name, last_name, username, school_name, email, position, school_address, school_state } = data;
    const msg = {
        to: 'thomps9012@gmail.com',
        from: 'sthompson@norainc.org',
        subject: `Educator Access Request`,
        html: `<h1>User ${username} from the People's Purse is Requesting Educator Access to the Application</h1>
        <hr />
        <h3>User Contact Information</h3>
        <ul>
        <li><p>${educator_id}</p></li>
        <li><p>${email}</p></li>
        <li><p>${first_name}</p></li>
        <li><p>${last_name}</p></li>
        <li><p>${school_name}</p><p>${school_address}</p><p>${school_state}</p></li>
        <li><p>${position}</p></li>
        </ul>
        `
    };
    try {
        const response = await sgMail.send(msg);
        res.json(response);
    } catch (error) {
        console.error(error);
    }
}