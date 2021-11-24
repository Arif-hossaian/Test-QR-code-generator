import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import QRcode from 'qrcode';

const ContainerWrapper = styled('div')(() => ({
  marginTop: 10,
}));
const Title = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#3f51b5',
  color: '#fff',
  padding: 10,
}));
const BUttonWrapper = styled('div')(() => ({
  marginTop: 10,
  marginBottom: 20,
}));

const App = () => {
  const [text, setText] = useState('');
  const [imageURL, setImageURL] = useState('');
  const generateQRcode = async () => {
    try {
      const response = await QRcode.toDataURL(text);
      setImageURL(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContainerWrapper>
      <Container>
        <Card>
          <Title>
            <h2>Scan QR code</h2>
          </Title>
          <CardContent>
            <Grid container spacing={3} style={{ marginTop: '20px' }}>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  label="Enter URL here"
                  variant="standard"
                  onChange={(e) => setText(e.target.value)}
                />
                <BUttonWrapper>
                  <Button variant="outlined" onClick={() => generateQRcode()}>
                    Generate
                  </Button>
                </BUttonWrapper>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                {imageURL ? (
                  <a href={imageURL} download>
                    <img
                      src={imageURL}
                      alt="img"
                      style={{
                        marginTop: '15px',
                        height: '200px',
                        width: '200px',
                      }}
                    />
                  </a>
                ) : (
                  'Enter URL at the TextField section to generate Image of QRcode'
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </ContainerWrapper>
  );
};

export default App;
