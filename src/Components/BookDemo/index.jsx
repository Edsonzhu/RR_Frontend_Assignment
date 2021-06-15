import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Component
import BodyTemplate from '../BodyTemplate';
import Title from '../Title';
import Asterisk from '../RequiredAsterisk';
import LoadingSpin from '../LoadingSpin';

const Background = styled.div`
  background-color: #F5F5F5;
  justify-content: space-between;
`

const Body = styled(BodyTemplate)`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 926px) {
    flex-direction: column;
  }
`

const TitleStyled = styled(Title)`
  margin-bottom: 8px;
`

const Image = styled.img.attrs({
  src: '/assets/event-picture.jpg',
})`
  width: 482px;
  height: 364px;
`

const Label = styled.label`
  font-family: Open Sans;
  font-weight: 600;
  display: block;
  margin-top: 24px;
`

const InputField = styled.input`
  background: #FFFFFF;
  border: 1px solid ${({error}) => error ? '#AA0000': '#CCCCCC'};
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin-top: 10px;
`

const Space = styled.div`
  height: 30px;
  width: 30px;
`

const ErrorField = styled.p`
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  color: #AA0000;
  margin-top: 3px;
`

const Button = styled.button`
  border: none;
  width: 136px;
  height: 52px;
  background-color: #0043BF;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  font-size: 16px;
  display: block;
  margin-top: 24px;

`

const FormWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 585px;
  margin: 0 auto;
`

const SuccessWrapper = styled.div`
  margin-top: 28px;
  display: flex;
`

const SuccessIcon = styled.div`
  flex: 0 0 139px;
  height: 139px;
  background-color: #006600;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  color: #fff;
  font-size: 54px;
`

const NewDemo = styled.div`
  margin-top: 16px;
  width: 290px
  font-weight: 600;
  text-decoration-line: underline;
  color: #0043BF;
  cursor: pointer;
`

const LabelGroup = styled(Label)`
  margin-bottom: 8px;
`

const RadioLabel = styled.label`
  margin: 4px 8px 0;
`

const BookDemo = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isFormNew, setForm] = useState(true);
  const [isVideo, setVideo] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setVideo(prev => !prev);
    }, 10000);

    return () => clearInterval(timerId);
  }, []);

  const handleNewDemo = () => setForm(true);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '', 
      phone: '',
      contactForm: 'email',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      lastName: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.number().required('Required'),
    }),
    onSubmit: (values) => {
      console.log("Submitting the following info:", values);

      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setForm(false);
      }, 2000);
    },
  });

  return(
    <Background id='#bookDemo'>
      <Body>
        <FormWrapper>
          <TitleStyled>
            Book a demo
          </TitleStyled>
          <p>
            Fields marked with a <Asterisk/> are required
          </p>
          {isSubmitting 
            ? <LoadingSpin />
            : isFormNew 
            ? <form onSubmit={formik.handleSubmit} >
            <Label htmlFor="firstName">
              First name<Asterisk/>
            </Label>
            <InputField 
              id="firstName" 
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={formik.touched.firstName && formik.errors.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <ErrorField>First name is required</ErrorField>
            ) : null}

            <Label htmlFor="lastName">
              Last name<Asterisk/>
            </Label>
            <InputField 
              id="lastName" 
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.touched.lastName && formik.errors.lastName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <ErrorField>Last name is required</ErrorField>
            ) : null}

            <Label htmlFor="email">
              Email<Asterisk/>
            </Label>
            <InputField 
              id="email" 
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <ErrorField>Email is required</ErrorField>
            ) : null}

            <Label htmlFor="phone">
              Phone number<Asterisk/>
            </Label>
            <InputField 
              id="phone" 
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              error={formik.touched.phone && formik.errors.phone}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <ErrorField>Phone number is required</ErrorField>
            ) : null}

            <LabelGroup>
              Preferred method of contact
            </LabelGroup>
            <div>
              <input 
              type="radio" 
              value="email" 
              name="contactForm"  
              checked={formik.values.contactForm === 'email'}
              onChange={formik.handleChange}
              />
              <RadioLabel>Email</RadioLabel>
            </div>
            <div>
              <input 
              type="radio" 
              value="phone" 
              name="contactForm"  
              checked={formik.values.contactForm === 'phone'}
              onChange={formik.handleChange}
              />
              <RadioLabel>Phone</RadioLabel>
            </div>

            <Button type="submit">
              Sign up
            </Button>
          </form>
          : <SuccessWrapper>
            <SuccessIcon>
              <FontAwesomeIcon icon={faCheck} />
            </SuccessIcon>
            <div>
              <Title>Demo request sent!</Title>
              <p>Someone will reach out to schedule your demo within the next 48 business hours</p>
              <NewDemo onClick={handleNewDemo} >Request another demo</NewDemo>
            </div>
          </SuccessWrapper>}
        </FormWrapper>
        <Space />
        {isVideo
          ? <Image />
          : <iframe 
            width="482" 
            height="364" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/RM8G79xkw_Y?rel=0;&autoplay=1&mute=1" 
            title="YouTube video player" 
            frameborder="0" 
            allowfullscreen>
          </iframe>
        }
      </Body>
    </Background>
  )
}

export default BookDemo;