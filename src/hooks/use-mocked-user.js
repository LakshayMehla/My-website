// TO GET THE USER FROM THE AUTHCONTEXT, YOU CAN USE

// CHANGE:
// import { useMockedUser } from 'src/hooks/use-mocked-user';
// const { user } = useMockedUser();

// TO:
// import { useAuthContext } from 'src/auth/hooks';
// const { user } = useAuthContext();

// ----------------------------------------------------------------------

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Lakshay Mehla',
    email: 'mehlalakshay@gmail.com',
    password: 'demo1234',
    photoURL: '/assets/placeholder.svg',
    phoneNumber: '+91 8053538873',
    country: 'India',
    address: 'Gurugram, Haryana',
    state: 'Haryana',
    city: 'Gurugram',
    zipCode: '122001',
    about: 'Lead Full Stack Developer with 2.5+ years delivering B2B travel platforms end-to-end.',
    role: 'admin',
    isPublic: true,
  };

  return { user };
}
