import axios from 'axios';

const TestFetchUseCors_81 = async () => {
    console.log('test');
    const response = await fetch('http://localhost:5000');
    const data1 = await response.json();
    console.log('fetch api data', data1);

    const data2 = await axios.get('http://localhost:5000');
    console.log('axios data2', data2);

    try {
        const currentUser = {
            "name": "yangcici",
            "email": "123456@gmail.com",
            "password": "secret"

        };
        const { data } = await axios.post('http://localhost:5000/api/v1/auth_81/register_81',
            currentUser
        );
        console.log("register", data)
    } catch (err) {
        console.log(err);
    }
    //    return (<div />);
};
export default TestFetchUseCors_81;