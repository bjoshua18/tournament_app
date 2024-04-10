import axios from "axios";

export async function fetchTeamsByCategory() {
  try {
    const {data: {data}} = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/teams',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching teams:', error);
  }
}