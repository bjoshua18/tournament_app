import axios from "axios";

export async function fetchTeamsByCategory() {
  try {
    const {data: {data}} = await axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_API_URL}/teams`,
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching teams:', error);
  }
}