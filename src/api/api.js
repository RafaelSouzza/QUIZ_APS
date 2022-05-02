import axios from 'axios';
const baseUrl = 'http://192.168.0.105:8080'; // O IP vária de rede para rede

export async function getQuestions() {
    const { data } = await axios({
        method: 'get',
        url: `${baseUrl}/questoes`,
        timeout: 5000
    })
    return data
}