import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

export const PokemonCard = ({ name, sprites, abilities }) => {
  return (
    <Card
      title={name}
      cover={<img src={sprites?.front_default} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta
        description={abilities?.map(({ ability }) => ability.name).join(", ")}
      />
    </Card>
  );
};
