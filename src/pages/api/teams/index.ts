import {NextApiRequest, NextApiResponse} from "next";
import {TeamRequest} from "@/schemas";
import {TeamService} from "@/services/team.service";
import {Team} from "@/entity/Team";
import {DataSource} from "typeorm";
import dataSourceConfig from "@/typeorm.config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataSource = new DataSource(dataSourceConfig);
  await dataSource.initialize();

  if (req.method === 'GET') {
    try {
      const teams = await TeamService.getTeamsByCategory();

      res.status(200).json({data: teams, status: 200});
    } catch (error) {
      console.error('Error fetching teams:', error);
      res.status(500).json({error: 'Error getting teams'});
    }
  }

  if (req.method === 'POST') {
    try {
      const data: TeamRequest = req.body;

      const team: Team = await TeamService.createTeam(data);

      res.status(201).json({data: team, status: 201});
    } catch (error) {
      console.error('Error creating team and players:', error);
      res.status(500).json({error: 'Error creating team and players'});
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}