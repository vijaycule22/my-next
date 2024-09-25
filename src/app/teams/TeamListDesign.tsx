import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

// Mock data for IPL teams
const iplTeams = [
    { id: 1, name: "Chennai Super Kings", shortName: "CSK", primaryColor: "#FFFF3C", secondaryColor: "#0081E9" },
    { id: 2, name: "Mumbai Indians", shortName: "MI", primaryColor: "#004BA0", secondaryColor: "#D1AB3E" },
    { id: 3, name: "Royal Challengers Bangalore", shortName: "RCB", primaryColor: "#EC1C24", secondaryColor: "#000000" },
    { id: 4, name: "Kolkata Knight Riders", shortName: "KKR", primaryColor: "#3A225D", secondaryColor: "#B3A123" },
    { id: 5, name: "Delhi Capitals", shortName: "DC", primaryColor: "#0078BC", secondaryColor: "#EF1B23" },
    { id: 6, name: "Punjab Kings", shortName: "PBKS", primaryColor: "#ED1B24", secondaryColor: "#DCDDDF" },
    { id: 7, name: "Rajasthan Royals", shortName: "RR", primaryColor: "#EA1A85", secondaryColor: "#254AA5" },
    { id: 8, name: "Sunrisers Hyderabad", shortName: "SRH", primaryColor: "#F26522", secondaryColor: "#000000" },
]

export default function IPLTeamsPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">IPL Teams</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {iplTeams.map((team) => (
                    <Card key={team.id} className="overflow-hidden">
                        <CardHeader className="p-0">
                            <div
                                className="h-24 flex items-center justify-center"
                                style={{
                                    background: `linear-gradient(135deg, ${team.primaryColor} 0%, ${team.primaryColor} 50%, ${team.secondaryColor} 50%, ${team.secondaryColor} 100%)`
                                }}
                            >
                                <CardTitle className="text-4xl font-bold text-white drop-shadow-lg">
                                    {team.shortName}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{team.name}</h2>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Primary Color</span>
                                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: team.primaryColor }}></div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-sm text-gray-600">Secondary Color</span>
                                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: team.secondaryColor }}></div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}