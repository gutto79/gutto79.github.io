import { Star } from "lucide-react";

export const renderStars = (level: number, name?: string) => {
  if (name === "TOEIC") {
    return (
      <div className="flex flex-col items-center">
        <div className="text-lg font-bold text-cyan-600">{level}</div>
      </div>
    );
  }

  const stars = [];
  const fullStars = Math.floor(level);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className="w-3 h-3 fill-yellow-400 text-yellow-400 drop-shadow-sm"
      />
    );
  }

  const emptyStars = 4 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />);
  }

  return <div className="flex gap-0.5 justify-center">{stars}</div>;
};
