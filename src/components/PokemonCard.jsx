import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

export const PokemonCard = ({ name, url }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src={
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png"
          }
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};
