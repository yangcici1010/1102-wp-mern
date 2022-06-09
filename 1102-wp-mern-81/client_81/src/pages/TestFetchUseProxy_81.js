import axios from 'axios';

const TestFetchUseProxy_81 = async () => {

    const resp = await fetch('/api/v1/data.json');
    const data_local_json = await resp.json();
    console.log('local json data', data_local_json);

    const response = await fetch('/api/v1');
    const data1 = await response.json();
    console.log('fetch data', data1);

    const data2 = await axios.get('/api/v1');
    console.log('axios data2', data2.data);

    try {
        const currentUser = {
            "name": "cc2",
            "email": "cc2@gmail.com",
            "password": "secret22"

        };
        const { data } = await axios.post('/api/v1/auth_81/register_81',
            currentUser
        );
        console.log("register data", data)
    } catch (err) {
        console.log(err);
    }
    // //    return (<div />);
};
export default TestFetchUseProxy_81;