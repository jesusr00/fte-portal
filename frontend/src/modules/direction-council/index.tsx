import React from "react";
import useGetDirectionCouncil from "./hooks/useGetDirectionCouncil";

export const DirectionCouncil: React.FC = () => {
  const { data, error, isLoading } = useGetDirectionCouncil();

  console.log(data, error, isLoading);

  return <div>DirectionCouncil</div>;
};
