import { FC } from "react";

export interface DirectionProps {
    id: string;
    header: string;
    text: string;
    image?: string;
}


const Direction: FC<DirectionProps> = ({header, text, image}) => {
  return (
    <div>
      <h4>{header}</h4>
      <p>
        {text}
      </p>
    </div>
  );
};

export default Direction;
