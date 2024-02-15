import { Container, Grid } from "@mui/material"
import signUpImg from '../../../assets/images/signup/signup.png'
const Login = () => {
  return (
  <Container>
    <Grid container height="100vh" display="flex" justifyContent="center"> 
    <Grid xs={false} md={1}></Grid>
    <Grid md={10}>
    <img src={signUpImg} />
    asdf
    </Grid>
    <Grid  xs={false} md={1}></Grid>
    </Grid>
  </Container>
  )
}

export default Login