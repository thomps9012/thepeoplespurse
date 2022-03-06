import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const OfficialCards = ({ office, officials }: any) => {
    if (office != '') {
        const officeOfficials = office.officialIndices;
        console.log(officeOfficials)
        return (
            officeOfficials.map((officeIndex: number) => {
                const lvlOfficial: any = officials[officeIndex];
                const { name, party, urls, address, phones } = lvlOfficial;
                console.log(lvlOfficial)
                return (
                    <Card>
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                {name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {party}
                            </Typography>
                            <Typography variant="body2">
                                Address: {address[0].line1},
                                {address[0].city},
                                {address[0].state},
                                {address[0].zip}
                                <br />
                                Phone: {phones[0]}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={urls
                                ? urls[0]
                                : `https://www.google.com/search?q=${encodeURI(name)}`}>
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                )
            })
        )
    } else {
        return <></>
    }
}

export default OfficialCards;