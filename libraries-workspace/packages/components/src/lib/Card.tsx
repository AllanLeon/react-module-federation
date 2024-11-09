import { FunctionComponent, ReactNode } from 'react';

export interface CardProps {
  imgSrc: string;
  imgAlt?: string;
  title?: ReactNode;
  description?: ReactNode;
  customClass?: string;
}

export const Card: FunctionComponent<CardProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imgSrc} alt={imgAlt} />
      {(!!title || !!description) && (
        <div className="card-body">
          {!!title && <h5 className="card-title">{title}</h5>}
          {!!description && <p className="card-text">{description}</p>}
        </div>
      )}
    </div>
  );
};
