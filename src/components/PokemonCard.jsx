import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { StarButton } from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

export const PokemonCard = ({ name, sprites, abilities, id, isFavorite }) => {
  const dispatcher = useDispatch();
  return (
    <Card
      title={name}
      cover={<img src={sprites?.front_default} alt={name} />}
      extra={
        <StarButton
          isFavorite={isFavorite}
          onClick={() => dispatcher(setFavorite(id))}
        />
      }
    >
      <Meta
        description={abilities?.map(({ ability }) => ability.name).join(", ")}
      />
    </Card>
  );
};
