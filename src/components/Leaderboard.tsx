import React from 'react';

interface LeaderboardEntry {
  username: string;
  score: number;
}

interface LeaderboardProps {
  leaderboard: LeaderboardEntry[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard }) => {
  return (
    <div className="mt-8 bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Rank</th>
            <th className="text-left">Username</th>
            <th className="text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : ''}>
              <td className="py-2">{index + 1}</td>
              <td>{entry.username}</td>
              <td className="text-right">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;