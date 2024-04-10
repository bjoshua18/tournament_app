import {Metadata} from "next";
import {Team} from "@/entity/Team";
import {fetchTeamsByCategory} from "@/data/teams";
import {Player} from "@/entity/Player";

export const metadata: Metadata = {
  title: 'Equipos por categoría'
}

export default async function TeamsPage() {
  let teamsByCategory: { [key: string]: any[] } =
    await fetchTeamsByCategory() || [];
  console.log('teamsByCategory:', teamsByCategory)

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h1 className="text-2xl font-semibold leading-tight">
            Equipos por categoría
          </h1>
        </div>
      </div>
      <div className="mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        {Object.keys(teamsByCategory).map((category, index) => (
          <div key={index} className="py-4">
            <h2 className="text-xl font-semibold">{category}</h2>
            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Teléfono
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Talla de camiseta
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Disponibilidad
                  </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {teamsByCategory[category].map((team: Team) => (
                  team.players?.map((player: Player) => (
                    <tr key={player.id} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {player.name} {player.lastname}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {player.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {player.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {player.shirtSize}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {player.availability}
                          </span>
                      </td>
                    </tr>
                  ))
                ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}